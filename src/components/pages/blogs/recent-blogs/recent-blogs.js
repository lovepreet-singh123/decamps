import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../../../../../public/assets/recent-blog1.png'
import img2 from '../../../../../public/assets/recent-blog2.png'
import img3 from '../../../../../public/assets/recent-blog3.png'
import img4 from '../../../../../public/assets/recent-blog4.png'
import mainImg from '../../../../../public/assets/recent-blog-main.png'
import BlogCard from '../blog-card/blog-card'
import PreviewCard from '../preview-card/preview-card'
const RecentBlogs = () => {
    const recentBlogs = [
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
        <div className='recent_blogs'>
            <h2 className='common_heading'>Recent Blog</h2>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='recent_image_sec'>
                            <PreviewCard
                                image={mainImg}
                                title='¿Qué es la Web3 y por qué facilita las inversiones?'
                                description='La evolución digital no se detiene, y en Tokencrowd nos adelantamos al futuro con la web 3.0, la nueva era de Internet que está transformando...'
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <ul>
                            {
                                recentBlogs.map((blog, index) => (
                                    <li key={index}>
                                        <BlogCard title={blog.title} image={blog.image} />
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default RecentBlogs
