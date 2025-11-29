
import Layout from "../Layout"
import TalkList from "../TalkList"

export default function () {
    return (
        <Layout title="Talks">
            <h1>Talks</h1>
            <p>Here are all projects that I have some association with and that have a public repository.</p>

            <TalkList talks={[{"title":"Introduksjon til JavaScript","author":"arnehass","date":"2013-03-28","template":"talk.pug","tags":["presentation","javascript","impress.js"],"url":"http://pres.icanhasweb.net/tg13-intro/","repository":"https://github.com/megoth/tg13-intro/","name":"tg13-intro","path":"/talks/tg13-intro"},{"title":"Introduction to webpack","author":"arnehass","date":"2015-11-19","template":"talk.pug","tags":["presentation","webpack","javascript","reveal.js"],"url":"http://megoth.github.io/qb-webpack-intro","repository":"https://github.com/megoth/qb-webpack-intro","name":"qb-webpack-intro","path":"/talks/qb-webpack-intro"},{"title":"chatty","author":"arnehass","date":"2014-02-18","template":"talk.pug","tags":["presentation","JavaScript","Node.js","Socket.IO"],"url":"http://megoth-chatty.herokuapp.com/","repository":"https://github.com/megoth/chatty","name":"chatty","path":"/talks/chatty"},{"title":"An introduction to Web Accessability","author":"arnehass","date":"2014-02-18","template":"talk.pug","tags":["presentation","accesability","impress.js"],"url":"http://megoth.github.io/web-accessability-intro","repository":"https://github.com/megoth/web-accessability-intro","name":"web-accessability-intro","path":"/talks/web-accessability-intro"},{"title":"Node.js - JavaScript utenfor nettleseren","author":"arnehass","date":"2013-03-28","template":"talk.pug","tags":["presentation","JavaScript","Node.js","impress.js"],"url":"http://pres.icanhasweb.net/tg13-node/","repository":"https://github.com/megoth/tg13-node/","name":"tg13-node","path":"/talks/tg13-node"},{"title":"An introduction to JavaScript","author":"arnehass","date":"2014-10-14","template":"talk.pug","tags":["presentation","javascript","introduction"],"url":"http://megoth.github.io/jsintro","repository":"https://github.com/megoth/jsintro","name":"jsintro","path":"/talks/jsintro"},{"title":"Building a web app with ES6","author":"arnehass","date":"2015-04-21","template":"talk.pug","tags":["presentation","workshop","javascript","jspm","es6","AngularJS","React","Node.js","Grunt","Socket.IO","Sass","Compass"],"url":"http://es6-presentation.herokuapp.com/","repository":"https://github.com/megoth/es6app","name":"es6app","path":"/talks/es6app"}]} />
        </Layout>
    )
}