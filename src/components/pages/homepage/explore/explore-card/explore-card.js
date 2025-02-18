import React from 'react';
import card from "../../../../../../public/assets/images/card_img.png";
import Image from "next/image";

const ExploreCard = (props) => {
    return (
        <>
            <div className="explore-card">
                <div className="explore-card-image">
                    {/* <Image src={props.card} alt="banner_img" /> */}
                    <Image style={{ width: "100%", height: "200px", objectFit: "cover" }} width={400} height={200} src={props.img} alt="" />
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
                                <h3>{"$50k"}</h3>
                            </div>
                            <div>
                                <p>Proj. Yield</p>
                                <h3>{"100%"}</h3>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>NAV</p>
                                <h3>{"$1.00"}</h3>
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