import { getAchievements } from '@/app/lib/getAchievements';
import { Col, Container, Row } from "react-bootstrap";
import { GlobeIcon, PeopleIcon, PlusIcon } from "../../../../../public/assets/icons/icons";
import Image from 'next/image';

const Value =async () => {
    const response = await getAchievements();
    // const data = [
    //     {
    //         img: <PeopleIcon />,
    //         text: "Total investments",
    //         value: "500K",
    //     },
    //     {
    //         img: <GlobeIcon />,
    //         text: "Active users",
    //         value: "100",
    //     },
    //     {
    //         img: <PlusIcon />,
    //         text: "ROI percentages",
    //         value: "20%",
    //     }
    // ]
    // let newData = response.map((item) => {
    //     return {
    //         img: item.image,
    //         text: item.title,
    //         value: item.content,
    //     }
    // })
    
    return (
        <>
            <section className="value">
                <Container>
                    <Row className="value_content">
                        {response.map((item, index) => (
                            <Col xs={12} md={6} lg={4} className="value_content_inner" key={index}>
                                <div className="value_content_inner_text">
                                    {/* <span>{item.image} </span> */}
                                    <Image src={item.image} alt={item.title} width={40} height={40} />
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