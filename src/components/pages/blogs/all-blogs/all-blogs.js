import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../../../../../public/assets/recent-blog1.png'
import img2 from '../../../../../public/assets/recent-blog2.png'
import img3 from '../../../../../public/assets/recent-blog3.png'
import img4 from '../../../../../public/assets/recent-blog4.png'

import BlogCard from '../blog-card/blog-card'
import Commonbtn from '@/components/common/commonbtn/commonbtn'
const AllBlogs = () => {
    const AllBlogs = [
        {
            title: 'Explorando las Finanzas Descentralizadas',
            image: img1
        },
        {
            title: 'Explorando las Finanzas Descentralizadas',
            image: img2
        },
        {
            title: 'Explorando las Finanzas Descentralizadas',
            image: img3
        },
        {
            title: 'Explorando las Finanzas Descentralizadas',
            image: img4
        },
        {
            title: 'Explorando las Finanzas Descentralizadas',
            image: img1
        },
        {
            title: 'Explorando las Finanzas Descentralizadas',
            image: img2
        },
        {
            title: 'Explorando las Finanzas Descentralizadas',
            image: img3
        },
        {
            title: 'Explorando las Finanzas Descentralizadas',
            image: img4
        }
    ]
    return (
        <div className='all_blogs'>
            <h2 className='common_heading'>All Blogs</h2>
            <Container>
                <Row>
                    {
                        AllBlogs.map((blog, index) => (
                            <Col lg={6} key={index}>
                                <BlogCard title={blog.title} image={blog.image} />
                            </Col>
                        ))
                    }
                </Row>
                <button className='load_more_btn'>
                    Load More
                </button>
            </Container>

        </div>
    )
}

export default AllBlogs
