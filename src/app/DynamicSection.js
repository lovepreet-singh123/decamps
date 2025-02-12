import { getContent } from "./lib/getSections";

export default async function DynamicSection() {
    const sections = await getContent("features");

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: sections.content }} />
            {/* {sections.map((section) => (
                <section key={section.slug} className="dynamic-section">
                    {features && (
                        <ul>
                            {features.features.map((feature, index) => (
                                <li key={index}>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </li>
                            ))}
                        </ul>
                    )}

                </section>
            ))} */}
        </div>
    );
}
