import Link from "next/link";
import { getPosts } from "./lib/posts";

export default async function Home() {
    const posts = await getPosts(); // Fetch markdown files

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
