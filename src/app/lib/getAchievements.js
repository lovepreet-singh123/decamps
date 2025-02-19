import fs from "fs";
import path from "path";
import matter from "gray-matter";

const achievementsDir = path.join(process.cwd(), "content/achievements");

export async function getAchievements() {
    try {
        // Check if the directory exists
        if (!fs.existsSync(achievementsDir)) {
            console.warn("Achievements directory does not exist.");
            return [];
        }

        const files = fs.readdirSync(achievementsDir);

        const achievements = files.map((filename) => {
            const filePath = path.join(achievementsDir, filename);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContent);

            return {
                ...data, // Metadata (title, date, etc.)
                content, // Markdown content
                slug: filename.replace(".md", ""), // Extract slug from filename
            };
        });

        return achievements;
    } catch (error) {
        console.error("Error reading achievements:", error);
        return [];
    }
}
