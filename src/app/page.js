import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Roi from "@/components/pages/homepage/roi/roi";
import "./page.scss";
import Banner from "@/components/pages/homepage/banner/banner";
import Value from "@/components/pages/homepage/value/value";
import Testimonials from "@/components/pages/homepage/testimonials/testimonials";

export default async function Home() {
    return (
        <>
            <div className="home_layout">
                <Header />
                <Banner />
                <Value />
                <Testimonials />
                <Roi />
                <Footer />
            </div>
            {/* <Achievements />
            <Posts /> */}
        </>
    );
}
