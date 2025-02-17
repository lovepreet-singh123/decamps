import Achievements from "@/components/pages/homepage/achievements/achievements";
import Posts from "@/components/pages/homepage/posts/posts";
import "./page.scss";

export default async function Home() {
    return (
        <>
            <Achievements />
            <Posts />
            {/* <DynamicSection /> */}
        </>
    );
}
