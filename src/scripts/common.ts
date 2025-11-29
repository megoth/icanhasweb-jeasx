import {lstat, opendir, readFile} from "node:fs/promises";
import path from "node:path";
import YAML from "yaml";
import {Project} from "./buildProjects";
import markdownit from "markdown-it";

// cache this as global singleton
const md = markdownit();

export interface ContentNode {
    name: string;
}

export async function parseNodes<T extends ContentNode>(nodesName: string): Promise<Array<[T, string]>> {
    const nodesPath = path.join('src', nodesName)
    const nodesDir = await opendir(nodesPath);
    const nodes = [] as Array<[T, string]>;
    for await (const dirent of nodesDir) {
        const projectDirPath = path.join(nodesPath, dirent.name);
        if (!(await lstat(projectDirPath)).isDirectory()) {
            continue;
        }
        const markdownPath = path.join(projectDirPath, 'index.md');
        const [_, unparsedMeta, ...unparsedContent] = (await readFile(markdownPath, {encoding: 'utf-8'})).split('---')
        const meta = YAML.parse(unparsedMeta) as Project;
        meta.name = dirent.name;
        meta.tags = (meta.tags as string)?.split(', ') || [];
        meta.url = `/${nodesName}/${dirent.name}`;
        const assembledContent = unparsedContent.join('---');
        const isHtmlRegex = /^(\s+)</;
        const content = isHtmlRegex.test(assembledContent) ? assembledContent : md.render(assembledContent);
        nodes.push([meta, content]);
    }
    return nodes;
}