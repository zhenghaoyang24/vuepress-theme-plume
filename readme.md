<h1 align="center">vuepress-theme-plume</h1>
<p align="center">
<img src="/preview/plume.svg" width="200px" alt="plume" />
</p>

![peer dependency](https://img.shields.io/npm/dependency-version/vuepress-theme-plume/peer/vuepress?color=32A9C3&labelColor=1B3C4A)
![GitHub License](https://img.shields.io/github/license/pengzhanbo/vuepress-theme-plume?color=32A9C3&labelColor=1B3C4A)

一个简约的，干净的，容易上手的 vuepress 主题，适用于博客和文档。

开箱即用，仅需少量配置即可使用，让您更专注于 内容的创作，更好的表达你的想法，形成你的知识笔记。

内置了丰富的强大的功能，旨在让内容更具有表现力。

## Features

- 💻 响应式布局，适配不同的屏幕尺寸
- 📖 博客 & 文档
- 🔗 自动生成文章永久链接
- ⚖ 支持多语言
- 🔑 支持 全站加密、部分加密
- 👀 支持 搜索、文章评论
- 👨‍💻‍ 支持 浅色/深色 主题 （包括代码高亮）
- 📠 markdown 增强，支持 代码块分组、提示容器、任务列表、数学公式、代码演示 等

### [查看文档](https://plume.pengzhanbo.cn)

## Install

``` sh
npm install vuepress@next vuepress-theme-plume
# or
pnpm add vuepress@next vuepress-theme-plume vue
# or
yarn add vuepress@next vuepress-theme-plume
```

## Usage

``` ts
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // vuepress config...
  theme: plumeTheme({
    // theme config...
  })
})
```

### `plumeTheme(options)`

__options__ : `PlumeThemeOptions`

[查看 options 详细说明](https://plume.pengzhanbo.cn/config/basic/)

## 案例

- [我的个人博客](https://pengzhanbo.cn/)

### 注意

本主题基于 `vuepress 2` ，处于 RC 阶段。

这意味着功能已趋于稳定，但在未来仍有小概率发生破坏性更改。

## 贡献指南

查看 [[贡献指南]](/CONTRIBUTING.md) 了解更多

### 效果图

#### home page

![home](/preview/preview-home.jpeg)

#### blog page

![blog](/preview/preview-blog.jpeg?t=1)

#### post page

![post](/preview/preview-post.jpeg)

#### note page

![note](/preview/preview-note.jpeg)
