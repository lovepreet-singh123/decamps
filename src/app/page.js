import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Roi from "@/components/pages/homepage/roi/roi";
import Banner from "@/components/pages/homepage/banner/banner";
import Value from "@/components/pages/homepage/value/value";
import Testimonials from "@/components/pages/homepage/testimonials/testimonials";
import Explore from "@/components/pages/homepage/explore/explore";
import Tokenization from "@/components/pages/homepage/tokenization/tokenization";
import Faq from "@/components/pages/homepage/faq/faq";
import "./page.scss";
import GetTouch from "@/components/pages/homepage/get-touch/get-touch";

export default async function Home() {
    return (
        <>
            <div className="home_layout">
                <Header />
                <Banner />
                <Value />
                <Explore />
                <Tokenization />
                <Testimonials />
                <Faq />
                <Roi />
                <GetTouch/>
                <Footer />
            </div>
            {/* <Achievements />
            <Posts /> */}
        </>
    );
}
