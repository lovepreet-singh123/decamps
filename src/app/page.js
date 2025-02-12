import Achievements from "./Achievements";
import { getAchievements } from "./lib/getAchievements";
import "./page.scss";

export default async function Home() {
    const achievements = await getAchievements(); // Fetch achievements
    console.log('achievements: ', achievements);

    return (
        <div>
            <Achievements />
            {/* <Posts /> */}
            {/* <DynamicSection /> */}
        </div>
    );
}
