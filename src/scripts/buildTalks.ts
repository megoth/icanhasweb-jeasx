import path from "node:path";
import {writeFile} from "node:fs/promises";
import {type ContentNode, parseIndex, parseNodes} from "./common";

export interface Talk extends ContentNode {
    title: string;
    date: string;
    template: string;
    path: string;
    repository: string;
}

try {
    const talkNodes = await parseNodes<Talk>('talks');

    const talksPath = path.join('src', 'talks');
    await Promise.all(talkNodes.map(async ([talk, content]) => {
        const tsxPath = path.join(talksPath, talk.name, '[index].tsx');
        await writeFile(tsxPath, `
import Talk from "../../Talk"

export default function () {
    return (
        <Talk title="${talk.title}">
            ${content}
        </Talk>
    )
}`)
    }));

    const talks = talkNodes.map(([project, _]) => project);
    const [_, indexContent] = await parseIndex('projects');
    const indexPath = path.join(talksPath, '[index].tsx');
    await writeFile(indexPath, `
import Layout from "../Layout"
import TalkList from "../TalkList"

export default function () {
    return (
        <Layout title="Talks">
            <h1>Talks</h1>
            ${indexContent}
            <TalkList talks={${JSON.stringify(talks)}} />
        </Layout>
    )
}`)
} catch (err) {
    console.error(err);
}
