
import BlogPost from "../../BlogPost"

export default function () {
    return (
        <BlogPost title="Vitamins">
            <p>About a year ago, <a href="http://sblattindesign.wordpress.com/">S.B.LattinDesign</a> posted a really cool infographic named <a href="http://sblattindesign.wordpress.com/2012/01/04/supplemental/">More Than Supplemental</a>.</p>
<p>I found it about a month ago, and I really liked it! In fact, I liked it so much I wanted to make an interactive version of it, and <a href="http://icanhasweb.net/vis/vitamins/">Supplemental Interactive</a> is the result. It isn’t quite finished yet (e.g. I want to include icons instead of abbreviations), but I believe my vision is communicated. It is available in multiple screen sizes (using RWD), but in my opinion is best utilized on wide screens.</p>
<p>I used a set of tools to make it: <a href="http://d3js.org/">D3.js</a> to visualize the data, <a href="http://jquery.com/">jQuery</a> to ease DOM-handling, <a href="http://underscorejs.org/">Underscore</a> for utility functions, <a href="http://sass-lang.com/">Sass</a> as CSS-preprocessor, <a href="http://compass-style.org/">Compass</a> for extra mixins, <a href="http://twitter.github.com/bootstrap/">Bootstrap</a> for some good markup-handling, and <a href="http://busterjs.org/">Buster.JS</a> to test the JavaScript. All of the code is available at <a href="https://github.com/megoth/vitamins">GitHub</a>.</p>
<p>Hope you like it! ^_^</p>

        </BlogPost>
    )
}