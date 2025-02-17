import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import "./page.scss";
import Tokenization from "@/components/pages/homepage/tokenization/tokenization";

export default async function Home() {
    return (
        <>
            <div className="home_layout">
                <Header />
                <Tokenization/>
                <Footer />
            </div>
            {/* <Achievements />
            <Posts /> */}
        </>
    );
}
