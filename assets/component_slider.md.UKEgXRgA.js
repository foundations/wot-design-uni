import{av as s,ag as i,m as a,U as d,aR as e,l as h}from"./chunks/framework.BIX653lx.js";const y=JSON.parse('{"title":"Slider 滑块","description":"","frontmatter":{},"headers":[],"relativePath":"component/slider.md","filePath":"component/slider.md","lastUpdated":1712484804000}'),l={name:"component/slider.md"},n=e('<h1 id="slider-滑块" tabindex="-1">Slider 滑块 <a class="header-anchor" href="#slider-滑块" aria-label="Permalink to &quot;Slider 滑块&quot;">​</a></h1><p>支持单向滑块和双向滑块。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p><code>v-model</code> 为绑定值。如果为 number 类型则显示一个滑块，如果为 array 类型则显示两个滑块。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-slider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="双滑块" tabindex="-1">双滑块 <a class="header-anchor" href="#双滑块" aria-label="Permalink to &quot;双滑块&quot;">​</a></h2><p>双滑块模式下 <code>value</code> 为 <code>二元数组</code> 类型。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-slider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><h2 id="最大值最小值" tabindex="-1">最大值最小值 <a class="header-anchor" href="#最大值最小值" aria-label="Permalink to &quot;最大值最小值&quot;">​</a></h2><p>设置 <code>min</code> 最小值，<code>min</code> 最大值。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-slider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="隐藏文案" tabindex="-1">隐藏文案 <a class="header-anchor" href="#隐藏文案" aria-label="Permalink to &quot;隐藏文案&quot;">​</a></h2><p>设置 <code>hide-label</code> 隐藏滑块当前值。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-slider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hide-label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>设置 <code>hide-min-max</code> 隐藏最大最小值。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-slider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hide-min-max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="禁用" tabindex="-1">禁用 <a class="header-anchor" href="#禁用" aria-label="Permalink to &quot;禁用&quot;">​</a></h2><p>设置 <code>disabled</code> 属性。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-slider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>v-model</td><td>滑块值，如果为array，则为双向滑块</td><td>number / array</td><td>-</td><td>-</td><td>-</td></tr><tr><td>hide-min-max</td><td>是否显示左右的最大最小值</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>hide-label</td><td>是否显示当前滑块值</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>max</td><td>最大值</td><td>number</td><td>-</td><td>100</td><td>-</td></tr><tr><td>min</td><td>最小值</td><td>number</td><td>-</td><td>0</td><td>-</td></tr><tr><td>step</td><td>步进值</td><td>number</td><td>-</td><td>1</td><td>-</td></tr><tr><td>active-color</td><td>进度条激活背景颜色</td><td>string</td><td>-</td><td>linear-gradient(315deg, rgba(81,124,240,1) 0%,rgba(118,158,245,1) 100%)</td><td>-</td></tr><tr><td>inactive-color</td><td>进度条未激活背景颜色</td><td>string</td><td>-</td><td>#e5e5e5</td><td>-</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th><th>最低版本</th></tr></thead><tbody><tr><td>dragstart</td><td>开始移动时触发</td><td><code>{ value }</code></td><td>-</td></tr><tr><td>dragmove</td><td>移动滑块时触发</td><td><code>{ value }</code></td><td>-</td></tr><tr><td>dragend</td><td>移动结束时触发</td><td><code>{ value }</code></td><td>-</td></tr></tbody></table><h2 id="外部样式类" tabindex="-1">外部样式类 <a class="header-anchor" href="#外部样式类" aria-label="Permalink to &quot;外部样式类&quot;">​</a></h2><table><thead><tr><th>类名</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>custom-class</td><td>根节点样式</td><td>-</td></tr><tr><td>custom-min-class</td><td>最小值自定义样式</td><td>-</td></tr><tr><td>custom-max-class</td><td>最大值自定义样式</td><td>-</td></tr></tbody></table>',27);function p(r,k,o,c,g,E){const t=i("frame");return h(),a("div",null,[d(t),n])}const m=s(l,[["render",p]]);export{y as __pageData,m as default};
