import { getContent } from './lib/getSections';

export function parseTextToArray(text) {
    return text.split("--") // Split sections
        .map(section => section.trim()) // Trim spaces
        .map(section => {
            const lines = section.split(/\r?\n/).map(line => line.trim()).filter(line => line);
            return lines.length >= 2 ? {
                title: lines[0],
                value: lines.slice(1).join(" ").replace(/\\/g, "") // Remove backslashes
            } : null;
        })
        .filter(item => item !== null); // Remove empty items
}



const Achievements = async () => {
    const achievements = await getContent("achievements");
    // console.log('achievements: ', parseTextToArray(achievements.content));

    return (
        <section className="achievements">
            <div className="container">
                <div className="in">
                    <ul>
                        {
                            parseTextToArray(achievements.content).map((item, index) => (
                                <li key={index}>
                                    <h3>{item.title}</h3>
                                    <p>{item.value}</p>
                                </li>
                            ))
                        }
                        {/* <li>
                            <h3>1</h3>
                            <p>1</p>
                        </li>
                        <li>
                            <h3>1</h3>
                            <p>1</p>
                        </li> */}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Achievements
