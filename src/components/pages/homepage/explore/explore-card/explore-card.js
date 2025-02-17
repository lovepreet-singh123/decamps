import React from 'react';
import card from "../../../../../../public/assets/images/card_img.png";
import Image from "next/image";

const ExploreCard = (props) => {
    return (
        <>
            <div className="explore-card">
                <div className="explore-card-image">
                    <Image src={card} alt="banner_img" />
                </div>
                <div className="explore-card-content">
                    <div className="explore-card-content-text">
                        <div>
                            <h3>{props.heading}</h3>
                            <span>{props.position}</span>
                        </div>
                        <p>{props.description}</p>
                    </div>
                    <div className="explore-card-content-cards">
                        <span>Primary market</span>
                        <span>Real Estate</span>
                        <span>Private</span>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <p>Min investment</p>
                                <h3>{props.invest}</h3>
                            </div>
                            <div>
                                <p>Proj. Yield</p>
                                <h3>{props.yield}</h3>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>NAV</p>
                                <h3>{props.nav}</h3>
                            </div>
                            <div>
                                <p>End date</p>
                                <h3>{props.date}</h3>
                            </div>
                        </li>
                    </ul>
                    <button>Subscribe</button>
                </div>

            </div>
        </>
    );
};

export default ExploreCard;