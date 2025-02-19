import Image from "next/image";

const ExploreCard = ({ image, heading, description, tokenImage, position, tags, minInvestment, projectYield, NAV, endDate }) => {
    return (
        <>
            <div className="explore-card">
                <div className="explore-card-image">
                    <Image width={400} height={200} src={image} alt={heading} />
                    <div className="headtoken_icon">
                        <Image width={30} height={30} src={tokenImage} alt={heading} />
                    </div>
                </div>
                <div className="explore-card-content">
                    <div className="explore-card-content-text">
                        <div>
                            <h3>{heading}</h3>
                            <span className={position === "Blocked" ? "close" : "active"}>{position === "Blocked" ? "Close" : "Active"}</span>
                        </div>
                        <p>{description}</p>
                    </div>
                    <div className="explore-card-content-cards">
                        {tags.map(item => <span key={item}>{item}</span>)}
                    </div>
                    <ul>
                        <li>
                            <div>
                                <p>Min investment</p>
                                <h3>${minInvestment}</h3>
                            </div>
                            <div>
                                <p>Proj. Yield</p>
                                <h3>{projectYield}%</h3>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>NAV</p>
                                <h3>${NAV}</h3>
                            </div>
                            <div>
                                <p>End date</p>
                                <h3>{endDate}</h3>
                            </div>
                        </li>
                    </ul>
                    <button>Subscribe</button>
                </div>
            </div >
        </>
    );
};

export default ExploreCard;