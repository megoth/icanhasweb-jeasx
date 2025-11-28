
import BlogPost from "../../BlogPost"

export default function () {
    return (
        <BlogPost title="Hello world!">
            <p>This is the first entry in my attempt at revitalizing icanhasweb.net. I've spent some time this christmas holiday to refurnish the website, rewriting the code, merging two blogs into one, and changing the design a bit.</p>
<p><strong>TL;DR: I've rewritten my website using Wintersmith. This will be my only blog going forward. I'll detail the ideas and choices that I've made in my next blog post.</strong></p>
<p>The code has been rewritten using <a href="http://wintersmith.io/">Wintersmith</a>. I've used it in a couple of other projects, and found it to be a framework much more acceptable to change in content design. <a href="https://wordpress.com/">Wordpress</a> is a treat when used for blogging and simple pages, but not that great if I want to have other kinds of content (many will probably disagree with me on this). The fact that it produces static content is also a plus in terms of performance. And not to mention the fact that it's underlying programming language is JavaScript, which is right up my alley.</p>
<p>I've decided to merge my two blogs into one, and have copied their content to the new blog. To maintain two blogs when you don't really have the motivation and energy to maintain one wasn't the best idea. It did create a bit of a strange distinction, and one blog should be enough.</p>
<p>All posts that were written elsewhere have been linked to their original URL. The idea is to not introduce another possibility of commenting the posts. &lt;strike&gt;For the new blog system I'm trying out <a href="https://www.spot.im/">Spot.IM</a>.&lt;/strike&gt; I'm sticking with <a href="https://disqus.com">Disqus</a> as the service for commenting (Spot.IM proved to invasive for my taste).</p>
<p>Lastly I've pollished the design a bit. No big changes on the looks of it, but quite big changes under the hood. Some redundant markup was removed in favor of trying out some new CSS standards, namely <a href="http://www.w3.org/TR/css-flexbox-1/">Flexbox</a> and <a href="http://www.w3.org/TR/css-grid-1/">Grid</a>. The latter is probably not available in your browser unless you've turned on experimental features. It also allowed me to try out <a href="https://developer.mozilla.org/en/docs/Web/CSS/@supports">the @supports feature in CSS</a>, so that there are some good fallbacks. The decision to try these new technologies was heavily influenced by <a href="https://24ways.org/2015/grid-flexbox-box-alignment-our-new-system-for-layout/">Rachel Andrews writing on 24 ways</a>.</p>
<p>There are probably quite a bit of flaws, of which some will be fixed, but most will probably be ignored. This is after all my personal webpage, and I have no need to support older browsers.</p>
<p>I do however try to make it as accessible as possible in terms of following the good practices laid out by <a href="http://www.w3.org/WAI/">WAI</a>. My knowledge on this is severely lacking, so I'll take any tips with gratitude.</p>
<p>As you've probably already noticed, I've decided to write my new blog posts in english. This to improve my writing skills, and to make the content be available to a wider audience (for the off-chance that someone will stumble upon this website).</p>
<p>For my next post I'll go deeper into the ideas and choices I've made when coding the new system. <a href="https://twitter.com/megoth">Follow me on Twitter</a> or <a href="http://icanhasweb.net/feed.xml">subscribe to the RSS feed</a> to stay updated.</p>

        </BlogPost>
    )
}