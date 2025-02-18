"use client";
import React from 'react';
import { GlobeIcon, PeopleIcon, PlusIcon } from "../../../../../public/assets/icons/icons";
import { Container } from "react-bootstrap";

const Value = () => {

    const data = [
        {
            img: <PeopleIcon />,
            text: "Total investments",
            value: "500K+",
        },
        {
            img: <GlobeIcon />,
            text: "Active users",
            value: "100+",
        },
        {
            img: <PlusIcon />,
            text: "ROI percentages",
            value: "20%+",
        }
    ]

    return (
        <>
            <section className="value">
                <Container>
                    <div className="value_content">
                        {data.map((item, index) => (
                            <div className="value_content_inner" key={index}>
                                <div className="value_content_inner_text">
                                    <span>{item.img} </span>
                                    <p>{item.text}</p>
                                </div>
                                <h2>{item.value}</h2>+
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Value;