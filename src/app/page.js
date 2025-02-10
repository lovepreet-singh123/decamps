import fs from "fs";
import path from "path";
import Link from "next/link";

export default async function Home() {
    const postsDir = path.join(process.cwd(), "content/posts");
    const files = fs.readdirSync(postsDir);
    const posts = files.map((file) => file.replace(".md", ""));

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((slug) => (
                    <li key={slug}>
                        <Link href={`/posts/${slug}`}>{slug}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
