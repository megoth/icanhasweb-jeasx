import Layout from "./Layout";

interface Props {
    children: undefined
    title: string;
    author: string;
    date: string;
    template: string;
    tags: string[];
    original: string;
    html: string;
}

export default function BlogPost({title, children}: Props) {
    return (
        <Layout title={title} description={"description"}>
            {children}
        </Layout>
    )
}