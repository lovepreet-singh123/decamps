"use client";
import React from 'react';
import Slider from "react-slick";
import Explorecard from "./explore-card/explore-card";
import { Container } from "react-bootstrap";

const Explore = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '50px',
        autoplay: true,
    };

    const data = [
        {
            heading: "Premium Office Tower",
            position: "Active",
            description: "Grade A office building located in prime business district with stable rental income.",
            invest: "$50k",
            yield: "100%",
            nav: "$1.00",
            date: "July 05, 2025"
        },
        {
            heading: "Premium Office Tower",
            position: "Active",
            description: "Grade A office building located in prime business district with stable rental income.",
            invest: "$50k",
            yield: "100%",
            nav: "$1.00",
            date: "July 05, 2025"
        },
        {
            heading: "Premium Office Tower",
            position: "Active",
            description: "Grade A office building located in prime business district with stable rental income.",
            invest: "$50k",
            yield: "100%",
            nav: "$1.00",
            date: "July 05, 2025"
        },
        {
            heading: "Premium Office Tower",
            position: "Active",
            description: "Grade A office building located in prime business district with stable rental income.",
            invest: "$50k",
            yield: "100%",
            nav: "$1.00",
            date: "July 05, 2025"
        },
        {
            heading: "Premium Office Tower",
            position: "Active",
            description: "Grade A office building located in prime business district with stable rental income.",
            invest: "$50k",
            yield: "100%",
            nav: "$1.00",
            date: "July 05, 2025"
        },
        // {
        //     heading: "Premium Office Tower",
        //     position: "Active",
        //     description: "Grade A office building located in prime business district with stable rental income.",
        //     invest: "$50k",
        //     yield: "100%",
        //     nav: "$1.00",
        //     date: "July 05, 2025"
        // },
        // {
        //     heading: "Premium Office Tower",
        //     position: "Active",
        //     description: "Grade A office building located in prime business district with stable rental income.",
        //     invest: "$50k",
        //     yield: "100%",
        //     nav: "$1.00",
        //     date: "July 05, 2025"
        // },
    ]

    return (
        <>
            <div className="explore">
                <Container>
                    <h2>Explore our outstanding opportunities of Real Estate Investment</h2>
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index}>
                                <Explorecard heading={item.heading} position={item.position} description={item.description} invest={item.invest}
                                    yield={item.yield} nav={item.nav} date={item.date} />
                            </div>
                        ))}
                    </Slider>

                </Container>
            </div>
        </>
    );
};

export default Explore;