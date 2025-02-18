import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Banner from "@/components/pages/homepage/banner/banner";
import Posts from "@/components/pages/homepage/posts/posts";
import Value from "@/components/pages/homepage/value/value";
import "./page.scss";

export default async function Home() {
    return (
        <>
            <div className="home_layout">
                <Header />
                <Banner />
                <Value />
                <Posts />
                {/* <Banner />
                <Value />
                <Explore />
                <Tokenization />
                <Testimonials />
                <Faq />
                <Roi />
                <GetTouch/> */}
                <Footer />
            </div>
            {/* <Achievements />
            <Posts /> */}
        </>
    );
}
