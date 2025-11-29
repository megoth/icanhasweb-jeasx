import path from "node:path";
import {writeFile} from "node:fs/promises";
import {type ContentNode, parseNodes} from "./common";

export interface Project extends ContentNode {
    title: string;
    url: string;
    status?: string;
    project?: string;
    template: string;
    tags: string[];
    original: string;
}

try {
    const projectNodes = await parseNodes<Project>('projects');

    const projectsPath = path.join('src', 'projects');
    await Promise.all(projectNodes.map(async ([project, content]) => {
        const tsxPath = path.join(projectsPath, project.name, '[index].tsx');
        await writeFile(tsxPath, `
import Project from "../../Project"

export default function () {
    return (
        <Project title="${project.title}">
            ${content}
        </Project>
    )
}`)
    }));

    const projects = projectNodes.map(([project, _]) => project);
    const indexPath = path.join(projectsPath, '[index].tsx');
    await writeFile(indexPath, `
import Layout from "../Layout"
import ProjectList from "../ProjectList"

export default function () {
    return (
        <Layout title="Blog posts">
            <ProjectList projects={${JSON.stringify(projects)}} />
        </Layout>
    )
}`)
} catch (err) {
    console.error(err);
}
