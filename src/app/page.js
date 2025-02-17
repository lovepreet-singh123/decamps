import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Roi from "@/components/pages/homepage/roi/roi";
import "./page.scss";

export default async function Home() {
    return (
        <>
            <div className="home_layout">
                <Header />
                <Roi />
                <Footer />
            </div>
            {/* <Achievements />
            <Posts /> */}
        </>
    );
}
