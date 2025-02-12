// import { getAchievements } from "./lib/posts";
import Achievements from "./Achievements";
import "./page.scss";
import Posts from "./Posts";

export default async function Home() {
    // const achievements = await getAchievements(); // Fetch achievements

    return (
        <div>
            <Achievements />
            <Posts />
            {/* <DynamicSection /> */}
        </div>
    );
}
