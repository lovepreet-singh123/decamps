"use client";
import moment from 'moment';
import Slider from 'react-slick';
import ExploreCard from '../explore-card/explore-card';
import { formatNumber } from '@/utils/utils';

const ExploreSlider = ({ data }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '50px',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1439,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {data.map((item, index) => (
                <div key={index}>
                    <ExploreCard
                        heading={item.title}
                        position={item.isActive}
                        description={item.description}
                        minInvestment={formatNumber(item.minInvestment)}
                        projectYield={item.projectYield || "100"}
                        image={item.image}
                        NAV={item.nav || "1.00"}
                        tags={item.tags}
                        tokenImage={item.token_image}
                        endDate={moment(item.date).format('MMMM DD, YYYY')}
                    />
                </div>
            ))}
        </Slider>
    )
}

export default ExploreSlider