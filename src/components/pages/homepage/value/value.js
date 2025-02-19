"use client";
import React from 'react';
import { GlobeIcon, PeopleIcon, PlusIcon } from "../../../../../public/assets/icons/icons";
import { Col, Container, Row } from "react-bootstrap";

const Value = () => {

    const data = [
        {
            img: <PeopleIcon />,
            text: "Total investments",
            value: "500K",
        },
        {
            img: <GlobeIcon />,
            text: "Active users",
            value: "100",
        },
        {
            img: <PlusIcon />,
            text: "ROI percentages",
            value: "20%",
        }
    ]

    return (
        <>
            <section className="value">
                <Container>
                    <Row className="value_content">
                        {data.map((item, index) => (
                            <Col xs={12} md={6} lg={4} className="value_content_inner" key={index}>
                                <div className="value_content_inner_text">
                                    <span>{item.img} </span>
                                    <p>{item.text}</p>
                                </div>
                                <h2>{item.value}<span>+</span></h2>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Value;