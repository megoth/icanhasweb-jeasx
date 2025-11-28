import type {Post} from "./scripts/buildBlog";

interface Props {
    posts: Array<Post>
}

export default function PostList({posts}: Props) {
    return (
        <ul>
            {posts.map((post) => (
                <li>
                    <a href={post.url}>{post.title}</a>
                    &nbsp;
                    ({(new Date(post.date)).toLocaleDateString("nb-NO")})
                </li>
            ))}
        </ul>
    )
}