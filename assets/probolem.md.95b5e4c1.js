import{_ as e,c as s,o as a,a as n}from"./app.adfffae8.js";const v='{"title":"\u65E5\u5E38\u5F00\u53D1\u9047\u5230\u7684\u95EE\u9898","description":"","frontmatter":{"title":"\u65E5\u5E38\u5F00\u53D1\u9047\u5230\u7684\u95EE\u9898","date":"2022-05-23T00:00:00.000Z"},"headers":[{"level":2,"title":"\u89E3\u51B3vue-cli serve\u672C\u5730\u8FD0\u884C\u4E0D\u6B63\u5E38","slug":"\u89E3\u51B3vue-cli-serve\u672C\u5730\u8FD0\u884C\u4E0D\u6B63\u5E38"}],"relativePath":"probolem.md"}',t={},p=n(`<h2 id="\u89E3\u51B3vue-cli-serve\u672C\u5730\u8FD0\u884C\u4E0D\u6B63\u5E38" tabindex="-1">\u89E3\u51B3vue-cli serve\u672C\u5730\u8FD0\u884C\u4E0D\u6B63\u5E38 <a class="header-anchor" href="#\u89E3\u51B3vue-cli-serve\u672C\u5730\u8FD0\u884C\u4E0D\u6B63\u5E38" aria-hidden="true">#</a></h2><p>\u8868\u73B0\uFF1A\u6267\u884C vue-cli-service serve ./src/main.ts \u4E4B\u540E\uFF0C\u672C\u5730spa\u9879\u76EE\u6B63\u5E38\u542F\u52A8,\u8BBF\u95EE\u9875\u9762\u7684\u65F6\u5019\uFF0C\u9875\u9762\u4E00\u76F4\u6CA1\u529E\u6CD5\u6B63\u5E38\u5448\u73B0\uFF0C\u67E5\u770Bjs\u8D44\u6E90\u8BF7\u6C42\uFF0C\u53D1\u73B0\u53EA\u6709\u4E00\u4E2Achunk-vendors\u6587\u4EF6\uFF0C\u6CA1\u6709\u5176\u4ED6js\u6587\u4EF6</p><p>\u539F\u56E0\uFF1Aserve\u547D\u4EE4\u4E0B\uFF0C\u540E\u9762\u9644\u52A0\u4E86\u5165\u53E3\u53C2\u6570 <code>./src/main.ts</code>, \u7136\u540E vue-cli\u7684\u914D\u7F6E\u6587\u4EF6vue.config.js\u91CC\u9762\uFF0C\u5305\u542B\u4E86\u8FD9\u6837\u4E00\u4E2A\u914D\u7F6E</p><div class="language-js"><pre><code><span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.ts&#39;</span> <span class="token punctuation">}</span>

<span class="token comment">// \u5982\u679C\u6709\u5165\u53E3\u53C2\u6570\uFF0Cwebpack\u914D\u7F6E\u7684entry\u662F\u8FD9\u6837</span>
<span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.ts&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p>\u5728HtmlWebpackPlugin\u4E2D\u6709\u4E00\u4E2A\u53C2\u6570<code>chunks</code>, \u5B83\u8868\u793Achunk\u7684\u767D\u540D\u5355\uFF0C\u53EA\u6709\u5728\u767D\u540D\u5355\u91CC\u9762\u7684chunk\uFF0C\u624D\u4F1A\u6700\u7EC8inject\u5230html\u6587\u4EF6\u4E2D\uFF0C\u5BF9\u5E94\u5F53\u524D\u573A\u666F\uFF0C\u5C31\u662F\u56E0\u4E3A\u9519\u8BEF\u7684chunks\u914D\u7F6E\uFF0C\u5BFC\u81F4\u5165\u53E3chunk js\u6587\u4EF6\u6CA1\u6709\u5728\u767D\u540D\u5355\u4E2D</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u53BB\u6389serve\u540E\u9762\u7684\u5165\u53E3\u53C2\u6570 \u6216\u8005 \u628Apages\u914D\u7F6E\u6539\u6210 <code>{ app: &#39;./src/main.ts&#39; }</code></p>`,6),r=[p];function c(o,l,i,u,d,_){return a(),s("div",null,r)}var h=e(t,[["render",c]]);export{v as __pageData,h as default};
