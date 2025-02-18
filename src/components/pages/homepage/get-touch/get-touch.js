import React from 'react'
import { Container } from 'react-bootstrap'
import img from '../../../../../public/assets/images/join.png'
import Image from 'next/image'
import { ArrowIcon } from '../../../../../public/assets/icons/icons'

const GetTouch = () => {
    return (
        <section className='get_touch'>
            <Container>
                <div className="get_touch_in">
                    <div className="get_touch_img">
                        <Image src={img} alt="" />
                    </div>
                    <div className="get_touch_content">
                        <h2>Get informed, Stay informed and Don't miss out on New Opportunities</h2>
                        <div className="get_input_sec">
                            <div className='get_input'>
                                <input type="text" placeholder='Enter your email' />
                            </div>
                            <button className='touch_btn'>Get in touch <ArrowIcon /></button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default GetTouch