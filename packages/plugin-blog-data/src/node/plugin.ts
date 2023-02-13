import type { Plugin } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import chokidar from 'chokidar'
import { createFilter } from 'create-filter'
import { preparedBlogData } from './prepareBlogData.js'
import type { BlogDataPluginOptions } from './index.js'

const __dirname = getDirname(import.meta.url)

export type PluginOption = Omit<BlogDataPluginOptions, 'include' | 'exclude'>

export const blogDataPlugin = ({
  include,
  exclude,
  ...pluginOptions
}: BlogDataPluginOptions = {}): Plugin => {
  const pageFilter = createFilter(toArray(include), toArray(exclude), {
    resolve: false,
  })

  return {
    name: '@vuepress-plume/vuepress-plugin-blog-data',
    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    extendsPage(page) {
      if (page.filePathRelative && pageFilter(page.filePathRelative)) {
        ;(page.data as any).isBlogPost = true
      }
    },
    onPrepared: async (app) =>
      await preparedBlogData(app, pageFilter, pluginOptions),
    onWatched(app, watchers) {
      const watcher = chokidar.watch('pages/**/*', {
        cwd: app.dir.temp(),
        ignoreInitial: true,
      })

      watcher.on(
        'add',
        async () => await preparedBlogData(app, pageFilter, pluginOptions)
      )
      watcher.on(
        'change',
        async () => await preparedBlogData(app, pageFilter, pluginOptions)
      )
      watcher.on(
        'unlink',
        async () => await preparedBlogData(app, pageFilter, pluginOptions)
      )

      watchers.push(watcher)
    },
  }
}

function toArray(likeArr: string | string[] | undefined): string[] {
  if (Array.isArray(likeArr)) return likeArr
  return likeArr ? [likeArr] : []
}