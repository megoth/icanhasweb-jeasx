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

const blogPath = path.join('src', 'blog');

try {
    const postNodes = await parseNodes<Post>(blogPath);

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
    const sortedPosts = posts.sort((a, b) => a.date > b.date ? 1 : -1);
    const indexPath = path.join(blogPath, '[index].tsx');
    await writeFile(indexPath, `
import Layout from "../Layout"
import BlogList from "../BlogList"

export default function () {
    return (
        <Layout title="Blog posts">
            <BlogList posts={${JSON.stringify(sortedPosts)}} />
        </Layout>
    )
}`)
} catch (err) {
    console.error(err);
}
