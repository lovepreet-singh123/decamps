"use client";
import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const FaqAccordions = ({ data }) => {
    return (
        <Accordion defaultActiveKey="0">
            <Row>
                <Col xl={6}>
                    {data.slice(0, data.length / 2).map((item, index) => (
                        <Accordion.Item
                            className="accordion_data"
                            eventKey={index}
                            key={index}
                        >
                            <Accordion.Header>
                                <p>
                                    {item.title}
                                </p>
                            </Accordion.Header>
                            <Accordion.Body>{item.content}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Col>
                <Col xl={6}>
                    {data.slice(data.length / 2).map((item, index) => (
                        <Accordion.Item
                            className="accordion_data"
                            eventKey={index}
                            key={index}
                        >
                            <Accordion.Header>
                                <p>
                                    {item.title}
                                </p>
                            </Accordion.Header>
                            <Accordion.Body>{item.content}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Col>
            </Row>

        </Accordion>
    )
}

export default FaqAccordions