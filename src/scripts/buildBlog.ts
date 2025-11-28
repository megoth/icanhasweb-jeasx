import path from "node:path";
import {lstat, opendir, readFile, writeFile} from "node:fs/promises";
import YAML from 'yaml'

export type Post = {
    title: string;
    url: string;
    author: string;
    date: string;
    template: string;
    tags: string[];
    original: string;
}

const postsPath = path.join('src', 'blog');

try {
    const postsDir = await opendir(postsPath);
    const posts = [] as Array<Post>;
    for await (const dirent of postsDir) {
        const postDirPath = path.join(postsPath, dirent.name);
        if (!(await lstat(postDirPath)).isDirectory()) {
            continue;
        }
        const markdownPath = path.join(postDirPath, 'index.md');
        const [_, unparsedMeta, ...unparsedContent] = (await readFile(markdownPath, {encoding: 'utf-8'})).split('---')
        const meta = YAML.parse(unparsedMeta) as Post;
        meta.tags = (meta.tags as string)?.split(', ') || [];
        meta.url = `/blog/${dirent.name}`;
        posts.push(meta);
        const content = unparsedContent.join('---');
        const tsxPath = path.join(postDirPath, '[index].tsx');
        await writeFile(tsxPath, `
import BlogPost from "../../BlogPost"

export default function () {
    return (
        <BlogPost title="${meta.title}">
            ${content}
        </BlogPost>
    )
}`)
    }
    const sortedPosts = posts.sort((a, b) => a.date > b.date ? 1 : -1);
    const indexPath = path.join(postsPath, '[index].tsx');
    await writeFile(indexPath, `
import Layout from "../Layout"
import PostList from "../PostList"

export default function () {
    return (
        <Layout title="Blog posts">
            <PostList posts={${JSON.stringify(sortedPosts)}} />
        </Layout>
    )
}`)
} catch (err) {
    console.error(err);
}
