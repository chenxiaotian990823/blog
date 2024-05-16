<template><div><h1 id="计算索引处百分比" tabindex="-1"><a class="header-anchor" href="#计算索引处百分比"><span>计算索引处百分比</span></a></h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>用于计算列表中特定索引处的值在列表总和中的百分比，根据给定的精度。它首先计算列表的总和，然后将列表中每个值转换为百分比形式，并将其舍入到给定的精度。接着，它通过将剩余的百分比分配给舍入后的值来确保总和达到 100%。这个算法主要使用了除法和取余操作</p>
</div>
<code-group>
<code-group-item title="封装方法">
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">//valueList要计算的数组</span>
<span class="token comment">//idx要计算数组中值的下表</span>
<span class="token comment">//precision百分比保留几位小数</span>
<span class="token function">getPercentValue</span><span class="token punctuation">(</span><span class="token parameter">valueList<span class="token punctuation">,</span> idx<span class="token punctuation">,</span> precision</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断是否为空</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>valueList<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 求和</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> valueList<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> acc <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 10的2次幂是100，用于计算精度。</span>
    <span class="token keyword">let</span> digits <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> precision<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 扩大比例100，</span>
    <span class="token keyword">let</span> votesPerQuota <span class="token operator">=</span> valueList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span> <span class="token operator">/</span> sum <span class="token operator">*</span> digits <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 总数，扩大比例意味的总数要扩大</span>
    <span class="token keyword">let</span> targetSeats <span class="token operator">=</span> digits <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token comment">// 再向下取值，组成数组</span>
    <span class="token keyword">let</span> seats <span class="token operator">=</span> votesPerQuota<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">votes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>votes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 再新计算合计，用于判断与总数量是否相同，相同则占比会100%</span>
    <span class="token keyword">let</span> currentSum <span class="token operator">=</span> seats<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> acc <span class="token operator">+</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 余数部分的数组：原先数组减去向下取值的数组，得到余数部分的数组</span>
    <span class="token keyword">let</span> remainder <span class="token operator">=</span> votesPerQuota<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">votes<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> votes <span class="token operator">-</span> seats<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 给最大最大的余额加1，凑个占比100%；</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentSum <span class="token operator">&lt;</span> targetSeats<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//  找到下一个最大的余额，给其加1</span>
        <span class="token keyword">let</span> max <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">NEGATIVE_INFINITY</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> maxId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> remainder<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>remainder<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                max <span class="token operator">=</span> remainder<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                maxId <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 对最大项余额加1</span>
        <span class="token operator">++</span>seats<span class="token punctuation">[</span>maxId<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 已经增加最大余数加1，则下次判断就可以不需要再判断这个余额数。</span>
        remainder<span class="token punctuation">[</span>maxId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 总的也要加1，为了判断是否总数是否相同，跳出循环。</span>
        <span class="token operator">++</span>currentSum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 这时候的seats就会总数占比会100%</span>
    <span class="token keyword">return</span> seats<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">/</span> digits<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-group-item>
<code-group-item title="调用方式">
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> firper <span class="token operator">=</span> <span class="token function">getPercentValue</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//求数组元素1在数组arr中的占比，保留两位小数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></code-group-item>
</code-group>
</div></template>


