import { Container } from 'react-bootstrap';
import FaqAccordions from './faq-accordions/faq-accordions';
import { getFAQs } from '@/app/lib/getFAQs';

const Faq = async () => {
    const response = await getFAQs();
    // const data = [
    //     {
    //         ques: "Alternative Financing",
    //         ans: "TokenCrowds Tokenization solution is revolutionizing alternative financing, offering a practical and increasingly viable solution for the real estate sector, particularly for housing developers, by operating outside traditional banking systems",
    //     },
    //     {
    //         ques: "Specialized Knowledge",
    //         ans: "TokenCrowds Tokenization solution is revolutionizing alternative financing, offering a practical and increasingly viable solution for the real estate sector, particularly for housing developers, by operating outside traditional banking systems",
    //     },
    //     {
    //         ques: "Diversification",
    //         ans: "TokenCrowds Tokenization solution is revolutionizing alternative financing, offering a practical and increasingly viable solution for the real estate sector, particularly for housing developers, by operating outside traditional banking systems",
    //     },
    //     {
    //         ques: "Technology",
    //         ans: "TokenCrowds Tokenization solution is revolutionizing alternative financing, offering a practical and increasingly viable solution for the real estate sector, particularly for housing developers, by operating outside traditional banking systems",
    //     },
    //     {
    //         ques: "Compliance",
    //         ans: "TokenCrowds Tokenization solution is revolutionizing alternative financing, offering a practical and increasingly viable solution for the real estate sector, particularly for housing developers, by operating outside traditional banking systems",
    //     },
    //     {
    //         ques: "Speed",
    //         ans: "TokenCrowds Tokenization solution is revolutionizing alternative financing, offering a practical and increasingly viable solution for the real estate sector, particularly for housing developers, by operating outside traditional banking systems",
    //     },
    // ]
    return (
        <section className='faq_sec'>
            <Container>
                <div className='heading'>
                    <h4>Token Crowd</h4>
                    <h2>What makes us different</h2>
                </div>
                <div className='faq_in'>
                    <FaqAccordions data={response || []} />
                </div>
            </Container>
        </section>
    )
}

export default Faq
