import Image from 'next/image'
const PreviewCard = ({ image, title,className, description }) => {
    return (
        <div className={`preview_card ${className || ''}`}>
            <Image src={image} alt='recent-blog' />
            <p>Blockchain</p>
            <h3>{title}</h3>
            <h5>{description}</h5>
            <p>by Pence Design | Recent</p>
        </div>
    )
}

export default PreviewCard
