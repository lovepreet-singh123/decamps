import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Roi from "@/components/pages/homepage/roi/roi";
import Banner from "@/components/pages/homepage/banner/banner";
import Value from "@/components/pages/homepage/value/value";
import Testimonials from "@/components/pages/homepage/testimonials/testimonials";
import Explore from "@/components/pages/homepage/explore/explore";
import "./page.scss";

export default async function Home() {
    return (
        <>
            <div className="home_layout">
                <Header />
                <Banner />
                <Value />
                <Testimonials />
                <Explore />
                <Roi />
                <Footer />
            </div>
            {/* <Achievements />
            <Posts /> */}
        </>
    );
}
