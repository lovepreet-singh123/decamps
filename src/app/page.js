import Achievements from "./Achievements";
import "./page.scss";
import Posts from "./Posts";

export default async function Home() {

    return (
        <div>
            <Achievements />
            <Posts />
            {/* <DynamicSection /> */}
        </div>
    );
}
