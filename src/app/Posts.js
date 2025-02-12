import Image from 'next/image'
import React from 'react'
import { getBlogs } from './lib/getBlogs'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

const Posts = async () => {
    const response = await getBlogs();

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        response.length > 0 ?
                            response.map((item) => {
                                return (
                                    <div key={item.slug} className="col-4">
                                        <div className="card">
                                            <div className="card-header position-relative">
                                                <Image style={{ width: "100%" }} width={400} height={200} src={item.image.replace("public", "")} alt="" />
                                                <Image className="position-absolute bottom-0 start-0" style={{ width: "30px", height: "30px" }} width={30} height={30} src={item.token_image.replace("public", "")} alt="" />
                                            </div>
                                            <div className="d-flex mt-3 ms-3">
                                                {item.tags.map(item => <span key={item} className="badge rounded-pill text-bg-secondary me-2">{item}</span>)}
                                            </div>
                                            <div className="card-body">
                                                <div className="card-title">
                                                    {item.title} <div className={`badge rounded-pill ${item.isActive === "blocked" ? "text-bg-danger" : "text-bg-primary"}`}>{item.isActive}</div>
                                                </div>
                                                <div className="card-text">{item.description}</div>
                                                <p className="card-text"><small className="text-body-secondary">{moment(item.date).format('MMMM Do YYYY, h:mm:ss a')}</small></p>
                                                <Link href={`/posts/${item.slug}`} className='btn btn-primary w-100'>View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <h2>No record found</h2>
                    }
                </div>
            </div>
        </div >
    )
}

export default Posts
