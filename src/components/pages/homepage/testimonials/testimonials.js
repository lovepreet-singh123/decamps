"use client";
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import { LeftArrow, RightArrow2, StarIcon } from '../../../../../public/assets/icons/icons';
import img1 from '../../../../../public/assets/fedex-icon.png'
import img2 from '../../../../../public/assets/walmart-icon.png'
import img3 from '../../../../../public/assets/air-bnb.png'
import img4 from '../../../../../public/assets/hub-spot.png'
import img5 from '../../../../../public/assets/google-icon.png'
import img6 from '../../../../../public/assets/microsoft-icon.png'

const Testimonials = () => {
    const testimonials = [
        {
            title: "TokenCrowd: Investment in tokenized new construction",
            rating: 5,
            description: 'TokenCrowd offers investment in new construction, which makes it stand out and allows investors who are already positioned in "flipping" or "buy - exploit for a few years- sell" to diversify. Another important point, for example, of the first project in Vallecas: It is their own work, not that of third parties.In this first project, I would also highlight the updates on the progress of the work, the attention on social networks, the help from Rafa at any time, as well as compliance with the expected deadline and profitability.',
            name: "Greg",
        },
        {
            title: "I love your investment approach",
            rating: 5,
            description: 'I love their investment approach, it goes beyond a simple real estate investment, the tokenization of the property, is where the future is going... but above all the very good attention from Rafa, helping me with my doubts and generating confidence. Highly recommended.',
            name: "Wilfredo Delgado Mancilla",
        },
        {
            title: "Many thanks to Rafael",
            rating: 5,
            description: 'Many thanks to Rafael, for his attention and prediction to help at all times. On my scoring scale he has earned a 10. Thank you',
            name: "Rosa Ramos Torrens",
        },
    ]
    const brands = [img1, img2, img3, img4, img5, img6];


    const [slideIndex, setSlideIndex] = useState(0);
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        beforeChange: (current, next) => setSlideIndex(next)
    };

    const settings1 = {
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
    };

    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const handleGo = (value) => {
        sliderRef.slickGoTo(value)
    }

    return (
        <section className="testimonials_design">
            <Container>
                <h2>What Our Investors Say</h2>
                <Slider
                    {...settings}
                    ref={slider => {
                        sliderRef = slider;
                    }}
                >
                    {
                        testimonials.map((item, index) => {
                            return (
                                <div className="testimonial_box" key={index}>
                                    <h3>{item.title}</h3>
                                    <div className="rating">
                                        {
                                            Array.from({ length: item.rating }).map((_, index) => (
                                                <StarIcon key={index} />
                                            ))
                                        }
                                    </div>
                                    <p>{item.description}</p>
                                    <div className="profile">
                                        {
                                            item.profile ?
                                                <Image src={item.profile} alt="" />
                                                :
                                                <span className="img" />
                                        }
                                        <h4>{item.name}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
                <div className="slider_add_ons">
                    <div className="slider_dots">
                        <ul>
                            {
                                testimonials.map((item, index) => {
                                    return (
                                        <li key={index} className={slideIndex >= index ? "active" : ""} onClick={() => handleGo(index)}>
                                            <button type="button"></button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="slider_arrows">
                        <button type="button" className="slide_arrow prev_arrow" onClick={previous}><LeftArrow /></button>
                        <button type="button" className="slide_arrow next_arrow" onClick={next}><RightArrow2 /></button>
                    </div>
                </div>

                <Slider {...settings1} className='brand_slider'>
                    {brands.map((brand, index) => (
                        <div className="brand_box" key={index}>
                            <Image src={brand} alt={`Brand ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    )
}

export default Testimonials
