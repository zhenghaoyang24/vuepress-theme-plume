import{_ as p,c as d,b as c,d as r,w as n,r as v,o,e as l,a as s}from"./app-De9JtB2w.js";const h={};function m(b,a){const t=v("Tabs");return o(),d("div",null,[a[4]||(a[4]=c(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>在 Markdown 中支持选项卡。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>你需要将选项卡包装在 <code>tabs</code> 容器中。</p><p>你可以在 <code>tabs</code> 容器中添加一个 id 后缀，该后缀将用作选项卡 id。 所有具有相同 id 的选项卡将共享相同的切换事件。</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: tabs#fruit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 这里，fruit 将用作 id，它是可选的 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 选项卡内容 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre></div><p>在这个容器内，你应该使用 <code>@tab</code> 标记来标记和分隔选项卡内容。</p><p>在 <code>@tab</code> 标记后，你可以添加文本 <code>:active</code> 默认激活选项卡，之后的文本将被解析为选项卡标题。</p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: tabs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@tab 标题 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- tab 1 内容 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@tab 标题 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- tab 2 内容 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@tab:active 标题 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- tab 3 将会被默认激活 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- tab 3 内容 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，标题将用作选项卡的值，但你可以使用 id 后缀覆盖它。</p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: tabs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@tab 标题 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 此处，选项卡 1 的标题“标题 1”将用作值。 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- tab 1 内容 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@tab 标题 2#值 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- tab 2 内容 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在每个选项卡中使用 Vue 语法和组件，并且你可以访问 value 和 isActive， 表示选项卡的绑定值和选项卡是否处于激活状态。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><strong>输入：</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>::: tabs</span></span>
<span class="line"><span>@tab npm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm 应该与 Node.js 被一同安装。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@tab pnpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`sh</span></span>
<span class="line"><span>corepack enable</span></span>
<span class="line"><span>corepack use pnpm@8</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,16)),r(t,{id:"40",data:[{id:"npm"},{id:"pnpm"}]},{title0:n(({value:i,isActive:e})=>a[0]||(a[0]=[l("npm")])),title1:n(({value:i,isActive:e})=>a[1]||(a[1]=[l("pnpm")])),tab0:n(({value:i,isActive:e})=>a[2]||(a[2]=[s("p",null,"npm 应该与 Node.js 被一同安装。",-1)])),tab1:n(({value:i,isActive:e})=>a[3]||(a[3]=[s("div",{class:"language-sh","data-ext":"sh","data-title":"sh"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"corepack"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," enable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"corepack"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," use"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," pnpm@8")])])])],-1)])),_:1})])}const u=p(h,[["render",m],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/guide/markdown/tabs/","title":"选项组","lang":"zh-CN","frontmatter":{"title":"选项组","createTime":"2024/09/30 14:43:40","icon":"vaadin:tabs","permalink":"/guide/markdown/tabs/","description":"概述 在 Markdown 中支持选项卡。 语法 你需要将选项卡包装在 tabs 容器中。 你可以在 tabs 容器中添加一个 id 后缀，该后缀将用作选项卡 id。 所有具有相同 id 的选项卡将共享相同的切换事件。 在这个容器内，你应该使用 @tab 标记来标记和分隔选项卡内容。 在 @tab 标记后，你可以添加文本 :active 默认激活选项卡...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/guide/markdown/tabs/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"选项组"}],["meta",{"property":"og:description","content":"概述 在 Markdown 中支持选项卡。 语法 你需要将选项卡包装在 tabs 容器中。 你可以在 tabs 容器中添加一个 id 后缀，该后缀将用作选项卡 id。 所有具有相同 id 的选项卡将共享相同的切换事件。 在这个容器内，你应该使用 @tab 标记来标记和分隔选项卡内容。 在 @tab 标记后，你可以添加文本 :active 默认激活选项卡..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T17:26:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-30T17:26:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"选项组\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-30T17:26:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"readingTime":{"minutes":1.29,"words":388},"git":{"createdTime":1727717214000,"updatedTime":1727717214000,"contributors":[{"name":"pengzhanbo","email":"volodymyr@foxmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/markdown/选项组.md","bulletin":false}');export{u as comp,g as data};
