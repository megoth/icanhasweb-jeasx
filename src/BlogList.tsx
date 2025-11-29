import {type Post} from "./scripts/buildBlog";

interface Props {
    posts: Array<Post>
}

export default function BlogList({posts}: Props) {
    const sortedPosts = posts.sort((a, b) => a.date > b.date ? 1 : -1);
    return (
        <ul>
            {sortedPosts.map((post) => (
                <li>
                    <a href={post.url}>{post.title}</a>
                    &nbsp;
                    ({(new Date(post.date)).toLocaleDateString("nb-NO")})
                </li>
            ))}
        </ul>
    )
}