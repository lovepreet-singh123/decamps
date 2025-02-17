import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import "./page.scss";
import GetTouch from "@/components/pages/homepage/get-touch/get-touch";

export default async function Home() {
    return (
        <>
            <div className="home_layout">
                <Header />
                <GetTouch/>
                <Footer />
            </div>
            {/* <Achievements />
            <Posts /> */}
        </>
    );
}
