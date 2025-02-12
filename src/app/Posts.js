import Image from 'next/image'
import React from 'react'
import property1 from "../../public/assets/sample-property-1.png"

const Posts = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header">
                                <Image style={{ width: "100%" }} width={400} src={property1} alt="" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    Premium Office Tower <div className="badge rounded-pill text-bg-primary">Active</div>
                                </div>
                                <div className="card-text">Grade A office building located in prime business
                                    district with stable rental income.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
