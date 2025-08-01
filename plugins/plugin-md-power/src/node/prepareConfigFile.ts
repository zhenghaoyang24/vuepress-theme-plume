import type { App } from 'vuepress/core'
import type { MarkdownPowerPluginOptions } from '../shared/index.js'
import { ensureEndingSlash } from '@vuepress/helper'
import { getDirname, path } from 'vuepress/utils'
import { prepareIcon } from './icon/index.js'

const { url: filepath } = import.meta
const __dirname = getDirname(filepath)

const CLIENT_FOLDER = ensureEndingSlash(
  path.resolve(__dirname, '../client'),
)

export async function prepareConfigFile(app: App, options: MarkdownPowerPluginOptions): Promise<string> {
  const imports = new Set<string>()
  const enhances = new Set<string>()

  imports.add(`import Tabs from '${CLIENT_FOLDER}components/Tabs.vue'`)
  enhances.add(`app.component('Tabs', Tabs)`)

  imports.add(`import CodeTabs from '${CLIENT_FOLDER}components/CodeTabs.vue'`)
  enhances.add(`app.component('CodeTabs', CodeTabs)`)

  if (options.pdf) {
    imports.add(`import PDFViewer from '${CLIENT_FOLDER}components/PDFViewer.vue'`)
    enhances.add(`app.component('PDFViewer', PDFViewer)`)
  }

  if (options.acfun || options.bilibili || options.youtube) {
    imports.add(`import VPVideoEmbed from '${CLIENT_FOLDER}components/VPVideoEmbed.vue'`)
    enhances.add(`app.component('VPVideoEmbed', VPVideoEmbed)`)
  }

  if (options.codepen) {
    imports.add(`import CodePen from '${CLIENT_FOLDER}components/CodePen.vue'`)
    enhances.add(`app.component('CodePenViewer', CodePen)`)
  }

  if (options.jsfiddle) {
    imports.add(`import JSFiddle from '${CLIENT_FOLDER}components/JsFiddle.vue'`)
    enhances.add(`app.component('JSFiddleViewer', JSFiddle)`)
  }

  if (options.replit) {
    imports.add(`import Replit from '${CLIENT_FOLDER}components/Replit.vue'`)
    enhances.add(`app.component('ReplitViewer', Replit)`)
  }

  if (options.codeSandbox) {
    imports.add(`import CodeSandbox from '${CLIENT_FOLDER}components/CodeSandbox.vue'`)
    enhances.add(`app.component('CodeSandboxViewer', CodeSandbox)`)
  }

  if (options.plot) {
    imports.add(`import Plot from '${CLIENT_FOLDER}components/Plot.vue'`)
    enhances.add(`app.component('Plot', Plot)`)
  }

  if (options.repl) {
    imports.add(`import CodeRepl from '${CLIENT_FOLDER}components/CodeRepl.vue'`)
    enhances.add(`app.component('CodeRepl', CodeRepl)`)
  }

  if (options.caniuse) {
    imports.add(`import CanIUse from '${CLIENT_FOLDER}components/CanIUse.vue'`)
    enhances.add(`app.component('CanIUseViewer', CanIUse)`)
  }

  if (options.fileTree || options.codeTree) {
    imports.add(`import FileTreeNode from '${CLIENT_FOLDER}components/FileTreeNode.vue'`)
    enhances.add(`app.component('FileTreeNode', FileTreeNode)`)
  }

  if (options.codeTree) {
    imports.add(`import VPCodeTree from '${CLIENT_FOLDER}components/VPCodeTree.vue'`)
    enhances.add(`app.component('VPCodeTree', VPCodeTree)`)
  }

  if (options.artPlayer) {
    imports.add(`import ArtPlayer from '${CLIENT_FOLDER}components/ArtPlayer.vue'`)
    enhances.add(`app.component('ArtPlayer', ArtPlayer)`)
  }

  if (options.audioReader) {
    imports.add(`import AudioReader from '${CLIENT_FOLDER}components/AudioReader.vue'`)
    enhances.add(`app.component('AudioReader', AudioReader)`)
  }

  if (options.demo) {
    imports.add(`import VPDemoBasic from '${CLIENT_FOLDER}components/VPDemoBasic.vue'`)
    imports.add(`import VPDemoNormal from '${CLIENT_FOLDER}components/VPDemoNormal.vue'`)
    enhances.add(`app.component('VPDemoBasic', VPDemoBasic)`)
    enhances.add(`app.component('VPDemoNormal', VPDemoNormal)`)
  }

  if (options.annotation) {
    imports.add(`import Annotation from '${CLIENT_FOLDER}components/Annotation.vue'`)
    enhances.add(`app.component('Annotation', Annotation)`)
  }

  if (options.abbr) {
    imports.add(`import Abbreviation from '${CLIENT_FOLDER}components/Abbreviation.vue'`)
    enhances.add(`app.component('Abbreviation', Abbreviation)`)
  }

  if (options.timeline) {
    imports.add(`import VPTimeline from '${CLIENT_FOLDER}components/VPTimeline.vue'`)
    imports.add(`import VPTimelineItem from '${CLIENT_FOLDER}components/VPTimelineItem.vue'`)
    enhances.add(`app.component('VPTimeline', VPTimeline)`)
    enhances.add(`app.component('VPTimelineItem', VPTimelineItem)`)
  }

  if (options.collapse) {
    imports.add(`import VPCollapse from '${CLIENT_FOLDER}components/VPCollapse.vue'`)
    imports.add(`import VPCollapseItem from '${CLIENT_FOLDER}components/VPCollapseItem.vue'`)
    enhances.add(`app.component('VPCollapse', VPCollapse)`)
    enhances.add(`app.component('VPCollapseItem', VPCollapseItem)`)
  }

  if (options.chat) {
    imports.add(`import '${CLIENT_FOLDER}styles/chat.css'`)
  }

  if (options.field) {
    imports.add(`import VPField from '${CLIENT_FOLDER}components/VPField.vue'`)
    enhances.add(`app.component('VPField', VPField)`)
  }

  if (options.table) {
    imports.add(`import VPTable from '${CLIENT_FOLDER}components/VPTable.vue'`)
    enhances.add(`app.component('VPTable', VPTable)`)
  }

  const setupIcon = prepareIcon(imports, options.icon)

  return app.writeTemp(
    'md-power/config.js',
    `\
import { defineClientConfig } from 'vuepress/client'
${Array.from(imports.values()).join('\n')}

import '${CLIENT_FOLDER}styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
${Array.from(enhances.values())
  .map(item => `    ${item}`)
  .join('\n')}
  },
  setup() {
    ${setupIcon}
  }
})
`,
  )
}
