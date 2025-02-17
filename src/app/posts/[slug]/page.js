import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Container } from "react-bootstrap";
import Image from "next/image";
import moment from "moment";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export async function generateStaticParams() {
    if (!fs.existsSync(postsDirectory)) return [];

    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => ({ slug: filename.replace(".md", "") }));
}

export default async function BlogPost({ params }) {
    const filePath = path.join(postsDirectory, `${params.slug}.md`);

    if (!fs.existsSync(filePath)) return notFound();

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    

    return (
        <Container>
            <div>
                <div className="card-header position-relative">
                    <Image style={{ width: "100%", objectFit: "cover" }} width={400} height={500} objectFit="cover" src={data.image.replace("public", "")} alt="" />
                    <Image className="position-absolute bottom-0 start-0" style={{ width: "30px", height: "30px" }} width={30} height={30} src={data.token_image.replace("public", "")} alt="" />
                </div>
                <h1>{data.title}</h1>
                <div className="d-flex mt-3 ms-3">
                    {data.tags.map(item => <span key={item} className="badge rounded-pill text-bg-secondary me-2">{item}</span>)}
                </div>
                <div className="card-text">{data.description}</div>
                <p className="card-text"><small className="text-body-secondary">{moment(data.date).format('MMMM Do YYYY, h:mm:ss a')}</small></p>
                <pre>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </pre>
            </div>
        </Container>
    );
}