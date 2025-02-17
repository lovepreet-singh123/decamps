import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import "./page.scss";
import Banner from "@/components/pages/homepage/banner/banner";
import Value from "@/components/pages/homepage/value/value";

export default async function Home() {
    return (
        <>
            <div className="home_layout">
                <Header />
                <Banner />
                <Value />
                <Footer />
            </div>
            {/* <Achievements />
            <Posts /> */}
        </>
    );
}
