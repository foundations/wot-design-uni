import{av as p,ag as l,m as h,p as i,S as s,U as e,O as t,aR as a,l as k}from"./chunks/framework.BIX653lx.js";const x=JSON.parse('{"title":"快速上手","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quick-use.md","filePath":"guide/quick-use.md","lastUpdated":1712484804000}'),d={name:"guide/quick-use.md"},o=a(`<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><p>本节介绍如何在<code>uni-app</code>项目中安装、配置并使用 <code>Wot Design Uni</code>。</p><div class="warning custom-block"><p class="custom-block-title">关于安装</p><p><code>Wot Design Uni</code>提供了<code>uni_modules</code>和<code>npm</code>两种安装方式，按需选择。</p><ul><li>使用<code>uni_modules</code>安装无需额外配置，即插即用，但是每次更新组件库需要处理代码差异（一般直接覆盖就可以）。</li><li>使用<code>npm</code>安装需要额外配置，更新组件库时无需处理代码差异。</li></ul></div><h2 id="uni-modules-安装" tabindex="-1">uni_modules 安装 <a class="header-anchor" href="#uni-modules-安装" aria-label="Permalink to &quot;uni_modules 安装&quot;">​</a></h2><p><code>Wot Design Uni</code> 支持 <a href="https://uniapp.dcloud.net.cn/plugin/uni_modules.html#uni-modules" target="_blank" rel="noreferrer">uni_modules</a> 规范，已经上架到 uni-app 的插件市场。</p><p>在<code>uni-app插件市场</code>选择使用<code>HBuildX</code>导入，或者选择手动在src目录下创建uni_modules文件夹并将<code>Wot Design Uni</code>解压到uni_modules中，结构如下:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>- uni_modules</span></span>
<span class="line"><span>- - - wot-design-uni</span></span></code></pre></div><p>下载地址：<a href="https://ext.dcloud.net.cn/plugin?id=13889"><span>wot-design-uni</span></a></p><h2 id="npm-安装" tabindex="-1">npm 安装 <a class="header-anchor" href="#npm-安装" aria-label="Permalink to &quot;npm 安装&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-PK4HY" id="tab-PG2btMX" checked="checked"><label for="tab-PG2btMX">npm</label><input type="radio" name="group-PK4HY" id="tab--_ZDaJV"><label for="tab--_ZDaJV">yarn</label><input type="radio" name="group-PK4HY" id="tab-Gd5n47R"><label for="tab-Gd5n47R">pnpm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wot-design-uni</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wot-design-uni</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wot-design-uni</span></span></code></pre></div></div></div>`,10),c={id:"配置easycom自动引入组件自动引入方案1",tabindex:"-1"},r=i("a",{class:"header-anchor",href:"#配置easycom自动引入组件自动引入方案1","aria-label":'Permalink to "配置easycom自动引入组件<el-tag type="primary" style="vertical-align: middle;margin-left:8px;" effect="dark" >自动引入方案1</el-tag>"'},"​",-1),g=a(`<p>传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。<code>easycom</code>将其精简为一步。<br> 只要组件路径符合规范（具体见<a href="https://uniapp.dcloud.net.cn/collocation/pages.html#easycom" target="_blank" rel="noreferrer">easycom</a>），就可以不用引用、注册，直接在页面中使用。</p><div class="tip custom-block"><p class="custom-block-title">提醒</p><ul><li>uni-app 考虑到编译速度，直接在<code>pages.json</code>内修改<code>easycom</code>不会触发重新编译，需要改动页面内容触发。</li><li>请确保您的pages.json中只有一个easycom字段，否则请自行合并多个引入规则。</li></ul></div><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// pages.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;easycom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;autoscan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		&quot;custom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		  &quot;^wd-(.*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wot-design-uni/components/wd-$1/wd-$1.vue&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 此为本身已有的内容</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	&quot;pages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// ......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,3),E={id:"基于vite配置自动引入组件自动引入方案2",tabindex:"-1"},u=i("a",{class:"header-anchor",href:"#基于vite配置自动引入组件自动引入方案2","aria-label":'Permalink to "基于vite配置自动引入组件<el-tag type="primary" style="vertical-align: middle;margin-left:8px;" effect="dark" >自动引入方案2</el-tag>"'},"​",-1),y=a(`<p>如果不熟悉<code>easycom</code>，也可以通过<a href="https://github.com/uni-helper/vite-plugin-uni-components" target="_blank" rel="noreferrer">@uni-helper/vite-plugin-uni-components</a>实现组件的自动引入。</p><div class="tip custom-block"><p class="custom-block-title">提醒</p><ul><li>推荐使用@uni-helper/vite-plugin-uni-components@0.0.9及以上版本，因为在0.0.9版本开始其内置了<code>wot-design-uni</code>的<code>resolver</code>。</li><li>如果使用此方案时控制台打印很多<code>Sourcemap for points to missing source files​</code>，可以尝试将vite版本升级至4.5.x。</li></ul></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-xSeeK" id="tab-E6cIXeB" checked="checked"><label for="tab-E6cIXeB">npm</label><input type="radio" name="group-xSeeK" id="tab-33Zh6wq"><label for="tab-33Zh6wq">yarn</label><input type="radio" name="group-xSeeK" id="tab-eyGjxsE"><label for="tab-eyGjxsE">pnpm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @uni-helper/vite-plugin-uni-components</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @uni-helper/vite-plugin-uni-components</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @uni-helper/vite-plugin-uni-components</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre></div></div></div><p><em><strong>@uni-helper/vite-plugin-uni-components 0.0.8及之前版本</strong></em></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vite&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uni </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@dcloudio/vite-plugin-uni&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Components, { kebabCase } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@uni-helper/vite-plugin-uni-components&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // make sure put it before \`Uni()\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Components</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resolvers: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;component&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (name.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">Wd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[A-Z]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> compName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> kebabCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              name,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              from: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`wot-design-uni/components/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">compName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">compName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}.vue\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uni</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p><em><strong>@uni-helper/vite-plugin-uni-components 0.0.9及以后版本</strong></em></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vite&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uni </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@dcloudio/vite-plugin-uni&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Components </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@uni-helper/vite-plugin-uni-components&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { WotResolver } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@uni-helper/vite-plugin-uni-components/resolvers&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // make sure put it before \`Uni()\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Components</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    resolvers: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WotResolver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uni</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h4 id="ui-组件类型提示" tabindex="-1">UI 组件类型提示 <a class="header-anchor" href="#ui-组件类型提示" aria-label="Permalink to &quot;UI 组件类型提示&quot;">​</a></h4><p>如果你使用 <code>pnpm</code> ，请在根目录下创建一个 <code>.npmrc</code> 文件，参见<a href="https://github.com/antfu/unplugin-vue-components/issues/389" target="_blank" rel="noreferrer">issue</a>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// .npmrc</span></span>
<span class="line"><span>public-hoist-pattern[]=@vue*</span></span>
<span class="line"><span>// or</span></span>
<span class="line"><span>// shamefully-hoist = true</span></span></code></pre></div>`,10),m={id:"volar-支持推荐",tabindex:"-1"},F=i("a",{class:"header-anchor",href:"#volar-支持推荐","aria-label":'Permalink to "Volar 支持<el-tag type="primary" style="vertical-align: middle;margin-left:8px;" effect="dark" >推荐</el-tag>"'},"​",-1),v=a(`<p>如果您使用 <code>Volar</code>，请在 <code>tsconfig.json</code> 中通过 <code>compilerOptions.type</code> 指定全局组件类型。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>cli项目使用<code>uni_modules</code>安装无需配置，对<code>Volar</code>的支持自动生效，<code>HbuildX</code>项目不支持此配置，故此步骤仅在<code>cli</code>项目使用<code>npm</code>安装时需要配置。</p></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// tsconfig.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wot-design-uni/global.d.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p><code>Wot Design Uni</code>安装、配置完成之后，支持组件自动引入，故可以直接在SFC中使用，无需在页面内import，也不需要在components内声明，即可在任意页面使用。值得注意的是，<code>uni-app</code>平台不支持全局挂载组件，所以<code>Message</code>、<code>Toast</code>等组件仍需在SFC中显式使用，例如:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-toast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-toast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>使用uni_modules 安装时<code>Wot Design Uni</code>的组件天然支持<code>easycom</code>规范，无需额外配置就可以自动引入组件，而使用npm安装需要自行配置<code>easycom</code>或<code>@uni-helper/vite-plugin-uni-components</code>。</p></div>`,7);function b(C,_,f,B,D,A){const n=l("el-tag");return k(),h("div",null,[o,i("h3",c,[s("配置easycom自动引入组件"),e(n,{type:"primary",style:{"vertical-align":"middle","margin-left":"8px"},effect:"dark"},{default:t(()=>[s("自动引入方案1")]),_:1}),s(),r]),g,i("h3",E,[s("基于vite配置自动引入组件"),e(n,{type:"primary",style:{"vertical-align":"middle","margin-left":"8px"},effect:"dark"},{default:t(()=>[s("自动引入方案2")]),_:1}),s(),u]),y,i("h2",m,[s("Volar 支持"),e(n,{type:"primary",style:{"vertical-align":"middle","margin-left":"8px"},effect:"dark"},{default:t(()=>[s("推荐")]),_:1}),s(),F]),v])}const T=p(d,[["render",b]]);export{x as __pageData,T as default};