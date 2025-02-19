import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import invest from '../../../../../public/assets/invest.png'
import partner from '../../../../../public/assets/partner.png'
import invest_fund from '../../../../../public/assets/token-invest.png'
import key from '../../../../../public/assets/key.png'
import fund from '../../../../../public/assets/fund.png'
import project from '../../../../../public/assets/projected.png'


const Tokenization = () => {
    return (
        <section className='tokenization'>
            <Container>
                <h2 className='common_heading'>Our Real Estate Tokenization Platform</h2>
                <div className='token_in'>
                    <Row>
                        <Col lg={6} xl={6}>
                            <div className="token_card">
                                <div className='card_info'>
                                    <h3>Simplicity</h3>
                                    <p>Investing in property is now as easy as shopping online. It’s more secure  because we are built on the blockchain.</p>
                                </div>
                                <Image src={invest} alt="invest-img" />
                            </div>
                        </Col>
                        <Col lg={6} xl={3}>
                            <div className="token_card partner">
                                <div className='card_info'>
                                    <h3>Trusted partners </h3>
                                    <p>We find the opportunity, we tokenise, we manage and you benefit from the yield generated by the Real World Asset</p>
                                </div>
                                <Image src={partner} alt="partner-img" />
                            </div>
                        </Col>
                        <Col lg={6} xl={3}>
                            <div className="token_card">
                                <div className='card_info'>
                                    <h3>How Much? You decide</h3>
                                    <p>You can invest from as little as 50$ in an opportunity, building your portfolio over time and according to your circumstances.</p>
                                </div>
                                <Image src={invest_fund} alt="invest_fund-img" className='how_decide' />
                            </div>
                        </Col>
                        <Col lg={6} xl={3}>
                            <div className="token_card key">
                                <div className='card_info'>
                                    <h3>Diversification
                                        is Key</h3>
                                    <p>Balance your portfolio across borders and investment types, from new builds to existing stock, you choose what is right for you to your investments while reducing risks              </p>
                                </div>
                                <Image src={key} alt="key-img" />
                            </div>
                        </Col>
                        <Col lg={6} xl={6}>
                            <div className="token_card fund">
                                <div className='card_info'>
                                    <h3>Crowd Funded</h3>
                                    <p>Blockchain technology enables the evolution of crowd funding, you will be part of something bigger than yourself </p>
                                </div>
                                <Image src={fund} alt="fund-img" />
                            </div>
                        </Col>
                        <Col lg={6} xl={3}>
                            <div className="token_card projected">
                                <div className='card_info'>
                                    <h3>Projected Yeild</h3>
                                    <p>20%/Year</p>
                                </div>
                                <Image src={project} alt="project-img" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Tokenization
