import { Col, Row } from "react-bootstrap";
// import { getAchievements } from "./lib/posts";
import "./page.scss";
import DynamicSection from "./DynamicSection";

export default async function Home() {
    // const achievements = await getAchievements(); // Fetch achievements

    return (
        <div>
            <DynamicSection />
        </div>
    );
}
