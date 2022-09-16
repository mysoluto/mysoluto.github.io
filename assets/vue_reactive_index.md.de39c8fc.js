import{_ as n,c as s,o as a,a as t}from"./app.adfffae8.js";const g='{"title":"vue \u54CD\u5E94\u5F0F","description":"","frontmatter":{"title":"vue \u54CD\u5E94\u5F0F","date":"2022-09-16T00:00:00.000Z"},"headers":[{"level":2,"title":"\u5982\u4F55\u6536\u96C6\u4F9D\u8D56","slug":"\u5982\u4F55\u6536\u96C6\u4F9D\u8D56"}],"relativePath":"vue/reactive/index.md"}',p={},o=t(`<h1 id="\u54CD\u5E94\u5F0F" tabindex="-1">\u54CD\u5E94\u5F0F <a class="header-anchor" href="#\u54CD\u5E94\u5F0F" aria-hidden="true">#</a></h1><p>\u54CD\u5E94\u5F0F\u662F\u63CF\u8FF0\u89E3\u51B3 \u6570\u636E\u548CUI\u6E32\u67D3\u76F4\u63A5\u8054\u7CFB\u7684\u4E00\u79CD\u76F4\u89C2\u65B9\u6848\uFF0C\u4EBA\u4EEC\u53EA\u9700\u8981\u8BBE\u5B9A\u597D\u6570\u636E\u548CUI\u7684\u5173\u7CFB\uFF0C\u540E\u7EED\u66F4\u65B0\u6570\u636E\uFF0C\u6846\u67B6\u5C42\u9762\u4F1A\u786E\u4FDDUI\u5F97\u5230\u6B63\u786E\u6E32\u67D3\uFF0C \u4F20\u7EDF\u7684\u65B9\u5F0F\u662F\u7C7B\u4F3Cjquery\u7684\u65B9\u5F0F\uFF0C\u76F4\u63A5\u64CD\u4F5Cdom, \u8FD9\u79CD\u65B9\u5F0F\u6210\u672C\u9AD8\u4E14\u53EF\u7EF4\u62A4\u6027\u76F8\u5BF9\u5DEE\u4E9B\uFF0C\u73B0\u4EE3\u524D\u7AEF\u6846\u67B6\u5927\u90E8\u5206\u662F\u54CD\u5E94\u5F0F\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u54CD\u5E94\u5F0F\u7684\u4E00\u4E2A\u57FA\u672C\u6D41\u7A0B\u662F\uFF1A</p><p>\u6E32\u67D3\u51FD\u6570\uFF08\u7EC4\u4EF6\u91CC\u9762\u7684render, \u8D1F\u8D23\u6839\u636E\u6570\u636E\u63CF\u8FF0UI\uFF0C \u4E5F\u53EF\u80FD\u662F\u5355\u7EAF\u7684\u8BA1\u7B97\u51FD\u6570\uFF09\uFF0C\u4F9D\u8D56\u503C\uFF08\u53D8\u91CF\uFF09\uFF0C\u6536\u96C6 \u6E32\u67D3\u51FD\u6570\u548C\u4F9D\u8D56\u503C\u4E4B\u95F4\u7684\u5173\u7CFB\u5E76\u5B58\u50A8\uFF0C\u540E\u7EED\u68C0\u6D4B\u5230 \u4F9D\u8D56\u503C\u7684\u53D8\u5316\uFF0C\u5C31\u91CD\u65B0\u8FD0\u884C\u6E32\u67D3\u51FD\u6570\uFF0C\u66F4\u65B0UI</p><p>\u8FD9\u91CC\u4E3B\u8981\u53C2\u8003\u201C\u4E66\u7C4D\u201D \u63CF\u8FF0vue\u54CD\u5E94\u5F0F\u7684\u5927\u81F4\u5B9E\u73B0\uFF0C\u5BF9\u5E94vue3\u91CC\u9762\u7684 @vue/reactivity</p><h2 id="\u5982\u4F55\u6536\u96C6\u4F9D\u8D56" tabindex="-1">\u5982\u4F55\u6536\u96C6\u4F9D\u8D56 <a class="header-anchor" href="#\u5982\u4F55\u6536\u96C6\u4F9D\u8D56" aria-hidden="true">#</a></h2><p>\u6536\u96C6\u4F9D\u8D56\uFF0C\u5176\u5B9E\u5C31\u662F\u4FDD\u5B58\u597D \u6E32\u67D3\u51FD\u6570\u548C\u53D8\u91CF\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB, \u8FD9\u91CC\u4E3B\u8981\u662F\u53BB\u76D1\u542C \u53D8\u91CF\u7684\u8BFB\u53D6\uFF08\u4F7F\u7528\uFF09\u3001\u8BBE\u7F6E\uFF08\u66F4\u65B0\uFF09\uFF0Cvue2\u4E2D\u662F\u901A\u8FC7Object.defineProperty\u5B9E\u73B0\uFF0C\u6BD4\u5982</p><div class="language-js"><pre><code><span class="token keyword">const</span> originData <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token parameter">originData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// Object.keys\u904D\u5386</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>originData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;read&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
                <span class="token keyword">return</span> originData<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;write&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
                originData<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
                <span class="token keyword">return</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> data
<span class="token punctuation">}</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>originData<span class="token punctuation">)</span>

<span class="token keyword">const</span> data2 <span class="token operator">=</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u65B0\u7684\u65B9\u5F0F\u662F\u901A\u8FC7<code>Proxy</code>\u7684\u65B9\u5F0F\uFF0C\u5B9E\u73B0\u540C\u6837\u7684\u6548\u679C\u53EF\u4EE5\u8FD9\u6837</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token parameter">originData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>originData<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;read&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
            <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;write&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
            <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u4E86\u89E3\u4E86\u76D1\u542C\u53D8\u91CF \u8BFB\u53D6 \u6216 \u4FEE\u6539\u7684\u65B9\u5F0F\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7EE7\u7EED\u5B9A\u4E49\u5982\u4E0B\u6982\u5FF5\uFF0C\u4E4B\u6240\u4EE5\u9700\u8981\u5BF9fn\u8FDB\u884C\u5305\u88C5\u5904\u7406\uFF0C\u662F\u56E0\u4E3AJS\u662F\u5355\u7EBF\u7A0B\u987A\u5E8F\u6267\u884C\u7684\uFF0C\u5355\u4E2A\u65F6\u95F4\u70B9\u6700\u591A\u53EA\u6709\u4E00\u4E2A\u51FD\u6570\u5728\u8FD0\u884C\uFF0C\u56E0\u6B64\u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u8DDF\u8E2A\u53D8\u91CF\u548C \u51FD\u6570\u76F4\u63A5\u7684\u5173\u7CFB\uFF0C\u6BD4\u5982</p><p>fn: \u6E32\u67D3\u51FD\u6570 \u6216\u8005 \u5176\u5B83\u9700\u8981\u76D1\u542C\u53D8\u91CF\uFF0C\u7136\u540Ererun\u7684\u51FD\u6570 effect: \u5BF9 fn\u8FDB\u884C\u5305\u88C5\u7684\u5DE5\u5177\u51FD\u6570\uFF0C\u4F7F\u7528 <code>effect(fn)</code></p><div class="language-js"><pre><code><span class="token keyword">let</span> activeEffect

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">h1</span><span class="token operator">:</span> <span class="token string">&#39;hello, world&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">h2</span><span class="token operator">:</span> <span class="token string">&#39;hello, h2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">h3</span><span class="token operator">:</span> <span class="token string">&#39;hello, h3&#39;</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    activeEffect <span class="token operator">=</span> fn
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    activeEffect <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>h1<span class="token punctuation">)</span> <span class="token punctuation">}</span>

<span class="token function">effect</span><span class="token punctuation">(</span>renderEffect<span class="token punctuation">)</span>

</code></pre></div><p>\u4E0A\u9762\u7684\u65B9\u5F0F\u6709\u4E00\u4E2A\u7F3A\u9677\uFF0C\u5373\u5982\u679C render\u6709\u5D4C\u5957\u7684</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>h1<span class="token punctuation">)</span>

    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>h2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u8FD9\u4E2A\u65F6\u5019 activeEffectFn \u662Fnull\u7684</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>h3<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6539\u8FDB\u65B9\u6848\u662F\u5982\u4E0B\uFF1A(\u901A\u8FC7\u7EF4\u62A4\u4E00\u4E2A\u5806\u6808\uFF0C\u8DDF\u8E2Aeffect\u6267\u884C\u7684\u5D4C\u5957)</p><div class="language-js"><pre><code><span class="token keyword">let</span> activeEffect
<span class="token keyword">const</span> effectStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> <span class="token function-variable function">pushTarget</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">effect</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> effectStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">popTarget</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    effectStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    activeEffect <span class="token operator">=</span> effectStack<span class="token punctuation">[</span>effectStack<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">effectFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">pushTarget</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>

        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token function">popTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    effectFn<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">effect</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

    <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5F53\u524D\u6211\u4EEC\u5DF2\u7ECF\u5305\u88C5\u4E86 fn \u7684\u8FD0\u884C\u4E0A\u4E0B\u6587\uFF0C\u786E\u4FDDfn\u8FD0\u884C\u7684\u65F6\u5019\uFF0CactiveEffect\u6307\u5411 \u5F53\u524Dfn\u7684\u5305\u88C5\u51FD\u6570 effectFn, \u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9 data\u8FDB\u884C\u62E6\u622A\uFF0C\u6536\u96C6 data\u548C fn\u4E4B\u95F4\u7684\u8054\u7CFB\uFF0C\u901A\u8FC7\u5B9A\u4E49 track \u548C trigger\u51FD\u6570\u6765\u5904\u7406\u8FD9\u4E9B\u903B\u8F91</p><div class="language-js"><pre><code><span class="token comment">// \u4FDD\u5B58\u7684\u7ED3\u6784\u53C2\u8003vue\u7684\uFF0C\u8FD9\u91CC\u6682\u65F6\u6CA1\u6709\u6DF1\u5165\u601D\u8003</span>
<span class="token comment">// WeakMap = { &lt;target&gt;: Map(= { &lt;key&gt;: new Set&lt;effectFn&gt; } ) }</span>
<span class="token keyword">const</span> depsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">track</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> targetDep <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>targetDep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        depsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> targetDep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> deps <span class="token operator">=</span> targetDep<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        targetDep<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> deps <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    activeEffect <span class="token operator">&amp;&amp;</span> deps<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> targetDep <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>targetDep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> deps <span class="token operator">=</span> targetDep<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> effectRun <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> effectFn <span class="token keyword">of</span> deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        effectFn <span class="token operator">!==</span> activeEffect <span class="token operator">&amp;&amp;</span> effectRun<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> effectFn <span class="token keyword">of</span> effectRun<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">effectFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
            <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
            <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5982\u4E0A\uFF0C\u5F53\u524D\u6709\u4E24\u4E2A\u95EE\u9898\uFF1A 1\u3001\u6BCF\u6B21\u8FD0\u884Crender\u7684\u65F6\u5019\uFF0C\u5D4C\u5957\u7684effect \u8FD0\u884C\u4F1A\u4EA7\u751F\u4E00\u4E2A\u65B0\u7684effectFn,\u5E76\u88AB\u4FDD\u5B58\u5230\u4E86deps\u4E2D\uFF0C\u6B64\u65F6\u6539\u53D8 data.h2\u7684\u503C\uFF0C\u4F1A\u770B\u5230 \u6253\u5370\u4E86\u4E24\u4E2A \uFF08\u539F\u56E0\u662Fdeps\u4E2D\u6709\u4E24\u4E2AeffectFn, \u5305\u88C5\u7684fn\u7684\u903B\u8F91\u662F\u4E00\u81F4\u7684 2\u3001\u5047\u5982render\u51FD\u6570\u91CC\u9762\u7684 \u903B\u8F91\u662F\u8FD9\u6837\u7684\uFF0C<code>console.log(data.ok ? data.h1 : &#39;default hello&#39;)</code>, \u6B64\u65F6\u5982\u679C data.ok\u5F00\u59CB\u662Ffalse, \u5219\u59CB\u7EC8\u6536\u96C6\u4E0D\u5230 data.h1\u8FD9\u4E2A\u4F9D\u8D56\uFF0C\u5C31\u7B97\u540E\u7EED\u8BBE\u7F6Edata.ok = true\uFF0C \u6B64\u65F6\u6539\u53D8data.h1, \u540C\u6837\u4E0D\u4F1A\u89E6\u53D1 effectFn\u7684\u8FD0\u884C</p><div class="language-js"><pre><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">h1</span><span class="token operator">:</span> <span class="token string">&#39;hello, h1&#39;</span> <span class="token punctuation">}</span>

<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>ok <span class="token operator">?</span> data<span class="token punctuation">.</span>h1 <span class="token operator">:</span> <span class="token string">&#39;default hello&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><p>\u95EE\u98982\u7684\u89E3\u51B3\u65B9\u6848\uFF1A\u6BCF\u6B21\u8FD0\u884CeffectFn\u90FD\u5148\u6E05\u9664\u4F9D\u8D56\uFF0C\u76F8\u5F53\u4E8E\u91CD\u65B0\u8D70\u6536\u96C6\u8FC7\u7A0B</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">cleanEffect</span><span class="token punctuation">(</span><span class="token parameter">effectFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    effectFn<span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">deps</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        deps<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">effectFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">cleanEffect</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
        <span class="token function">pushTarget</span><span class="token punctuation">(</span>effectFn<span class="token punctuation">)</span>
        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">popTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div>`,22),e=[o];function c(u,l,k,i,r,f){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{g as __pageData,y as default};
