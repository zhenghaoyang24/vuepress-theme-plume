export interface Definitions {
  named: Record<string, string>
  folders: Record<string, string>
  files: Record<string, string>
  extensions: Record<string, string>
  partials: Record<string, string>
}

export const defaultFolder = 'vscode-icons:default-folder'
export const defaultFile = 'vscode-icons:default-file'

export const definitions: Definitions = {
  named: {
    // package manager
    'pnpm': 'vscode-icons:file-type-light-pnpm',
    'PNPM': 'vscode-icons:file-type-light-pnpm',
    'npm': 'logos:npm-icon',
    'NPM': 'logos:npm-icon',
    'yarn': 'vscode-icons:file-type-yarn',
    'Yarn': 'vscode-icons:file-type-yarn',
    'bun': 'vscode-icons:file-type-bun',
    'Bun': 'vscode-icons:file-type-bun',
    'deno': 'vscode-icons:file-type-light-deno',
    'Deno': 'vscode-icons:file-type-light-deno',
    // bundlers
    'rollup': 'vscode-icons:file-type-rollup',
    'Rollup': 'vscode-icons:file-type-rollup',
    'webpack': 'vscode-icons:file-type-webpack',
    'Webpack': 'vscode-icons:file-type-webpack',
    'vite': 'vscode-icons:file-type-vite',
    'Vite': 'vscode-icons:file-type-vite',
    'esbuild': 'vscode-icons:file-type-esbuild',
    'Esbuild': 'vscode-icons:file-type-esbuild',
    // frameworks
    'vue': 'vscode-icons:file-type-vue',
    'Vue': 'vscode-icons:file-type-vue',
    'svelte': 'vscode-icons:file-type-svelte',
    'Svelte': 'vscode-icons:file-type-svelte',
    'sveltekit': 'vscode-icons:file-type-svelte',
    'SvelteKit': 'vscode-icons:file-type-svelte',
    'angular': 'vscode-icons:file-type-angular',
    'Angular': 'vscode-icons:file-type-angular',
    'react': 'vscode-icons:file-type-reactjs',
    'React': 'vscode-icons:file-type-reactjs',
    'next': 'vscode-icons:file-type-light-next',
    'Next': 'vscode-icons:file-type-light-next',
    'Nextjs': 'vscode-icons:file-type-light-next',
    'NextJS': 'vscode-icons:file-type-light-next',
    'nuxt': 'vscode-icons:file-type-nuxt',
    'Nuxt': 'vscode-icons:file-type-nuxt',
    'Nuxtjs': 'vscode-icons:file-type-nuxt',
    'NuxtJS': 'vscode-icons:file-type-nuxt',
    'solid': 'logos:solidjs-icon',
    'Solid': 'logos:solidjs-icon',
    'solidjs': 'logos:solidjs-icon',
    'astro': 'vscode-icons:file-type-light-astro',
    'Astro': 'vscode-icons:file-type-light-astro',

    'vitest': 'vscode-icons:file-type-vitest',
    'Vitest': 'vscode-icons:file-type-vitest',
    'playwright': 'vscode-icons:file-type-playwright',
    'Playwright': 'vscode-icons:file-type-playwright',
    'jest': 'vscode-icons:file-type-jest',
    'Jest': 'vscode-icons:file-type-jest',
    'cypress': 'vscode-icons:file-type-cypress',
    'Cypress': 'vscode-icons:file-type-cypress',

    'docker': 'vscode-icons:file-type-docker',
    'Docker': 'vscode-icons:file-type-docker',

    // TODO: code group title icons
    // programming languages
    'html': 'vscode-icons:file-type-html',
    'Html': 'vscode-icons:file-type-html',
    'HTML': 'vscode-icons:file-type-html',
    'javascript': 'vscode-icons:file-type-js-official',
    'Javascript': 'vscode-icons:file-type-js-official',
    'JavaScript': 'vscode-icons:file-type-js-official',
    'js': 'vscode-icons:file-type-js-official',
    'JS': 'vscode-icons:file-type-js-official',
    'typescript': 'vscode-icons:file-type-typescript-official',
    'Typescript': 'vscode-icons:file-type-typescript-official',
    'TypeScript': 'vscode-icons:file-type-typescript-official',
    'ts': 'vscode-icons:file-type-typescript-official',
    'TS': 'vscode-icons:file-type-typescript-official',
    'css': 'vscode-icons:file-type-css',
    'CSS': 'vscode-icons:file-type-css',
    'less': 'vscode-icons:file-type-less',
    'Less': 'vscode-icons:file-type-less',
    'LESS': 'vscode-icons:file-type-less',
    'scss': 'vscode-icons:file-type-scss',
    'Scss': 'vscode-icons:file-type-scss',
    'SCSS': 'vscode-icons:file-type-scss',
    'sass': 'vscode-icons:file-type-sass',
    'Sass': 'vscode-icons:file-type-sass',
    'SASS': 'vscode-icons:file-type-sass',
    'stylus': 'vscode-icons:file-type-light-stylus',
    'Stylus': 'vscode-icons:file-type-light-stylus',
    'postcss': 'vscode-icons:file-type-postcss',
    'Postcss': 'vscode-icons:file-type-postcss',
    'PostCSS': 'vscode-icons:file-type-postcss',
    'sh': 'vscode-icons:file-type-shell',
    'shell': 'vscode-icons:file-type-shell',
    'Shell': 'vscode-icons:file-type-shell',
    'bash': 'vscode-icons:file-type-shell',
    'Bash': 'vscode-icons:file-type-shell',
    'java': 'vscode-icons:file-type-java',
    'Java': 'vscode-icons:file-type-java',
    'JAVA': 'vscode-icons:file-type-java',
    'php': 'vscode-icons:file-type-php3',
    'PHP': 'vscode-icons:file-type-php3',
    'c': 'vscode-icons:file-type-c',
    'C': 'vscode-icons:file-type-c',
    'python': 'vscode-icons:file-type-python',
    'Python': 'vscode-icons:file-type-python',
    'kotlin': 'vscode-icons:file-type-kotlin',
    'Kotlin': 'vscode-icons:file-type-kotlin',
    'go': 'vscode-icons:file-type-go-gopher',
    'golang': 'vscode-icons:file-type-go-gopher',
    'Go': 'vscode-icons:file-type-go-gopher',
    'GoLang': 'vscode-icons:file-type-go-gopher',
    'rust': 'vscode-icons:file-type-rust',
    'Rust': 'vscode-icons:file-type-rust',
    'zig': 'vscode-icons:file-type-zig',
    'Zig': 'vscode-icons:file-type-zig',
    'swift': 'vscode-icons:file-type-swift',
    'Swift': 'vscode-icons:file-type-swift',
    'c#': 'vscode-icons:file-type-csharp',
    'CSharp': 'vscode-icons:file-type-csharp',
    'c++': 'vscode-icons:file-type-cpp',
    'C++': 'vscode-icons:file-type-cpp',
    'ruby': 'vscode-icons:file-type-ruby',
    'Ruby': 'vscode-icons:file-type-ruby',
    'makefile': 'vscode-icons:file-type-makefile',
    'Makefile': 'vscode-icons:file-type-makefile',
    'Object-C': 'vscode-icons:file-type-objectivec',
    'object-c': 'vscode-icons:file-type-objectivec',
    'SQL': 'vscode-icons:file-type-sql',
    'sql': 'vscode-icons:file-type-sql',
    'mysql': 'vscode-icons:file-type-mysql',
    'MySQL': 'vscode-icons:file-type-mysql',
    'MySql': 'vscode-icons:file-type-mysql',
    'pgsql': 'vscode-icons:file-type-pgsql',
    'PostgreSQL': 'vscode-icons:file-type-pgsql',
    'PGSQL': 'vscode-icons:file-type-pgsql',
    'xml': 'vscode-icons:file-type-xml',
    'XML': 'vscode-icons:file-type-xml',
    'wasm': 'vscode-icons:file-type-wasm',
    'webassembly': 'vscode-icons:file-type-wasm',
    'WebAssembly': 'vscode-icons:file-type-wasm',
    'WASM': 'vscode-icons:file-type-wasm',
    'toml': 'vscode-icons:file-type-light-toml',
    'Toml': 'vscode-icons:file-type-light-toml',
    'TOML': 'vscode-icons:file-type-light-toml',
    'yaml': 'vscode-icons:file-type-light-yaml',
    'Yaml': 'vscode-icons:file-type-light-yaml',
    'YAML': 'vscode-icons:file-type-light-yaml',
  },
  folders: {
    'default': 'vscode-icons:default-folder',

    'src': 'vscode-icons:folder-type-src',
    'srcs': 'vscode-icons:folder-type-src',
    'source': 'vscode-icons:folder-type-src',
    'sources': 'vscode-icons:folder-type-src',
    'code': 'vscode-icons:folder-type-src',
    'tauri-src': 'vscode-icons:folder-type-tauri',

    'dist': 'vscode-icons:folder-type-dist',
    'out': 'vscode-icons:folder-type-dist',
    'output': 'vscode-icons:folder-type-dist',
    'release': 'vscode-icons:folder-type-dist',
    'bin': 'vscode-icons:folder-type-dist',
    'distribution': 'vscode-icons:folder-type-dist',

    'docs': 'vscode-icons:folder-type-docs',
    'doc': 'vscode-icons:folder-type-docs',
    'document': 'vscode-icons:folder-type-docs',
    'documents': 'vscode-icons:folder-type-docs',
    'documentation': 'vscode-icons:folder-type-docs',
    'post': 'vscode-icons:folder-type-docs',
    'posts': 'vscode-icons:folder-type-docs',
    'article': 'vscode-icons:folder-type-docs',
    'articles': 'vscode-icons:folder-type-docs',

    'scripts': 'vscode-icons:folder-type-script',
    'script': 'vscode-icons:folder-type-script',

    'node_modules': 'vscode-icons:folder-type-light-node',

    'cli': 'vscode-icons:folder-type-cli',

    'template': 'vscode-icons:folder-type-template',
    'templates': 'vscode-icons:folder-type-template',

    'theme': 'vscode-icons:folder-type-theme',
    'themes': 'vscode-icons:folder-type-theme',
    'color': 'vscode-icons:folder-type-theme',
    'colors': 'vscode-icons:folder-type-theme',
    'design': 'vscode-icons:folder-type-theme',
    'designs': 'vscode-icons:folder-type-theme',

    'packages': 'vscode-icons:folder-type-package',
    'package': 'vscode-icons:folder-type-package',
    'pkg': 'vscode-icons:folder-type-package',
    'pkgs': 'vscode-icons:folder-type-package',

    'shared': 'vscode-icons:folder-type-shared',
    'utils': 'vscode-icons:folder-type-tools',
    'util': 'vscode-icons:folder-type-tools',
    'utility': 'vscode-icons:folder-type-tools',
    'utilities': 'vscode-icons:folder-type-tools',
    'helper': 'vscode-icons:folder-type-helper',
    'helpers': 'vscode-icons:folder-type-helper',
    'tools': 'vscode-icons:folder-type-tools',
    'toolkit': 'vscode-icons:folder-type-tools',
    'toolkits': 'vscode-icons:folder-type-tools',
    'tooling': 'vscode-icons:folder-type-tools',
    'devtools': 'vscode-icons:folder-type-tools',

    'component': 'vscode-icons:folder-type-component',
    'components': 'vscode-icons:folder-type-component',
    'Component': 'vscode-icons:folder-type-component',
    'Components': 'vscode-icons:folder-type-component',
    'widget': 'vscode-icons:folder-type-component',
    'widgets': 'vscode-icons:folder-type-component',
    'fragments': 'vscode-icons:folder-type-component',

    'hooks': 'vscode-icons:folder-type-hook',
    'composables': 'vscode-icons:folder-type-hook',

    'public': 'vscode-icons:folder-type-public',
    'www': 'vscode-icons:folder-type-public',
    'web': 'vscode-icons:folder-type-public',
    'wwwroot': 'vscode-icons:folder-type-public',
    'website': 'vscode-icons:folder-type-public',
    'site': 'vscode-icons:folder-type-public',
    'browser': 'vscode-icons:folder-type-public',
    'browsers': 'vscode-icons:folder-type-public',

    'fonts': 'vscode-icons:folder-type-fonts',
    'font': 'vscode-icons:folder-type-fonts',

    'images': 'vscode-icons:folder-type-images',
    'image': 'vscode-icons:folder-type-images',
    'imgs': 'vscode-icons:folder-type-images',
    'img': 'vscode-icons:folder-type-images',
    'icon': 'vscode-icons:folder-type-images',
    'icons': 'vscode-icons:folder-type-images',
    'ico': 'vscode-icons:folder-type-images',
    'icos': 'vscode-icons:folder-type-images',
    'figure': 'vscode-icons:folder-type-images',
    'figures': 'vscode-icons:folder-type-images',
    'fig': 'vscode-icons:folder-type-images',
    'figs': 'vscode-icons:folder-type-images',
    'screenshot': 'vscode-icons:folder-type-images',
    'screenshots': 'vscode-icons:folder-type-images',
    'screengrab': 'vscode-icons:folder-type-images',
    'screengrabs': 'vscode-icons:folder-type-images',
    'pic': 'vscode-icons:folder-type-images',
    'pics': 'vscode-icons:folder-type-images',
    'picture': 'vscode-icons:folder-type-images',
    'pictures': 'vscode-icons:folder-type-images',
    'photo': 'vscode-icons:folder-type-images',
    'photos': 'vscode-icons:folder-type-images',
    'photograph': 'vscode-icons:folder-type-images',
    'photographs': 'vscode-icons:folder-type-images',

    'asset': 'vscode-icons:folder-type-asset',
    'assets': 'vscode-icons:folder-type-asset',
    'resource': 'vscode-icons:folder-type-asset',
    'resources': 'vscode-icons:folder-type-asset',
    'res': 'vscode-icons:folder-type-asset',
    'static': 'vscode-icons:folder-type-asset',
    'report': 'vscode-icons:folder-type-asset',
    'reports': 'vscode-icons:folder-type-asset',

    'apis': 'vscode-icons:folder-type-api',
    'api': 'vscode-icons:folder-type-api',
    'restapi': 'vscode-icons:folder-type-api',

    'style': 'vscode-icons:folder-type-style',
    'styles': 'vscode-icons:folder-type-style',
    'stylesheet': 'vscode-icons:folder-type-style',
    'stylesheets': 'vscode-icons:folder-type-style',

    'css': 'vscode-icons:folder-type-css',
    'scss': 'vscode-icons:folder-type-light-sass',
    'sass': 'vscode-icons:folder-type-light-sass',
    'less': 'vscode-icons:folder-type-less',

    'plugin': 'vscode-icons:folder-type-plugin',
    'plugins': 'vscode-icons:folder-type-plugin',
    'typings': 'vscode-icons:folder-type-typings',
    'types': 'vscode-icons:folder-type-typings',
    'mock': 'vscode-icons:folder-type-mock',

    'i18n': 'vscode-icons:folder-type-locale',
    'locales': 'vscode-icons:folder-type-locale',
    'locale': 'vscode-icons:folder-type-locale',
    'lang': 'vscode-icons:folder-type-locale',
    'langs': 'vscode-icons:folder-type-locale',
    'language': 'vscode-icons:folder-type-locale',
    'languages': 'vscode-icons:folder-type-locale',
    'l10n': 'vscode-icons:folder-type-locale',
    'localization': 'vscode-icons:folder-type-locale',
    'translation': 'vscode-icons:folder-type-locale',
    'translate': 'vscode-icons:folder-type-locale',
    'translations': 'vscode-icons:folder-type-locale',
    'tx': 'vscode-icons:folder-type-locale',

    'config': 'vscode-icons:folder-type-config',
    'configs': 'vscode-icons:folder-type-config',
    '.config': 'vscode-icons:folder-type-config',
    '.configs': 'vscode-icons:folder-type-config',
    'cfg': 'vscode-icons:folder-type-config',
    'cfgs': 'vscode-icons:folder-type-config',
    'conf': 'vscode-icons:folder-type-config',
    'confs': 'vscode-icons:folder-type-config',
    'configuration': 'vscode-icons:folder-type-config',
    'configurations': 'vscode-icons:folder-type-config',
    'setting': 'vscode-icons:folder-type-config',
    'settings': 'vscode-icons:folder-type-config',
    'option': 'vscode-icons:folder-type-config',
    'options': 'vscode-icons:folder-type-config',

    'controller': 'vscode-icons:folder-type-controller',
    'controllers': 'vscode-icons:folder-type-controller',
    'Controller': 'vscode-icons:folder-type-controller',
    'Controllers': 'vscode-icons:folder-type-controller',
    'model': 'vscode-icons:folder-type-model',
    'models': 'vscode-icons:folder-type-model',
    'Model': 'vscode-icons:folder-type-model',
    'Models': 'vscode-icons:folder-type-model',
    'service': 'vscode-icons:folder-type-services',
    'services': 'vscode-icons:folder-type-services',
    'Service': 'vscode-icons:folder-type-services',
    'Services': 'vscode-icons:folder-type-services',

    'view': 'vscode-icons:folder-type-view',
    'views': 'vscode-icons:folder-type-view',
    'View': 'vscode-icons:folder-type-view',
    'Views': 'vscode-icons:folder-type-view',
    'page': 'vscode-icons:folder-type-view',
    'pages': 'vscode-icons:folder-type-view',
    'html': 'vscode-icons:folder-type-view',

    'app': 'vscode-icons:folder-type-app',
    'apps': 'vscode-icons:folder-type-app',

    'client': 'vscode-icons:folder-type-client',
    'clients': 'vscode-icons:folder-type-client',
    'frontend': 'vscode-icons:folder-type-client',
    'frontends': 'vscode-icons:folder-type-client',

    'server': 'vscode-icons:folder-type-server',
    'servers': 'vscode-icons:folder-type-server',
    'backend': 'vscode-icons:folder-type-server',
    'backends': 'vscode-icons:folder-type-server',

    'db': 'vscode-icons:folder-type-db',
    'database': 'vscode-icons:folder-type-db',
    'databases': 'vscode-icons:folder-type-db',
    'data': 'vscode-icons:folder-type-db',
    'sql': 'vscode-icons:folder-type-db',

    'e2e': 'vscode-icons:folder-type-e2e',
    'cypress': 'vscode-icons:folder-type-light-cypress',
    'test': 'vscode-icons:folder-type-test',
    'tests': 'vscode-icons:folder-type-test',
    'testing': 'vscode-icons:folder-type-test',
    'snapshots': 'vscode-icons:folder-type-test',
    'spec': 'vscode-icons:folder-type-test',
    'specs': 'vscode-icons:folder-type-test',

    'lib': 'vscode-icons:folder-type-library',
    'libs': 'vscode-icons:folder-type-library',
    'library': 'vscode-icons:folder-type-library',
    'libraries': 'vscode-icons:folder-type-library',
    'vendor': 'vscode-icons:folder-type-library',
    'vendors': 'vscode-icons:folder-type-library',
    'third-party': 'vscode-icons:folder-type-library',
    'lib64': 'vscode-icons:folder-type-library',

    'include': 'vscode-icons:folder-type-include',
    'inc': 'vscode-icons:folder-type-include',
    'includes': 'vscode-icons:folder-type-include',
    'partial': 'vscode-icons:folder-type-include',
    'partials': 'vscode-icons:folder-type-include',
    'inc64': 'vscode-icons:folder-type-include',

    'temp': 'vscode-icons:folder-type-temp',
    'tmp': 'vscode-icons:folder-type-temp',
    'cache': 'vscode-icons:folder-type-temp',
    'cached': 'vscode-icons:folder-type-temp',
    '.temp': 'vscode-icons:folder-type-temp',
    '.cache': 'vscode-icons:folder-type-temp',

    'log': 'vscode-icons:folder-type-log',
    'logs': 'vscode-icons:folder-type-log',
    'logging': 'vscode-icons:folder-type-log',

    '.git': 'vscode-icons:folder-type-git',
    '.github': 'vscode-icons:folder-type-github',
    '.gitlab': 'vscode-icons:folder-type-gitlab',
    '.vscode': 'vscode-icons:folder-type-vscode',
    '.husky': 'vscode-icons:folder-type-husky',
    '.idea': 'vscode-icons:folder-type-idea',
  },
  files: {
    'package.json': 'vscode-icons:file-type-node',
    'pnpm-debug.log': 'vscode-icons:file-type-light-pnpm',
    'pnpm-lock.yaml': 'vscode-icons:file-type-light-pnpm',
    'pnpm-workspace.yaml': 'vscode-icons:file-type-light-pnpm',
    'biome.json': 'vscode-icons:file-type-biome',
    'bun.lockb': 'vscode-icons:file-type-bun',
    'COMMIT_EDITMSG': 'vscode-icons:file-type-git',
    'MERGE_MSG': 'vscode-icons:file-type-git',
    'karma.conf.js': 'vscode-icons:file-type-karma',
    'karma.conf.cjs': 'vscode-icons:file-type-karma',
    'karma.conf.mjs': 'vscode-icons:file-type-karma',
    'karma.conf.coffee': 'vscode-icons:file-type-karma',
    'README.md': 'flat-color-icons:info',
    'README.txt': 'flat-color-icons:info',
    'README': 'flat-color-icons:info',
    'CHANGELOG.md': 'catppuccin:changelog',
    'CHANGELOG.txt': 'catppuccin:changelog',
    'CHANGELOG': 'catppuccin:changelog',
    'CHANGES.md': 'catppuccin:changelog',
    'CHANGES.txt': 'catppuccin:changelog',
    'CHANGES': 'catppuccin:changelog',
    'VERSION.md': 'catppuccin:changelog',
    'VERSION.txt': 'catppuccin:changelog',
    'VERSION': 'catppuccin:changelog',
    'mvnw': 'vscode-icons:file-type-maven',
    'pom.xml': 'vscode-icons:file-type-maven',
    'tsconfig.json': 'vscode-icons:file-type-tsconfig',
    'swagger.json': 'vscode-icons:file-type-swagger',
    'swagger.yml': 'vscode-icons:file-type-swagger',
    'swagger.yaml': 'vscode-icons:file-type-swagger',
    'mime.types': 'vscode-icons:file-type-light-config',
    'Jenkinsfile': 'vscode-icons:file-type-jenkins',
    'babel.config.js': 'vscode-icons:file-type-babel2',
    'babel.config.json': 'vscode-icons:file-type-babel2',
    'babel.config.cjs': 'vscode-icons:file-type-babel2',
    'BUILD': 'vscode-icons:file-type-bazel',
    'BUILD.bazel': 'vscode-icons:file-type-bazel',
    'WORKSPACE': 'vscode-icons:file-type-bazel',
    'WORKSPACE.bazel': 'vscode-icons:file-type-bazel',
    'bower.json': 'vscode-icons:file-type-bower2',
    'Bower.json': 'vscode-icons:file-type-bower2',
    'eslint.config.js': 'vscode-icons:file-type-eslint',
    'eslint.config.ts': 'vscode-icons:file-type-eslint',
    'firebase.json': 'vscode-icons:file-type-firebase',
    'geckodriver': 'openmoji:firefox',
    'Gruntfile.js': 'vscode-icons:file-type-grunt',
    'gruntfile.babel.js': 'vscode-icons:file-type-grunt',
    'Gruntfile.babel.js': 'vscode-icons:file-type-grunt',
    'gruntfile.js': 'vscode-icons:file-type-grunt',
    'Gruntfile.coffee': 'vscode-icons:file-type-grunt',
    'gruntfile.coffee': 'vscode-icons:file-type-grunt',
    'ionic.config.json': 'vscode-icons:file-type-ionic',
    'Ionic.config.json': 'vscode-icons:file-type-ionic',
    'ionic.project': 'vscode-icons:file-type-ionic',
    'Ionic.project': 'vscode-icons:file-type-ionic',
    'platformio.ini': 'vscode-icons:file-type-platformio',
    'rollup.config.js': 'vscode-icons:file-type-rollup',
    'sass-lint.yml': 'vscode-icons:file-type-sass',
    'stylelint.config.js': 'vscode-icons:file-type-light-stylelint',
    'stylelint.config.cjs': 'vscode-icons:file-type-light-stylelint',
    'stylelint.config.mjs': 'vscode-icons:file-type-light-stylelint',
    'yarn.clean': 'vscode-icons:file-type-yarn',
    'yarn.lock': 'vscode-icons:file-type-yarn',
    'webpack.config.js': 'vscode-icons:file-type-webpack',
    'webpack.config.cjs': 'vscode-icons:file-type-webpack',
    'webpack.config.mjs': 'vscode-icons:file-type-webpack',
    'webpack.config.ts': 'vscode-icons:file-type-webpack',
    'webpack.config.build.js': 'vscode-icons:file-type-webpack',
    'webpack.config.build.cjs': 'vscode-icons:file-type-webpack',
    'webpack.config.build.mjs': 'vscode-icons:file-type-webpack',
    'webpack.config.build.ts': 'vscode-icons:file-type-webpack',
    'webpack.common.js': 'vscode-icons:file-type-webpack',
    'webpack.common.cjs': 'vscode-icons:file-type-webpack',
    'webpack.common.mjs': 'vscode-icons:file-type-webpack',
    'webpack.common.ts': 'vscode-icons:file-type-webpack',
    'webpack.dev.js': 'vscode-icons:file-type-webpack',
    'webpack.dev.cjs': 'vscode-icons:file-type-webpack',
    'webpack.dev.mjs': 'vscode-icons:file-type-webpack',
    'webpack.dev.ts': 'vscode-icons:file-type-webpack',
    'webpack.prod.js': 'vscode-icons:file-type-webpack',
    'webpack.prod.cjs': 'vscode-icons:file-type-webpack',
    'webpack.prod.mjs': 'vscode-icons:file-type-webpack',
    'webpack.prod.ts': 'vscode-icons:file-type-webpack',
    'vite.config.js': 'vscode-icons:file-type-vite',
    'vite.config.ts': 'vscode-icons:file-type-vite',
    'vite.config.mjs': 'vscode-icons:file-type-vite',
    'vite.config.cjs': 'vscode-icons:file-type-vite',
    'vitest.config.ts': 'vscode-icons:file-type-vitest',
    'vitest.config.js': 'vscode-icons:file-type-vitest',
    'vitest.config.mjs': 'vscode-icons:file-type-vitest',
    'vitest.config.cjs': 'vscode-icons:file-type-vitest',
    'turbo.json': 'vscode-icons:file-type-light-turbo',
    'vercel.json': 'vscode-icons:file-type-light-vercel',
    'netlify.toml': 'vscode-icons:file-type-light-netlify',
    'Cargo.toml': 'vscode-icons:file-type-cargo',
    'Cargo.lock': 'vscode-icons:file-type-cargo',
    'npm-debug.log': 'vscode-icons:file-type-npm',

  },
  extensions: {
    '.astro': 'vscode-icons:file-type-light-astro',
    '.mdx': 'vscode-icons:file-type-light-mdx',
    '.cls': 'vscode-icons:file-type-apex',
    '.apex': 'vscode-icons:file-type-apex',
    '.asm': 'vscode-icons:file-type-assembly',
    '.s': 'vscode-icons:file-type-assembly',
    '.bicep': 'vscode-icons:file-type-bicep',
    '.bzl': 'vscode-icons:file-type-bazel',
    '.bazel': 'vscode-icons:file-type-bazel',
    '.BUILD': 'vscode-icons:file-type-bazel',
    '.WORKSPACE': 'vscode-icons:file-type-bazel',
    '.bazelignore': 'vscode-icons:file-type-bazel',
    '.bazelversion': 'vscode-icons:file-type-bazel',
    '.c': 'vscode-icons:file-type-c',
    '.h': 'vscode-icons:file-type-c',
    '.m': 'vscode-icons:file-type-c',
    '.cs': 'vscode-icons:file-type-csharp',
    '.cshtml': 'vscode-icons:file-type-html',
    '.aspx': 'vscode-icons:file-type-aspx',
    '.ascx': 'vscode-icons:file-type-aspx',
    '.asax': 'vvscode-icons:file-type-aspx',
    '.master': 'vscode-icons:file-type-html',
    '.cc': 'vscode-icons:file-type-cpp',
    '.cpp': 'vscode-icons:file-type-cpp',
    '.cxx': 'vscode-icons:file-type-cpp',
    '.c++': 'vscode-icons:file-type-cpp',
    '.hh': 'vscode-icons:file-type-cppheader',
    '.hpp': 'vscode-icons:file-type-cppheader',
    '.hxx': 'vscode-icons:file-type-cppheader',
    '.h++': 'vscode-icons:file-type-cppheader',
    '.mm': 'vscode-icons:file-type-cpp',
    '.clj': 'vscode-icons:file-type-clojure',
    '.cljs': 'vscode-icons:file-type-clojure',
    '.cljc': 'vscode-icons:file-type-clojure',
    '.edn': 'vscode-icons:file-type-clojure',
    '.cfc': 'vscode-icons:file-type-cfc',
    '.cfm': 'vscode-icons:file-type-cfm',
    '.coffee': 'vscode-icons:file-type-coffeescript',
    '.litcoffee': 'vscode-icons:file-type-coffeescript',
    '.config': 'vscode-icons:file-type-config',
    '.cfg': 'vscode-icons:file-type-config',
    '.conf': 'vscode-icons:file-type-config',
    '.cr': 'vscode-icons:file-type-light-crystal',
    '.ecr': 'vscode-icons:file-type-light-crystal',
    '.slang': 'vscode-icons:file-type-slang',
    '.cson': 'vscode-icons:file-type-json',
    '.css': 'vscode-icons:file-type-css',
    '.css.map': 'vscode-icons:file-type-cssmap',
    '.sss': 'vscode-icons:file-type-sss',
    '.csv': 'vscode-icons:file-type-excel',
    '.xls': 'vscode-icons:file-type-excel2',
    '.xlsx': 'vscode-icons:file-type-excel2',
    '.cu': 'vscode-icons:file-type-cuda',
    '.cuh': 'vscode-icons:file-type-cuda',
    '.hu': 'vscode-icons:file-type-cuda',
    '.cake': 'vscode-icons:file-type-cake',
    '.ctp': 'vscode-icons:file-type-cakephp',
    '.d': 'vscode-icons:file-type-dependencies',
    '.doc': 'vscode-icons:file-type-word2',
    '.docx': 'vscode-icons:file-type-word2',
    '.ejs': 'vscode-icons:file-type-ejs',
    '.ex': 'vscode-icons:file-type-elixir',
    '.exs': 'vscode-icons:file-type-elixir',
    '.elm': 'vscode-icons:file-type-elm',
    '.ico': 'vscode-icons:file-type-favicon',
    '.fs': 'vscode-icons:file-type-fsharp',
    '.fsx': 'vscode-icons:file-type-fsharp',
    '.gitignore': 'vscode-icons:file-type-git',
    '.gitconfig': 'vscode-icons:file-type-git',
    '.gitkeep': 'vscode-icons:file-type-git',
    '.gitattributes': 'vscode-icons:file-type-git',
    '.gitmodules': 'vscode-icons:file-type-git',
    '.go': 'vscode-icons:file-type-go',
    '.slide': 'vscode-icons:file-type-go',
    '.article': 'vscode-icons:file-type-go',
    '.gd': 'vscode-icons:file-type-godot',
    '.godot': 'vscode-icons:file-type-godot',
    '.tres': 'vscode-icons:file-type-godot',
    '.tscn': 'vscode-icons:file-type-godot',
    '.gradle': 'vscode-icons:file-type-light-gradle',
    '.groovy': 'vscode-icons:file-type-groovy',
    '.gsp': 'vscode-icons:file-type-groovy',
    '.gql': 'vscode-icons:file-type-graphql',
    '.graphql': 'vscode-icons:file-type-graphql',
    '.graphqls': 'vscode-icons:file-type-graphql',
    '.hack': 'logos:hack',
    '.haml': 'vscode-icons:file-type-haml',
    '.handlebars': 'vscode-icons:file-type-handlebars',
    '.hbs': 'vscode-icons:file-type-handlebars',
    '.hjs': 'vscode-icons:file-type-handlebars',
    '.hs': 'vscode-icons:file-type-haskell',
    '.lhs': 'vscode-icons:file-type-haskell',
    '.hx': 'vscode-icons:file-type-haxe',
    '.hxs': 'vscode-icons:file-type-haxe',
    '.hxp': 'vscode-icons:file-type-haxe',
    '.hxml': 'vscode-icons:file-type-haxe',
    '.html': 'vscode-icons:file-type-html',
    '.jade': 'file-icons:jade',
    '.java': 'vscode-icons:file-type-java',
    '.class': 'vscode-icons:file-type-java',
    '.classpath': 'vscode-icons:file-type-java',
    '.properties': 'vscode-icons:file-type-java',
    '.js': 'vscode-icons:file-type-js',
    '.js.map': 'vscode-icons:file-type-jsmap',
    '.cjs': 'vscode-icons:file-type-js',
    '.cjs.map': 'vscode-icons:file-type-jsmap',
    '.mjs': 'vscode-icons:file-type-js',
    '.mjs.map': 'vscode-icons:file-type-jsmap',
    '.spec.js': 'vscode-icons:file-type-light-testjs',
    '.spec.cjs': 'vscode-icons:file-type-light-testjs',
    '.spec.mjs': 'vscode-icons:file-type-light-testjs',
    '.test.js': 'vscode-icons:file-type-light-testjs',
    '.test.cjs': 'vscode-icons:file-type-light-testjs',
    '.test.mjs': 'vscode-icons:file-type-light-testjs',
    '.es': 'vscode-icons:file-type-js',
    '.es5': 'vscode-icons:file-type-js',
    '.es6': 'vscode-icons:file-type-js',
    '.es7': 'vscode-icons:file-type-js',
    '.jinja': 'vscode-icons:file-type-jinja',
    '.jinja2': 'vscode-icons:file-type-jinja',
    '.json': 'vscode-icons:file-type-json',
    '.jl': 'vscode-icons:file-type-julia',
    '.kt': 'vscode-icons:file-type-kotlin',
    '.kts': 'vscode-icons:file-type-kotlin',
    '.dart': 'vscode-icons:file-type-dartlang',
    '.less': 'vscode-icons:file-type-less',
    '.liquid': 'vscode-icons:file-type-liquid',
    '.ls': 'vscode-icons:file-type-livescript',
    '.lua': 'vscode-icons:file-type-lua',
    '.markdown': 'vscode-icons:file-type-markdown',
    '.md': 'vscode-icons:file-type-markdown',
    '.mustache': 'vscode-icons:file-type-light-mustache',
    '.stache': 'vscode-icons:file-type-light-mustache',
    '.nim': 'vscode-icons:file-type-light-nim',
    '.nims': 'vscode-icons:file-type-light-nim',
    '.github-issues': 'mdi:github',
    '.ipynb': 'vscode-icons:file-type-jupyter',
    '.njk': 'vscode-icons:file-type-nunjucks',
    '.nunjucks': 'vscode-icons:file-type-nunjucks',
    '.nunjs': 'vscode-icons:file-type-nunjucks',
    '.nunj': 'vscode-icons:file-type-nunjucks',
    '.njs': 'vscode-icons:file-type-nunjucks',
    '.nj': 'vscode-icons:file-type-nunjucks',
    '.npm-debug.log': 'vscode-icons:file-type-npm',
    '.npmignore': 'catppuccin:npm-ignore',
    '.npmrc': 'vscode-icons:file-type-npm',
    '.ml': 'vscode-icons:file-type-ocaml',
    '.mli': 'vscode-icons:file-type-ocaml',
    '.cmx': 'vscode-icons:file-type-ocaml',
    '.cmxa': 'vscode-icons:file-type-ocaml',
    '.pl': 'vscode-icons:file-type-perl',
    '.php': 'vscode-icons:file-type-php',
    '.php.inc': 'vscode-icons:file-type-php',
    '.pipeline': 'vscode-icons:file-type-pipeline',
    '.pddl': 'vscode-icons:file-type-pddl',
    '.plan': 'vscode-icons:file-type-pddl-plan',
    '.happenings': 'vscode-icons:file-type-pddl-happenings',
    '.ps1': 'vscode-icons:file-type-powershell',
    '.psd1': 'vscode-icons:file-type-powershell',
    '.psm1': 'vscode-icons:file-type-powershell',
    '.prisma': 'vscode-icons:file-type-light-prisma',
    '.pug': 'vscode-icons:file-type-pug',
    '.pp': 'vscode-icons:file-type-puppet',
    '.epp': 'vscode-icons:file-type-puppet',
    '.purs': 'vscode-icons:file-type-light-purescript',
    '.py': 'vscode-icons:file-type-python',
    '.jsx': 'vscode-icons:file-type-reactjs',
    '.spec.jsx': 'vscode-icons:file-type-reactjs',
    '.test.jsx': 'vscode-icons:file-type-reactjs',
    '.cjsx': 'vscode-icons:file-type-reactjs',
    '.tsx': 'vscode-icons:file-type-reactts',
    '.spec.tsx': 'vscode-icons:file-type-reactts',
    '.test.tsx': 'vscode-icons:file-type-reactts',
    '.res': 'vscode-icons:file-type-rescript',
    '.resi': 'vscode-icons:file-type-rescript',
    '.R': 'vscode-icons:file-type-r',
    '.rmd': 'vscode-icons:file-type-rmd',
    '.rb': 'vscode-icons:file-type-ruby',
    '.erb': 'vscode-icons:file-type-html',
    '.erb.html': 'vscode-icons:file-type-html',
    '.html.erb': 'vscode-icons:file-type-html',
    '.rs': 'vscode-icons:file-type-rust',
    '.sass': 'vscode-icons:file-type-sass',
    '.scss': 'vscode-icons:file-type-sass',
    '.springBeans': 'seti:spring',
    '.slim': 'vscode-icons:file-type-slim',
    '.smarty.tpl': 'vscode-icons:file-type-smarty',
    '.tpl': 'vscode-icons:file-type-smarty',
    '.sbt': 'vscode-icons:file-type-sbt',
    '.scala': 'vscode-icons:file-type-scala',
    '.sol': 'logos:ethereum-color',
    '.styl': 'vscode-icons:file-type-light-stylus',
    '.svelte': 'vscode-icons:file-type-svelte',
    '.swift': 'vscode-icons:file-type-swift',
    '.sql': 'vscode-icons:file-type-sql',
    '.soql': 'vscode-icons:file-type-sql',
    '.tf': 'vscode-icons:file-type-terraform',
    '.tf.json': 'vscode-icons:file-type-terraform',
    '.tfvars': 'vscode-icons:file-type-terraform',
    '.tfvars.json': 'vscode-icons:file-type-terraform',
    '.tex': 'vscode-icons:file-type-light-tex',
    '.sty': 'vscode-icons:file-type-light-tex',
    '.dtx': 'vscode-icons:file-type-light-tex',
    '.ins': 'vscode-icons:file-type-light-tex',
    '.txt': 'vscode-icons:file-type-text',
    '.toml': 'vscode-icons:file-type-light-toml',
    '.twig': 'vscode-icons:file-type-twig',
    '.ts': 'vscode-icons:file-type-typescript',
    '.spec.ts': 'vscode-icons:file-type-testts',
    '.test.ts': 'vscode-icons:file-type-testts',
    '.vala': 'vscode-icons:file-type-vala',
    '.vapi': 'vscode-icons:file-type-vala',
    '.component': 'vscode-icons:file-type-html',
    '.vue': 'vscode-icons:file-type-vue',
    '.wasm': 'vscode-icons:file-type-wasm',
    '.wat': 'vscode-icons:file-type-wasm',
    '.xml': 'vscode-icons:file-type-xml',
    '.yml': 'vscode-icons:file-type-light-yaml',
    '.yaml': 'vscode-icons:file-type-light-yaml',
    '.pro': 'vscode-icons:file-type-prolog',
    '.zig': 'vscode-icons:file-type-zig',
    '.jar': 'vscode-icons:file-type-jar',
    '.zip': 'vscode-icons:file-type-zip',
    '.ai': 'vscode-icons:file-type-ai',
    '.psd': 'vscode-icons:file-type-photoshop',
    '.pdf': 'vscode-icons:file-type-pdf2',
    '.eot': 'vscode-icons:file-type-light-font',
    '.ttf': 'vscode-icons:file-type-light-font',
    '.woff': 'vscode-icons:file-type-light-font',
    '.woff2': 'vscode-icons:file-type-light-font',
    '.otf': 'vscode-icons:file-type-light-font',
    '.avif': 'vscode-icons:file-type-avif',
    '.gif': 'vscode-icons:file-type-image',
    '.jpg': 'vscode-icons:file-type-image',
    '.jpeg': 'vscode-icons:file-type-image',
    '.png': 'vscode-icons:file-type-image',
    '.pxm': 'vscode-icons:file-type-image',
    '.svg': 'vscode-icons:file-type-svg',
    '.svgx': 'vscode-icons:file-type-image',
    '.tiff': 'vscode-icons:file-type-image',
    '.webp': 'vscode-icons:file-type-image',
    '.sublime-project': 'vscode-icons:file-type-sublime',
    '.sublime-workspace': 'vscode-icons:file-type-sublime',
    '.code-search': 'vscode-icons:file-type-search-result',
    '.sh': 'vscode-icons:file-type-shell',
    '.zsh': 'vscode-icons:file-type-shell',
    '.fish': 'vscode-icons:file-type-shell',
    '.zshrc': 'vscode-icons:file-type-shell',
    '.bashrc': 'vscode-icons:file-type-shell',
    '.mov': 'vscode-icons:file-type-video',
    '.ogv': 'vscode-icons:file-type-video',
    '.webm': 'vscode-icons:file-type-video',
    '.avi': 'vscode-icons:file-type-video',
    '.mpg': 'vscode-icons:file-type-video',
    '.mp4': 'vscode-icons:file-type-video',
    '.mp3': 'vscode-icons:file-type-audio',
    '.ogg': 'vscode-icons:file-type-audio',
    '.wav': 'vscode-icons:file-type-audio',
    '.flac': 'vscode-icons:file-type-audio',
    '.bat': 'vscode-icons:file-type-bat',
    '.cmd': 'vscode-icons:file-type-shell',
    '.babelrc': 'vscode-icons:file-type-light-babel',
    '.babelrc.js': 'vscode-icons:file-type-light-babel',
    '.babelrc.cjs': 'vscode-icons:file-type-light-babel',
    '.bazelrc': 'vscode-icons:file-type-bazel',
    '.bowerrc': 'vscode-icons:file-type-bower2',
    '.codeclimate.yml': 'vscode-icons:file-type-codeclimate',
    '.eslintrc': 'vscode-icons:file-type-eslint',
    '.eslintrc.js': 'vscode-icons:file-type-eslint',
    '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
    '.eslintrc.yaml': 'vscode-icons:file-type-eslint',
    '.eslintrc.yml': 'vscode-icons:file-type-eslint',
    '.eslintrc.json': 'vscode-icons:file-type-eslint',
    '.eslintignore': 'vscode-icons:file-type-eslint',
    '.firebaserc': 'vscode-icons:file-type-firebase',
    '.gitlab-ci.yml': 'vscode-icons:file-type-gitlab',
    '.jshintrc': 'vscode-icons:file-type-jshint',
    '.jscsrc': 'vscode-icons:file-type-js',
    '.stylelintrc': 'vscode-icons:file-type-light-stylelint',
    '.stylelintrc.json': 'vscode-icons:file-type-light-stylelint',
    '.stylelintrc.yaml': 'vscode-icons:file-type-light-stylelint',
    '.stylelintrc.yml': 'vscode-icons:file-type-light-stylelint',
    '.stylelintrc.js': 'vscode-icons:file-type-light-stylelint',
    '.stylelintignore': 'vscode-icons:file-type-light-stylelint',
    '.direnv': 'vscode-icons:file-type-dotenv',
    '.env': 'vscode-icons:file-type-dotenv',
    '.static': 'vscode-icons:file-type-config',
    '.editorconfig': 'vscode-icons:file-type-editorconfig',
    '.slugignore': 'vscode-icons:file-type-config',
    '.tmp': 'ph:clock-bold',
    '.htaccess': 'vscode-icons:file-type-config',
    '.key': 'vscode-icons:file-type-key',
    '.cert': 'vscode-icons:file-type-cert',
    '.cer': 'vscode-icons:file-type-cert',
    '.crt': 'vscode-icons:file-type-cert',
    '.pem': 'vscode-icons:file-type-cert',
    '.DS_Store': 'octicon:diff-ignored-16',
  },
  partials: {
    'Gemfile': 'vscode-icons:file-type-ruby',
    'gemfile': 'vscode-icons:file-type-ruby',
    'dockerfile': 'vscode-icons:file-type-docker',
    'Dockerfile': 'vscode-icons:file-type-docker',
    'DOCKERFILE': 'vscode-icons:file-type-docker',
    '.dockerignore': 'vscode-icons:file-type-docker',
    'docker-healthcheck': 'vscode-icons:file-type-docker',
    'docker-compose.yml': 'vscode-icons:file-type-docker',
    'docker-compose.yaml': 'vscode-icons:file-type-docker',
    'docker-compose.override.yml': 'vscode-icons:file-type-docker',
    'docker-compose.override.yaml': 'vscode-icons:file-type-docker',
    'GULPFILE': 'vscode-icons:file-type-gulp',
    'Gulpfile': 'vscode-icons:file-type-gulp',
    'gulpfile': 'vscode-icons:file-type-gulp',
    'gulpfile.js': 'vscode-icons:file-type-gulp',
    'LICENSE': 'vscode-icons:file-type-license',
    'LICENCE': 'vscode-icons:file-type-license',
    'LICENSE.txt': 'vscode-icons:file-type-license',
    'LICENCE.txt': 'vscode-icons:file-type-license',
    'LICENSE.md': 'vscode-icons:file-type-license',
    'LICENCE.md': 'vscode-icons:file-type-license',
    'COPYING': 'vscode-icons:file-type-license',
    'COPYING.txt': 'vscode-icons:file-type-license',
    'COPYING.md': 'vscode-icons:file-type-license',
    'COMPILING': 'vscode-icons:file-type-license',
    'COMPILING.txt': 'vscode-icons:file-type-license',
    'COMPILING.md': 'vscode-icons:file-type-license',
    'CONTRIBUTING': 'vscode-icons:file-type-license',
    'CONTRIBUTING.txt': 'vscode-icons:file-type-license',
    'CONTRIBUTING.md': 'vscode-icons:file-type-license',
    'MAKEFILE': 'vscode-icons:file-type-makefile',
    'Makefile': 'vscode-icons:file-type-makefile',
    'makefile': 'vscode-icons:file-type-makefile',
    'QMAKEFILE': 'vscode-icons:file-type-makefile',
    'QMakefile': 'vscode-icons:file-type-makefile',
    'qmakefile': 'vscode-icons:file-type-makefile',
    'OMAKEFILE': 'vscode-icons:file-type-makefile',
    'OMakefile': 'vscode-icons:file-type-makefile',
    'omakefile': 'vscode-icons:file-type-makefile',
    'CMAKELISTS.TXT': 'vscode-icons:file-type-makefile',
    'CMAKELISTS.txt': 'vscode-icons:file-type-makefile',
    'CMakeLists.txt': 'vscode-icons:file-type-makefile',
    'cmakelists.txt': 'vscode-icons:file-type-makefile',
    'Procfile': 'vscode-icons:file-type-procfile',
    'TODO': 'vscode-icons:file-type-light-todo',
    'TODO.txt': 'vscode-icons:file-type-light-todo',
    'TODO.md': 'vscode-icons:file-type-light-todo',
  },
}
