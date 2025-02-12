import { Col, Row } from "react-bootstrap";
// import { getAchievements } from "./lib/posts";
import "./page.scss";

export default async function Home() {
    // const achievements = await getAchievements(); // Fetch achievements

    return (
        <div>
            <section className="achieve">
                <div className="container">
                    <div className="content">
                        <Row>
                            {/* {achievements.map((achievement, index) => (
                                <Col md={4} key={index}>
                                    <h2>{achievement.value}</h2>
                                </Col>
                            ))} */}
                        </Row>
                    </div>
                </div>
            </section>
        </div>
    );
}
