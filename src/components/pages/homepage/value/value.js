import { getAchievements } from '@/app/lib/getAchievements';
import Image from 'next/image';
import { Col, Container, Row } from "react-bootstrap";
import { getAchievements } from "@/app/lib/getAchievements";

const Value = async () => {
    const response = await getAchievements();
    return (
        <>
            <section className="value">
                <Container>
                    <Row className="value_content">
                        {response.map((item, index) => (
                            <Col xs={12} md={6} lg={4} className="value_content_inner" key={index}>
                                <div className="value_content_inner_text">
                                    {/* <span>{item.image} </span> */}
                                    <span><Image src={item.image} alt={item.title} width={40} height={40} /></span>
                                    <p>{item.title}</p>
                                </div>
                                <h2>{item.content}<span>+</span></h2>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Value;