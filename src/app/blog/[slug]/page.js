import { getPosts } from "@/app/lib/posts";

export async function generateStaticParams() {
    const posts = await getPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }) {
    let { slug } = await params;
    const posts = await getPosts();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}
