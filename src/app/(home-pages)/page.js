import Banner from "@/components/pages/homepage/banner/banner";
import Explore from "@/components/pages/homepage/explore/explore";
import Faq from "@/components/pages/homepage/faq/faq";
import GetTouch from "@/components/pages/homepage/get-touch/get-touch";
import Howitworks from "@/components/pages/homepage/howitworks/howitworks";
import Roi from "@/components/pages/homepage/roi/roi";
import Testimonials from "@/components/pages/homepage/testimonials/testimonials";
import Tokenization from "@/components/pages/homepage/tokenization/tokenization";
import Value from "@/components/pages/homepage/value/value";

export default async function Home() {
    return (
        <>
            <Banner />
            <Value />
            <Explore />
            <Howitworks />
            <Tokenization />
            <Testimonials />
            <Faq />
            <Roi />
            <GetTouch />
        </>
    );
}
