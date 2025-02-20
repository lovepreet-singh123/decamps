import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PreviewCard from '../preview-card/preview-card'
import img1 from '../../../../../public/assets/previous-card1.png'
import img2 from '../../../../../public/assets/previous-card2.png'

const PreviousBlogs = () => {
  return (
    <div className='previous_blogs'>
      <h2 className='common_heading'>Previous Blog</h2>
      <Container>
        <Row>
          <Col lg={6}>
            <PreviewCard
            className={"previous_blog_card"}
              image={img1}
              title='¿Qué es la Web3 y por qué facilita las inversiones?'
              description='La evolución digital no se detiene, y en Tokencrowd nos adelantamos al futuro con la web 3.0, la nueva era de Internet que está transformando...'
            />
          </Col>
          <Col lg={6}>
            <PreviewCard
            className={"previous_blog_card"}
              image={img2}
              title='¿Qué es la Web3 y por qué facilita las inversiones?'
              description='La evolución digital no se detiene, y en Tokencrowd nos adelantamos al futuro con la web 3.0, la nueva era de Internet que está transformando...'
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PreviousBlogs
