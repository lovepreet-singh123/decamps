import { getBlogs } from "@/app/lib/getBlogs";
import { Container } from "react-bootstrap";
import ExploreSlider from './explore-slider/explore-slider';

const Explore = async () => {
    const response = await getBlogs();

    return (
        <>
            <div className="explore">
                <Container>
                    <h2>Explore our outstanding opportunities of Real Estate Investment</h2>
                    <ExploreSlider data={response} />
                </Container>
            </div>
        </>
    );
};

export default Explore;