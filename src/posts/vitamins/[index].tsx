
import BlogPost from "../../BlogPost"

export default function () {
    return (
        <BlogPost title="Vitamins">
            

About a year ago, [S.B.LattinDesign](http://sblattindesign.wordpress.com/) posted a really cool infographic named [More Than Supplemental](http://sblattindesign.wordpress.com/2012/01/04/supplemental/).

I found it about a month ago, and I really liked it! In fact, I liked it so much I wanted to make an interactive version of it, and [Supplemental Interactive](http://icanhasweb.net/vis/vitamins/) is the result. It isn’t quite finished yet (e.g. I want to include icons instead of abbreviations), but I believe my vision is communicated. It is available in multiple screen sizes (using RWD), but in my opinion is best utilized on wide screens.

I used a set of tools to make it: [D3.js](http://d3js.org/) to visualize the data, [jQuery](http://jquery.com/) to ease DOM-handling, [Underscore](http://underscorejs.org/) for utility functions, [Sass](http://sass-lang.com/) as CSS-preprocessor, [Compass](http://compass-style.org/) for extra mixins, [Bootstrap](http://twitter.github.com/bootstrap/) for some good markup-handling, and [Buster.JS](http://busterjs.org/) to test the JavaScript. All of the code is available at [GitHub](https://github.com/megoth/vitamins).

Hope you like it! ^\_^

        </BlogPost>
    )
}