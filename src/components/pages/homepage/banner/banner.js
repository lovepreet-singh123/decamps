import React from 'react';
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import banner from '../../../../../public/assets/banner.png';
import trust from "../../../../../public/assets/trust.png";
import Commonbtn from "@/components/common/commonbtn/commonbtn";

const Banner = () => {
    return (
        <>
            <div className="banner">
                <Row>
                    <Col md={12} lg={6}>
                        <div className="banner-left">
                            <div className="banner-left-text">
                                <h1><span>Build Your</span> Real Estate Portfolio</h1>
                                <p>
                                    today for your future tomorrow
                                </p>
                                <h6>Our Crowdfunding 3.0 platform enables you to  start building your digital wealth through fractional , frictionless investing</h6>
                            </div>
                            <span className="trust"><Image src={trust} alt="trust_img" /></span>
                            <Commonbtn text="Start Earning from $50" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="banner-right">
                            <Image src={banner} alt="banner_img" />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Banner;