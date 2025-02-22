import Commonbtn from '@/components/common/commonbtn/commonbtn'
import React from 'react'
import { Container } from 'react-bootstrap'

const Roi = () => {
    return (
        <section className="roi_design">
            <Container>
                <div className="design_in">
                    <h2>20<span>%</span></h2>
                    <div>
                        <h3>Project <span>ROI</span> Per Year </h3>
                        <Commonbtn text="Get Started" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Roi
