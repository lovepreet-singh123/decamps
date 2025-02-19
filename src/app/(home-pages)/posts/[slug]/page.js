import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Badge, Container } from "react-bootstrap";
import "./page.scss";
import Image from "next/image";
import moment from "moment";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export async function generateStaticParams() {
    if (!fs.existsSync(postsDirectory)) return [];

    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => ({ slug: filename.replace(".md", "") }));
}

export default async function BlogPost({ params }) {
    let { slug } = await params;
    const filePath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(filePath)) return notFound();

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return (
        <div className="blog_page">
            <div className="image-container position-relative">
                <Image width={1600} height={700} src={data.image.replace("public", "")} alt={data.title} className="banner-image" />
                <Image width={40} height={40} className="author-image" src={data.token_image.replace("public", "")} alt="Author" />
            </div>
            <Container>
                <div className="page_in">
                    <h1 className="blog-title">{data.title}</h1>
                    <p className="blog-description">{data.description}</p>
                </div>
                <div className="blog-meta">
                    <div className="author-info">
                        <p className="text-muted ms-2 mb-0 text-center">{moment(data.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                    <div className="tags-container d-flex justify-content-center mt-3">
                        {data.tags.map(item => <Badge key={item} className="me-2">{item}</Badge>)}
                    </div>
                </div>
                <div className="blog-content text-center" dangerouslySetInnerHTML={{ __html: content }} />
            </Container>
        </div>
    );
}
