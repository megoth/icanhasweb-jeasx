import Layout from "./Layout";
import {type Project} from "./scripts/buildProjects";

interface Props extends Project {
    children: undefined
}

export default function Project({title, children}: Props) {
    return (
        <Layout title={title} description={"description"}>
            <h1>Project: {title}</h1>
            {children}
        </Layout>
    )
}