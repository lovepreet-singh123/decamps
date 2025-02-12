import fs from "fs";
import path from "path";
import matter from "gray-matter";

const sectionsDirectory = path.join(process.cwd(), "content/sections");

export async function getSections() {
    // Ensure the directory exists
    if (!fs.existsSync(sectionsDirectory)) {
        console.error(`Directory not found: ${sectionsDirectory}`);
        return [];
    }

    const fileNames = fs.readdirSync(sectionsDirectory);

    return fileNames
        .filter((fileName) => fileName.endsWith(".md")) // Ensure only Markdown files
        .map((fileName) => {
            const fullPath = path.join(sectionsDirectory, fileName);

            // Ensure the file exists before reading
            if (!fs.existsSync(fullPath)) {
                console.error(`File not found: ${fullPath}`);
                return null;
            }

            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug: fileName.replace(/\.md$/, ""),
                ...data,
                content,
            };
        })
        .filter(Boolean); // Remove any null values if a file was missing
}
