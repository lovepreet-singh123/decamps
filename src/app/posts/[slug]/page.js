import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

const postsDirectory = path.join(process.cwd(), "content/posts");

export async function generateStaticParams() {
    if (!fs.existsSync(postsDirectory)) return [];

    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => ({ slug: filename.replace(".md", "") }));
}

export default async function BlogPost({ params }) {
    const filePath = path.join(postsDirectory, `${params.slug}.md`);

    if (!fs.existsSync(filePath)) return notFound();

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{content}</p>
        </div>
    );
}
