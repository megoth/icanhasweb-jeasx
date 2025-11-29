import {type Project} from "./scripts/buildProjects";

interface Props {
    projects: Array<Project>
}

export default function ProjectList({projects}: Props) {
    return (
        <ul>
            {projects.map((project) => (
                <li>
                    <a href={project.url}>{project.title}</a>
                </li>
            ))}
        </ul>
    )
}