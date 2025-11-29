import Layout from "./Layout";
import {type Post} from "./scripts/buildBlog";

interface Props extends Post {
    children: undefined
}

export default function BlogPost({title, children}: Props) {
    return (
        <Layout title={title} description={"description"}>
            <h1>Blog: {title}</h1>
            {children}
        </Layout>
    )
}