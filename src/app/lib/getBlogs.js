import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDir = path.join(process.cwd(), "content/blogs");

export async function getBlogs() {
    try {
        // Check if the directory exists
        if (!fs.existsSync(blogsDir)) {
            console.warn("Blogs directory does not exist.");
            return [];
        }

        const files = fs.readdirSync(blogsDir);

        const blogs = files.map((filename) => {
            const filePath = path.join(blogsDir, filename);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContent);

            return {
                ...data, // Metadata (title, date, etc.)
                content, // Markdown content
                slug: filename.replace(".md", ""), // Extract slug from filename
            };
        });

        return blogs;
    } catch (error) {
        console.error("Error reading blogs:", error);
        return [];
    }
}
