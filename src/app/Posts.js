import Image from 'next/image'
import React from 'react'
import property1 from "../../public/assets/sample-property-1.png"
import { getContent } from './lib/getSections'

export function parseTextToArray(text) {
    return text.split("--") // Split sections
        .map(section => section.trim()) // Trim spaces
        .map(section => {
            const lines = section.split(/\r?\n/).map(line => line.trim()).filter(line => line);
            return lines.length >= 2 ? {
                image: lines[0],
                title: lines.slice(1, 2).join(" ").replace(/\\/g, ""),
                description: lines.slice(2, 3).join(" ").replace(/\\/g, ""),
                tag: lines.slice(3, 4).join(" ").replace(/\\/g, ""),
            } : null;
        })
        .filter(item => item !== null); // Remove empty items
}

const Posts = async () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                                <div key={"item.title"} className="col-4">
                                    <div className="card">
                                        <div className="card-header">
                                            {/* <Image style={{ width: "100%" }} width={400} height={200} src={item.image.replace("public", "")} alt="" /> */}
                                        </div>
                                        <div className="card-body">
                                            <div className="card-title">
                                                {"item.title"} <div className={`badge rounded-pill ${"Block" === "Block" ? "text-bg-danger" : "text-bg-primary"}`}>{"item.tag"}</div>
                                            </div>
                                            <div className="card-text">{"item.description"}</div>
                                        </div>
                                    </div>
                                </div>
                </div>
            </div>
        </div >
    )
}

export default Posts
