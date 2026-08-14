import {
    FiActivity,
    FiArrowUpRight,
    FiGrid,
    FiLayers,
    FiMonitor,
    FiMousePointer,
    FiSmartphone,
    FiZap,
} from "react-icons/fi";

import { Styled } from "./styled";

function FeaturesSection() {
    const features = [
        {
            icon: <FiLayers />,
            title: "Layered navigation",
            description:
                "Structured depth for interfaces that need more than one level of navigation.",
            index: "01",
        },
        {
            icon: <FiMousePointer />,
            title: "Interaction-first",
            description:
                "Hover, focus and movement patterns designed as part of the navigation experience.",
            index: "02",
        },
        {
            icon: <FiSmartphone />,
            title: "Responsive by default",
            description:
                "Navigation systems that adapt naturally across desktop, tablet and mobile screens.",
            index: "03",
        },
        {
            icon: <FiMonitor />,
            title: "Context aware",
            description:
                "Navigation that responds to where the user is and what matters at that moment.",
            index: "04",
        },
        {
            icon: <FiGrid />,
            title: "Flexible systems",
            description:
                "Patterns that can scale from minimal product sites to rich editorial experiences.",
            index: "05",
        },
        {
            icon: <FiZap />,
            title: "Built for clarity",
            description:
                "Visual polish without sacrificing speed, hierarchy or ease of use.",
            index: "06",
        },
    ];

    return (
        <Styled.Wrapper id="features">
            <div className="sectionHeader">
                <span className="sectionIndex">05 / SYSTEM PRINCIPLES</span>

                <div className="headingRow">
                    <h2>
                        Premium should feel
                        <span>effortless.</span>
                    </h2>

                    <p>
                        Every navigation concept in this collection follows the
                        same principle: make interaction feel clear, natural and
                        visually intentional.
                    </p>
                </div>
            </div>

            <div className="featureLayout">
                <article className="featureLead">
                    <div className="leadTop">
                        <span>
                            <FiActivity />
                            Navigation system
                        </span>

                        <span>2026 / Collection</span>
                    </div>

                    <div className="leadContent">
                        <span className="leadIndex">NAV / 01</span>

                        <h3>
                            Designed to guide.
                            <br />
                            Built to disappear.
                        </h3>

                        <p>
                            The best navigation feels obvious when you need it
                            and almost invisible when you do not.
                        </p>

                        <a href="#home">
                            Back to beginning
                            <FiArrowUpRight />
                        </a>
                    </div>

                    <div className="leadPattern">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </article>

                <div className="featureGrid">
                    {features.map((feature) => (
                        <article className="featureCard" key={feature.index}>
                            <div className="cardTop">
                                <span className="cardIcon">{feature.icon}</span>
                                <span className="cardIndex">
                                    {feature.index}
                                </span>
                            </div>

                            <div className="cardContent">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default FeaturesSection;
