
import BlogPost from "../../BlogPost"

export default function () {
    return (
        <BlogPost title="Thoughts on decentralized social media">
            <p>Lately I've been researching the decentralized social media-scene, with projects such as <a href="https://diasporafoundation.org/">diaspora*</a>, <a href="https://github.com/solid">Solid</a>, <a href="http://friendica.com/">friendica</a>, <a href="https://github.com/redmatrix/hubzilla">Hubzilla</a>, and <a href="http://akasha.world/">Akasha</a> (and a couple of other blockchain-based technologies that I won't mention).</p>
<p>The scene has great potential that can resolve in great services/tools, but I don't think it's quite <em>there</em> yet with regards to adoption by the masses. Right now it's for those with specific interests in decentralized technologies in general, not so much for those simply wanting an alternative to centralized social media such as <a href="https://www.facebook.com/">Facebook</a> and <a href="https://twitter.com/">Twitter</a>.</p>
<p>In this article I want to share my thoughts on what such an alternative should entail, and what benefits and challenges we look at.</p>
<p>(If it is not obvious; these are my thoughts and ideas, and they are far from complete. I'm eager to learn more, and invite you to a productive conversation in the <a href="#disqus_thread">comments</a> or other places of your choice where a productive discussion can be facilitated.)</p>
<p>I'm going to use decentralized social media (DSM) as the working term throughout this article, as I want to emphasize the role it needs to fill: an alternative to the centralized social media (CSM). Other related terms are decentralized social networks, decentralized web applications, and decentralized web communities.</p>
<h2>The platform</h2>
<p>The beforementioned projects are all doing a lot of great work, and I hope to be able to dive more into them and get to know their specifics. But from what I've been able to gather, they're not fulfilling all of the features for decentralized social media as a platform to be successful.</p>
<p>These are (in order of importance):</p>
<ol>
<li><strong>Intellectual property:</strong> Users own their data (services make use of the data after gaining access by users),</li>
<li><strong>Content management:</strong> Tools that allow users to manage access to their data, presented in intuitive and smart ways,</li>
<li><strong>Linked data:</strong> A standardized format for metadata to be exchanged across networks and services,</li>
<li><strong>Monetization:</strong> Strategies for monetization for data facilitators, data aggregators, and content producers, and</li>
<li><strong>Network effect:</strong> The success of all social platforms are dependendent of the number of users connected to the network.</li>
</ol>
<p>Until these features are in place, we won't have a successful platform for decentralized social media.</p>
<h3>Intellectual property</h3>
<p>Content created by users should belong to them. The ideal situation would be for users to control personal data hubs, but for users without the means to do this it should be possible to have their data facilitated by the services themselves.</p>
<p>As individuals have ownership of their data, distributors should have ownership of the content they provide as well. But annotations created by users should belong to the users. If distributors are interested in the annotations, deals should be set up so that microtransactions or discounted content can be offered.</p>
<p>When it comes to unauthorized distribution of content it becomes a bit more tricky. I'll talk about this in the next section and in the section on <a href="#digitial-rights-management">Digital Rights Management</a>.</p>
<h3>Content management</h3>
<p>In line with users owning their data, they should also be able to control access. The level of control needs to be easy and intuitive to handle, and smart guidelines and rules offered so that users can have full confidence that only the parties they've accepted gets access to their data.</p>
<p>I do not know how this should look, but an idea is that rules can be broken into three parts: &quot;(service) can access (domain of data) (a number of times or interval)&quot;. Whenever a service requires access the user is prompted to define this rule. The better the level of access, the higher the risk should be communicated to the user, and made sure that they trust this service. But when it comes down to it, this is about trust, which I'll talk about in the section on <a href="#trust">Trust</a>.</p>
<h3>Linked data</h3>
<h3>Monetization</h3>
<h3>Network effect</h3>
<h2>Benefits</h2>
<p>If we are able to build a platform that faciliates decentralized social media, I think there are plenty of benefits that we may reap.</p>
<h3>Ownership</h3>
<p>The greatest benefit of decentralized social media is - in my view - the possibility of allowing users full ownership of their data. Although Facebook allows you to backup your data, and in that sense extract data from their services, it is part of their <a href="https://www.facebook.com/terms">terms of service</a> that “you grant [Facebook] a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use any IP content that you post on or in connection with Facebook”, meaning everything you put on their services can be distributed and used throughout their services (until you delete it).</p>
<p>There is also the problem that once you backup your data from services such as Facebook, it is very difficult to upload it to another service and make use of it in useful ways.</p>
<p>Decentralized social media should be made with the assumption that users own the content they post, and that they can manage it as they prefer, meaning:</p>
<ul>
<li>A user can move their content whenever they want,</li>
<li>If a user moves their content to another service, the service should offer the possibility of redirecting subscribers of the users to the new service (so that connections facilitated via the service are not broken; this should be compensated somehow, but not with such a cost that a user effectively gets locked to that service),</li>
<li>Anyone should be able to host servers that facilitates the content (i.e. they take full responsibility for the security and privacy of that content).</li>
</ul>
<h3>Monetization</h3>
<p>Ownership of data is also a problem for all content generators/facilitators (such as news outlets, publications, music artists, photographers, etc) that cannot use Facebook as a distribution channel for paid content. This is not a problem unique to Facebook, it's a problem with all social media that gets it revenue primarily from advertisements. After all, the main focus for these services is to gather data on their users so that they present advertisements to them.</p>
<p>Now, don't misunderstand, I have no problem with services that generate their income from advertisements. I just wish they did it in such a way that didn't take away ownership of data away from their audience. A better, more honest approach to this, would be that advertisers <em>asked</em> their audience for the data needed to present ads that may be relevant to them. This approach would allow audiences to better administrate what content they wish to share, and maybe even allow for transactions to take place (i.e. advertisers paying for the privilege of access to your data). These transactions could of course be handled so that a consumer would access a service by allowing that service access to (parts of) their data, and in that way declare quid pro quo. (An argument could be made that this is what Facebook is in practice doing today - an argument I would agree to if users had a greater understanding of what terms they agree to as they post content.)</p>
<h3>Personal use</h3>
<p>...</p>
<p>There is personal data that may not be moved so easily, either for the sake of the users privacy or because society cannot allow users to control access to that data, examples being medical data and criminal records. But this data may also be highly relevant for users to have personal access to, e.g. utilizing agents to alleviate aspects of their lives (e.g. a technical system that taps into users food-consumption and toilet usage to serve as a &quot;personal doctor&quot;, and that needs the medical history to look for certain risk factors). In this cases governments should facilitate the data but allow personal access via highly secure channels/APIs. In turn the governments require that these agents adhere to certain rules/laws, and that their users privacy is protected.</p>
<h3>Science</h3>
<h2>Challenges</h2>
<h3>Digitial rights management</h3>
<h3>Security</h3>
<h3>Trust</h3>
<h3>Censorship</h3>
<h3>Harassment</h3>
<h3>Spam</h3>
<h3>Scams</h3>

        </BlogPost>
    )
}