import{a1 as p,V as r,W as h,au as e,a6 as s,k as n,$ as t,G as l,ab as o}from"./chunks/framework.CAZI9hYZ.js";const y=JSON.parse('{"title":"版本说明","description":"","frontmatter":{},"headers":[],"relativePath":"more/package-version.md","filePath":"more/package-version.md","lastUpdated":1733380659000}'),d={name:"more/package-version.md"};function k(c,a,u,b,g,m){const i=o("font");return r(),h("div",null,[a[3]||(a[3]=e('<h1 id="版本说明" tabindex="-1">版本说明 <a class="header-anchor" href="#版本说明" aria-label="Permalink to &quot;版本说明&quot;">​</a></h1><h2 id="语义版本规范" tabindex="-1">语义版本规范 <a class="header-anchor" href="#语义版本规范" aria-label="Permalink to &quot;语义版本规范&quot;">​</a></h2><p>package.json中的版本必须要遵循<code>语义化版本规范（Semantic Versioning）</code>。</p><div class="language-plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MAJOR.MINOR.PATCH</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>详细说明：</strong></p><h3 id="major-主版本号" tabindex="-1">MAJOR(主版本号) <a class="header-anchor" href="#major-主版本号" aria-label="Permalink to &quot;MAJOR(主版本号)&quot;">​</a></h3><blockquote><p><strong>表示有破坏性更改的版本更新，无法向后兼容。</strong></p><p>例如：1.0.0 升级到 2.0.0</p></blockquote><h3 id="minor-次版本号" tabindex="-1">MINOR(次版本号) <a class="header-anchor" href="#minor-次版本号" aria-label="Permalink to &quot;MINOR(次版本号)&quot;">​</a></h3><blockquote><p><strong>表示新增了功能，但仍向后兼容。</strong></p><p>例如：1.1.0 升级到 1.2.0</p></blockquote><h3 id="patch-修订号" tabindex="-1">PATCH(修订号) <a class="header-anchor" href="#patch-修订号" aria-label="Permalink to &quot;PATCH(修订号)&quot;">​</a></h3><blockquote><p><strong>表示修复了问题，或者进行了向后兼容的修复或小更新。</strong></p><p>例如：从 1.0.1 升级到 1.0.2</p></blockquote><p>注意：一般来说，项目的版本从1.0.0开始</p><h2 id="版本前缀" tabindex="-1">版本前缀 <a class="header-anchor" href="#版本前缀" aria-label="Permalink to &quot;版本前缀&quot;">​</a></h2><h3 id="" tabindex="-1">^ <a class="header-anchor" href="#" aria-label="Permalink to &quot;^&quot;">​</a></h3><p>插入符号: 匹配 &quot;兼容版本&quot;，即允许更新到 MAJOR 不变的最新版本。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">^1.2.3:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2.3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2.0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',16)),s("p",null,[s("strong",null,[n(i,{color:"#30a46c"},{default:t(()=>a[0]||(a[0]=[l("总结：锁定主版本，允许更新次版本 !")])),_:1})])]),a[4]||(a[4]=e('<h3 id="-1" tabindex="-1">~ <a class="header-anchor" href="#-1" aria-label="Permalink to &quot;~&quot;">​</a></h3><p>匹配 &quot;小版本号范围&quot;，即允许更新到 PATCH 的最新版本。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.2.3: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=1.2.3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.3.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',3)),s("p",null,[s("strong",null,[n(i,{color:"#30a46c"},{default:t(()=>a[1]||(a[1]=[l("总结：锁定次版本，允许更新修订版本 !")])),_:1})])]),a[5]||(a[5]=e(`<h3 id="无符号" tabindex="-1">无符号 <a class="header-anchor" href="#无符号" aria-label="Permalink to &quot;无符号&quot;">​</a></h3><p>指定精确版本，只有该版本符合要求。</p><h3 id="或-x" tabindex="-1">* 或 x <a class="header-anchor" href="#或-x" aria-label="Permalink to &quot;\\* 或 x&quot;">​</a></h3><p>表示任何版本均可。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1.2.x:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2.0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1.3.0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 任意版本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="比较运算符" tabindex="-1">比较运算符 <a class="header-anchor" href="#比较运算符" aria-label="Permalink to &quot;比较运算符&quot;">​</a></h3><p>明确限制版本范围的操作符</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=1.2.3: 表示安装版本 1.2.3 或更高版本</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.0.0:  表示安装 2.0.0 之前的版本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="预发布版本" tabindex="-1">预发布版本 <a class="header-anchor" href="#预发布版本" aria-label="Permalink to &quot;预发布版本&quot;">​</a></h2><p>预发布版本用于标识尚未正式发布的版本，格式为：</p><div class="language-plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MAJOR.MINOR.PATCH-&lt;标识&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>标识一般包括(alpha、beta、rc)：</strong></p><ul><li>1.0.0-alpha</li><li>1.0.0-beta.2</li><li>1.0.0-rc.1（Release Candidate）</li></ul>`,13)),s("p",null,[s("strong",null,[n(i,{color:"#f14158"},{default:t(()=>a[2]||(a[2]=[l("注意： 预发布版本不会自动满足 ^ 或 ~ 的范围限制，除非显式指定。")])),_:1})])])])}const q=p(d,[["render",k]]);export{y as __pageData,q as default};