import Image from 'next/image'

const BlogCard = ({ title, image, className }) => {
    return (
        <div className={`blog_card ${className || ''}`}>
            <Image src={image} alt={title} />
            <div className='blog_card_content'>
                <p>Blockchain</p>
                <h3>{title}</h3>
                <p>by Pence Design | Recent</p>
            </div>
        </div>
    )
}

export default BlogCard
