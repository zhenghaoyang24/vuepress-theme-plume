---
title: 内容注释
icon: iconamoon:comment-add-light
createTime: 2025/02/23 10:48:35
permalink: /guide/markdown/annotation/
---

## 描述

==Annotation(注释)== 是 Markdown 中的一种特殊的语法，用于在文档中添加额外的信息、说明或者提示。

注释不会直接显示在文档中，需要用户手动点击才会显示。

## 配置

该功能默认不启用，你需要在 `theme` 配置中启用。

```ts title=".vuepress/config.ts"
export default defineUserConfig({
  theme: plumeTheme({
    markdown: {
      annotation: true, // [!code ++]
    }
  })
})
```

## 语法

==Annotation(注释)== 语法由两个部分组成：

### 行内注释

在行内通过 `[+label]` 语法插入注释标签。

注释标签由 `[+` + `label` + `]` 组成。为方便与内容做区分，在 `[+label]` 的左边边缘应该有一个空格。

`label` 为注释的标签，可以是任意字符串。

::: important 符号 `+` 是必须的
:::

### 定义注释

在文档的单独区域中使用 `[+label]:` 语法开始定义注释。

注释定义区域由 `[+` + `label` + `]:` + `内容` 组成。

`label` 应该与上述的 `[+label]` 一致，用于标记注释的标签。

**内容** 可以跟随在 `:` 之后开始写：

```md
[+label]: 这里是内容，可以使用 **Markdown** 语法。
```

**内容** 也可以从下一行开始写，但需要添加缩进，多行时应该保持一致的缩进。

```md
[+label]:
  这里是内容。
  缩进一致，此行也是内容。

  即使上一行空行，但此行缩进也是一致的，也是内容。
  可以使用 **Markdown** 语法。

此行不再缩进，该标签的注释定义在上一行结束。
```

定义注释的内容不会直接渲染在文档中，而是在 行内注释 的 `[+label]` 被点击后呈现。

## 示例

### 示例一

**输入：**

```md
站点由 VuePress [+vuepress] 驱动。

[+vuepress]:
  VuePress 是一个 [静态站点生成器](https://en.wikipedia.org/wiki/Static_site_generator) (SSG) 。
  专为构建快速、以内容为中心的站点而设计。
```

**输出：**

站点由 VuePress [+vuepress] 驱动。

[+vuepress]:
  VuePress 是一个 [静态站点生成器](https://en.wikipedia.org/wiki/Static_site_generator) (SSG) 。
  专为构建快速、以内容为中心的站点而设计。

### 示例二

**同一个 `label` 定义多个注释，多个定义以列表的形式渲染。**

**输入：**

```md
中国古代 **四大名著** [+名著] 家喻户晓。

[+名著]:
  **《三国演义》：**

  以三国时期的历史为背景，描写了魏、蜀、吴三国之间的政治、军事斗争，塑造了诸葛亮、曹操、关羽、刘备等众多历史人物形象。

[+名著]:
  **《西游记》：**

  讲述了唐僧师徒四人（孙悟空、猪八戒、沙僧、白龙马）西天取经的故事，充满了神话色彩和奇幻冒险。

[+名著]:
  **《红楼梦》：**

  以贾、史、王、薛四大家族的兴衰为背景，描写了贾宝玉、林黛玉、薛宝钗等人的爱情悲剧，展现了封建社会的腐朽与没落。

[+名著]:
  **《水浒传》：**

  描写了北宋末年以宋江为首的108位好汉在梁山泊聚义，反抗朝廷的故事，展现了官逼民反的社会现实。
```

**输出：**

中国古代 **四大名著** [+名著] 家喻户晓。

[+名著]:
  **《三国演义》：**

  以三国时期的历史为背景，描写了魏、蜀、吴三国之间的政治、军事斗争，塑造了诸葛亮、曹操、关羽、刘备等众多历史人物形象。

[+名著]:
  **《西游记》：**

  讲述了唐僧师徒四人（孙悟空、猪八戒、沙僧、白龙马）西天取经的故事，充满了神话色彩和奇幻冒险。

[+名著]:
  **《红楼梦》：**

  以贾、史、王、薛四大家族的兴衰为背景，描写了贾宝玉、林黛玉、薛宝钗等人的爱情悲剧，展现了封建社会的腐朽与没落。

[+名著]:
  **《水浒传》：**

  描写了北宋末年以宋江为首的108位好汉在梁山泊聚义，反抗朝廷的故事，展现了官逼民反的社会现实。
