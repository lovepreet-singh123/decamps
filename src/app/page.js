import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import "./page.scss";

export default async function Home() {
    return (
        <>
            <div className="home_layout">
                <Header />
                <Footer />
            </div>
            {/* <Achievements />
            <Posts /> */}
        </>
    );
}
