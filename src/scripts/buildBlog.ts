import path from "node:path";
import {writeFile} from "node:fs/promises";
import {type ContentNode, parseNodes} from "./common";

export interface Post extends ContentNode {
    title: string;
    url: string;
    author: string;
    date: string;
    template: string;
    tags: string[];
    original: string;
}

try {
    const postNodes = await parseNodes<Post>('blog');

    const blogPath = path.join('src', 'blog');
    await Promise.all(postNodes.map(async ([post, content]) => {
        const tsxPath = path.join(blogPath, post.name, '[index].tsx');
        await writeFile(tsxPath, `
import BlogPost from "../../BlogPost"

export default function () {
    return (
        <BlogPost title="${post.title}">
            ${content}
        </BlogPost>
    )
}`)
    }));

    const posts = postNodes.map(([post, _]) => post);
    const indexPath = path.join(blogPath, '[index].tsx');
    await writeFile(indexPath, `
import Layout from "../Layout"
import BlogList from "../BlogList"

export default function () {
    return (
        <Layout title="Blog posts">
            <BlogList posts={${JSON.stringify(posts)}} />
        </Layout>
    )
}`)
} catch (err) {
    console.error(err);
}
