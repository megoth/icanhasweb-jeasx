import Layout from "./Layout";
import {type Project} from "./scripts/buildProjects";

interface Props extends Project {
    children: undefined
}

export default function Talk({title, children}: Props) {
    return (
        <Layout title={title} description={"description"}>
            <h1>Talk: {title}</h1>
            {children}
        </Layout>
    )
}