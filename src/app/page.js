import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import "./page.scss";
import Tokenization from "@/components/pages/homepage/tokenization/tokenization";
import Faq from "@/components/pages/homepage/faq/faq";

export default async function Home() {
    return (
        <>
            <div className="home_layout">
                <Header />
                <Tokenization />
                <Faq />
                <Footer />
            </div>
            {/* <Achievements />
            <Posts /> */}
        </>
    );
}
