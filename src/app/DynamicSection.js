import { getSections } from "./lib/getSections";

export default async function DynamicSection() {
    const sections = await getSections();

    return (
        <div>
            {sections.map((section) => (
                <section key={section.slug} className="dynamic-section">
                    <h2>{section.title}</h2>
                    {section.subtitle && <p>{section.subtitle}</p>}

                    {section.features && (
                        <ul>
                            {section.features.map((feature, index) => (
                                <li key={index}>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </li>
                            ))}
                        </ul>
                    )}

                    {section.buttonText && (
                        <a href={section.buttonLink} className="button">
                            {section.buttonText}
                        </a>
                    )}
                </section>
            ))}
        </div>
    );
}
