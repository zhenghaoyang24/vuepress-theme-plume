import{_ as p,c as k,b as d,d as i,w as t,r as a,o as r,e as h}from"./app-De9JtB2w.js";const o={};function g(c,s){const e=a("Card"),n=a("CardGrid"),l=a("LinkCard");return r(),k("div",null,[s[2]||(s[2]=d(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>当你需要将多个卡片排列，可以使用 <code>&lt;CardGrid&gt;</code> 组件。在空间足够时，多个卡片会自动排列。</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">cols</td><td style="text-align:left;"><code>number | Record&lt;&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;, number&gt;</code></td><td style="text-align:left;"><code>2</code></td><td style="text-align:left;">卡片排列列数。</td></tr></tbody></table><p>组件默认会根据屏幕宽度自动调整列数。在空间足够时，默认显示双列，小屏幕下显示单列。</p><p>你可以通过 <code>cols</code> 配置列数。当传入 <code>number</code> 时，所有尺寸均显示为 <code>number</code> 个卡片。 传入 <code>{ sm: number, md: number, lg: number }</code> 时，根据屏幕宽度自动调整列数。</p><ul><li><code>sm</code> : <code>&lt; 768px</code></li><li><code>md</code> : <code>&gt;= 768px &lt; 960px</code></li><li><code>lg</code> : <code>&gt;= 960px</code></li></ul><p>建议传入的 <code>number</code> 不超过 <code>3</code>。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CardGrid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Card</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">卡片标题</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">twemoji:astonished-face</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    这里是卡片内容。</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Card</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Card</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">卡片标题</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">twemoji:astonished-face</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    这里是卡片内容。</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Card</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CardGrid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CardGrid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">LinkCard</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">卡片标题</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> href</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">LinkCard</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> icon</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">twemoji:astonished-face</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">卡片标题</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> href</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CardGrid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>`,12)),i(n,null,{default:t(()=>[i(e,{title:"卡片标题",icon:"twemoji:astonished-face"},{default:t(()=>s[0]||(s[0]=[h(" 这里是卡片内容。 ")])),_:1}),i(e,{title:"卡片标题",icon:"twemoji:astonished-face"},{default:t(()=>s[1]||(s[1]=[h(" 这里是卡片内容。 ")])),_:1})]),_:1}),i(n,null,{default:t(()=>[i(l,{title:"链接卡片",href:"/"}),i(l,{icon:"twemoji:astonished-face",title:"链接卡片",href:"/"})]),_:1})])}const m=p(o,[["render",g],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/guide/components/card-grid/","title":"卡片容器","lang":"zh-CN","frontmatter":{"title":"卡片容器","author":"pengzhanbo","icon":"vaadin:grid-h","createTime":"2024/08/18 23:38:33","permalink":"/guide/components/card-grid/","description":"概述 当你需要将多个卡片排列，可以使用 <CardGrid> 组件。在空间足够时，多个卡片会自动排列。 Props 组件默认会根据屏幕宽度自动调整列数。在空间足够时，默认显示双列，小屏幕下显示单列。 你可以通过 cols 配置列数。当传入 number 时，所有尺寸均显示为 number 个卡片。 传入 { sm: number, md: number...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/guide/components/card-grid/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"卡片容器"}],["meta",{"property":"og:description","content":"概述 当你需要将多个卡片排列，可以使用 <CardGrid> 组件。在空间足够时，多个卡片会自动排列。 Props 组件默认会根据屏幕宽度自动调整列数。在空间足够时，默认显示双列，小屏幕下显示单列。 你可以通过 cols 配置列数。当传入 number 时，所有尺寸均显示为 number 个卡片。 传入 { sm: number, md: number..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-18T17:33:36.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-08-18T17:33:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"卡片容器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-18T17:33:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"readingTime":{"minutes":1.05,"words":314},"git":{"createdTime":1724002416000,"updatedTime":1724002416000,"contributors":[{"name":"pengzhanbo","email":"volodymyr@foxmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/组件/卡片容器.md","bulletin":false}');export{m as comp,u as data};
