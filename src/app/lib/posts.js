import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


export async function getAchievements() {
    const achievementsFile = path.join(process.cwd(), 'content/achievements.md');
    const fileContents = fs.readFileSync(achievementsFile, 'utf8');
    const { data } = matter(fileContents);

    return data.achievements || [];
}
