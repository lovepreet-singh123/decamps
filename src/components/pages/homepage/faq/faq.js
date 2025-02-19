"use client";
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    const data = [
        {
            ques: "Alternative Financing",
            ans: "TokenCrowds Tokenization solution is revolutionizing alternative financing, offering a practical and increasingly viable solution for the real estate sector, particularly for housing developers, by operating outside traditional banking systems",
        },
        {
            ques: "Specialized Knowledge",
            ans: "TokenCrowds Tokenization solution is revolutionizing alternative financing, offering a practical and increasingly viable solution for the real estate sector, particularly for housing developers, by operating outside traditional banking systems",
        },
        {
            ques: "Diversification",
            ans: "TokenCrowds Tokenization solution is revolutionizing alternative financing, offering a practical and increasingly viable solution for the real estate sector, particularly for housing developers, by operating outside traditional banking systems",
        },
        {
            ques: "Technology",
            ans: "TokenCrowds Tokenization solution is revolutionizing alternative financing, offering a practical and increasingly viable solution for the real estate sector, particularly for housing developers, by operating outside traditional banking systems",
        },
        {
            ques: "Compliance",
            ans: "TokenCrowds Tokenization solution is revolutionizing alternative financing, offering a practical and increasingly viable solution for the real estate sector, particularly for housing developers, by operating outside traditional banking systems",
        },
        {
            ques: "Speed",
            ans: "TokenCrowds Tokenization solution is revolutionizing alternative financing, offering a practical and increasingly viable solution for the real estate sector, particularly for housing developers, by operating outside traditional banking systems",
        },
    ]
    return (
        <section className='faq_sec'>
            <Container>
                <div className='heading'>
                    <h4>Token Crowd</h4>
                    <h2>What makes us different</h2>
                </div>
                <div className='faq_in'>
                    <Accordion defaultActiveKey="0">
                        <Row>
                            <Col xl={6}>
                                {data.slice(0, data.length / 2).map((item, index) => (
                                    <Accordion.Item
                                        className="accordion_data"
                                        eventKey={item.ques}
                                        key={item.ques}
                                    >
                                        <Accordion.Header>
                                            <p>
                                                {item.ques}
                                            </p>
                                        </Accordion.Header>
                                        <Accordion.Body>{item.ans}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Col>
                            <Col xl={6}>
                                {data.slice(data.length / 2).map((item, index) => (
                                    <Accordion.Item
                                        className="accordion_data"
                                        eventKey={item.ques}
                                        key={item.ques}
                                    >
                                        <Accordion.Header>
                                            <p>
                                                {item.ques}
                                            </p>
                                        </Accordion.Header>
                                        <Accordion.Body>{item.ans}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Col>
                        </Row>

                    </Accordion>
                </div>
            </Container>
        </section>
    )
}

export default Faq
