import {lstat, opendir, readFile} from "node:fs/promises";
import path from "node:path";
import YAML from "yaml";
import markdownit from "markdown-it";

// cache this as global singleton
const MARKDOWN = markdownit();

async function parseFile(markdownPath: string) {
    const [_, unparsedMeta, ...unparsedContent] = (await readFile(markdownPath, {encoding: 'utf-8'})).split('---')
    const meta = YAML.parse(unparsedMeta);
    const assembledContent = unparsedContent.join('---');
    return [meta, assembledContent];
}

export async function parseIndex(nodesName: string) {
    const markdownPath = path.join('src', nodesName, 'index.md');
    const [meta, assembledContent] = await parseFile(markdownPath);
    const content = MARKDOWN.render(assembledContent);
    return [meta, content];
}

export interface ContentNode {
    name: string;
    url: string;
    tags?: string[];
}

const IS_HTML_REGEX = /^(\s+)</;

export async function parseNode<T extends ContentNode>(nodesName: string, name: string): Promise<[T, string]> {
    const markdownPath = path.join('src', nodesName, name, 'index.md');
    const [meta, assembledContent] = await parseFile(markdownPath);
    meta.name = name;
    meta.url = `/${nodesName}/${name}`;
    meta.tags = (meta.tags as string)?.split(', ') || [];
    const content = IS_HTML_REGEX.test(assembledContent) ? assembledContent : MARKDOWN.render(assembledContent);
    return [meta, content];
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
        nodes.push(await parseNode(nodesName, dirent.name));
    }
    return nodes;
}