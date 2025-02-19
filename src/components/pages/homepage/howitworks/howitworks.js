import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import account from '../../../../../public/assets/account.svg';
import rocket from '../../../../../public/assets/dollar-rocket.svg';
import rewards from '../../../../../public/assets/rewards.svg';
import Image from 'next/image';


const Howitworks = () => {
    const rewardcard = [
        {
            img: account,
            step: "Step 1",
            title: "Create an account",
            description: "Simply sign up and get access to a world of opportunity, we are here to help and support you.",
        },
        {
            img: rocket,
            step: "Step 2",
            title: "Choose a property you Love",
            description: "Be quick! Some properties are snapped up quickly. Diversify by choosing multiple properties",
            className: "rocket_box"
        },
        {
            img: rewards,
            step: "Step 3",
            title: "Enjoy the rewards",
            description: "You can invest in any currency you want, when you receive your property tokens you will be rewarded like the mogul you are",
            className: "rocket_box"
        }
    ]
    return (
        <section className='howit_works'>
            <Container>
                <div className='heading'>
                    <h2>How it works</h2>
                    <h4>As simple as 1,2 and 3</h4>
                </div>
                <div className='inner_wrap'>
                    <Row className='justify-content-center'>
                        {rewardcard.map((data, i) => (
                            <Col lg={4} sm={6} xs={12} key={i} className={`mb-5 mb-lg-0 box ${data.className || ""}`}>
                                <div className='wrap_card'>
                                    <Image src={data.img} alt="sign up" />
                                    <div className='wrap_data'>
                                        <h6>{data.step}</h6>
                                        <h4>{data.title}</h4>
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <button>Sign me up </button>
                </div>
            </Container>
        </section>
    )
}

export default Howitworks
