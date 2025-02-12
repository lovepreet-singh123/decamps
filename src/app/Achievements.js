import Image from "next/image";
import { getAchievements } from "./lib/getAchievements";

const Achievements = async () => {
    const response = await getAchievements();

    return (
        <section className="achievements">
            <div className="container">
                <div className="in">
                    <ul>
                        {
                            response.map((item) => {
                                return (
                                    <li>
                                        <h3><Image width={20} height={20} src={item.image} alt="" /> {item.title}</h3>
                                        <p>{item.content}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Achievements
