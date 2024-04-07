import{av as i,ag as t,m as a,U as h,aR as e,l as n}from"./chunks/framework.BIX653lx.js";const u=JSON.parse('{"title":"StatusTip 缺省提示","description":"","frontmatter":{},"headers":[],"relativePath":"component/status-tip.md","filePath":"component/status-tip.md","lastUpdated":1712484804000}'),l={name:"component/status-tip.md"},p=e(`<h1 id="statustip-缺省提示" tabindex="-1">StatusTip 缺省提示 <a class="header-anchor" href="#statustip-缺省提示" aria-label="Permalink to &quot;StatusTip 缺省提示&quot;">​</a></h1><p>一般用于兜底占位展示。</p><blockquote><p>本组件使用图片均为外链，推荐将图片下载到开发者的服务器后通过自定义图片<code>URL</code>使用。</p></blockquote><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>设置 <code>image</code> 修改展示缺省图片类型，默认为 <code>network</code>，可选值 <code>search</code>, <code>network</code>, <code>content</code>, <code>collect</code>, <code>comment</code>, <code>halo</code>, <code>message</code>。可设置 <code>tip</code> 来控制展示提示文案。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-status-tip</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;search&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;当前搜索无结果&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-status-tip</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;network&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;该页面暂时无法访问&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-status-tip</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;content&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;暂无内容&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-status-tip</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;collect&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;暂无收藏&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-status-tip</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;comment&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;当前没有联系人名单哦～&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-status-tip</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;halo&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;支付失败，请重新订购&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-status-tip</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;message&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;已订阅全部消息&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="自定义大小" tabindex="-1">自定义大小 <a class="header-anchor" href="#自定义大小" aria-label="Permalink to &quot;自定义大小&quot;">​</a></h2><p>通过 <code>image-size</code> 属性图片的大小。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-status-tip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  :image-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          height: 200,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          width: 300</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;search&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  tip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;当前搜索无结果&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="自定义图片" tabindex="-1">自定义图片 <a class="header-anchor" href="#自定义图片" aria-label="Permalink to &quot;自定义图片&quot;">​</a></h2><p>需要自定义图片时，可以在 <code>image</code> 属性中传入任意图片 URL。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-status-tip</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://img.wot-design-uni.cn/static/1.jpg&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;查看我的头像&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>image</td><td>缺省图片类型，支持传入图片 URL</td><td>string</td><td>search / network / content / collect / comment / halo / message</td><td>network</td><td>-</td></tr><tr><td>image-size</td><td>图片大小，默认单位为 <code>px</code></td><td><code>string</code>/<code>number</code>/<code>ImageSize</code></td><td>-</td><td>-</td><td>-</td></tr><tr><td>tip</td><td>提示文案</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>image-mode</td><td>预览图片的 mode 属性</td><td><code>ImageMode</code></td><td>-</td><td>aspectFit</td><td>1.2.12</td></tr></tbody></table><h3 id="imagesize" tabindex="-1">ImageSize <a class="header-anchor" href="#imagesize" aria-label="Permalink to &quot;ImageSize&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>height</td><td>图片高度，默认单位为 <code>px</code></td><td>string | number</td><td>-</td><td>-</td><td>1.2.12</td></tr><tr><td>width</td><td>图片宽度，默认单位为 <code>px</code></td><td>string | number</td><td>-</td><td>-</td><td>1.2.12</td></tr></tbody></table>`,16);function k(d,o,r,E,g,c){const s=t("frame");return n(),a("div",null,[h(s),p])}const y=i(l,[["render",k]]);export{u as __pageData,y as default};