
import BlogPost from "../../BlogPost"

export default function () {
    return (
        <BlogPost title="Some updates to I Can Has Web">
            <p>I've been vacationing at my parents home in Risør, and finally found some time to update this webpage.
As part of my work on <a href="https://solidproject.org/">the Solid project</a> at <a href="https://inrupt.com/">inrupt</a> I've become more
aware of privacy issues, amongst them the unnecessary exposure to tracking by services that I used (Google Analytics,
Google Fonts, and Disqus). (There are more good reasons to drop Disqus, as
<a href="https://indieweb.org/Disqus#Criticism">listed at Indieweb</a>.)</p>
<p>Upon starting to do this, I also realized I needed to upgrade my dependencies, and clean up some of the tools. (Ain't
it typical...) But all in all it took me a couple of hours, and now it should all work nicely. If you find any issues,
<a href="https://github.com/megoth/icanhasweb/issues">please let me know</a>.</p>

        </BlogPost>
    )
}