import fs from "fs";
import path from "path";
import matter from "gray-matter";

const faqsDir = path.join(process.cwd(), "content/faqs");

export async function getFAQs() {
    try {
        // Check if the directory exists
        if (!fs.existsSync(faqsDir)) {
            console.warn("Faqs directory does not exist.");
            return [];
        }

        const files = fs.readdirSync(faqsDir);

        const faqs = files.map((filename) => {
            const filePath = path.join(faqsDir, filename);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContent);

            return {
                ...data, // Metadata (title, date, etc.)
                content, // Markdown content
                slug: filename.replace(".md", ""), // Extract slug from filename
            };
        });

        return faqs;
    } catch (error) {
        console.error("Error reading faqs:", error);
        return [];
    }
}
