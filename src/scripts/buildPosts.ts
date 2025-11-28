import path from "node:path";
import {lstat, opendir, readFile, writeFile} from "node:fs/promises";
import YAML from 'yaml'

type Post = {
    title: string;
    author: string;
    date: string;
    template: string;
    tags: string[];
    original: string;
}

const postsPath = path.join('src', 'posts');

try {
    const postsDir = await opendir(postsPath);
    for await (const dirent of postsDir) {
        const postDirPath = path.join(postsPath, dirent.name);
        if (!(await lstat(postDirPath)).isDirectory()) {
            continue;
        }
        const markdownPath = path.join(postDirPath, 'index.md');
        const [_, unparsedMeta, ...unparsedContent] = (await readFile(markdownPath, {encoding: 'utf-8'})).split('---')
        const meta = YAML.parse(unparsedMeta) as Post;
        meta.tags = (meta.tags as string)?.split(', ') || [];
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
} catch (err) {
    console.error(err);
}
