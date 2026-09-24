import {
    FiArrowUpRight,
    FiBookmark,
    FiCompass,
    FiHeart,
    FiMapPin,
    FiMenu,
} from "react-icons/fi";

import { Styled } from "./styled";

function FloatingNavSection() {
    return (
        <Styled.Wrapper id="floating-nav">
            <div className="sectionHeader">
                <span className="sectionIndex">03 / FLOATING NAVIGATION</span>

                <div className="headingRow">
                    <h2>
                        Always visible.
                        <span>Never in the way.</span>
                    </h2>

                    <p>
                        Floating navigation keeps essential actions within reach
                        while allowing the page itself to stay visually open and
                        immersive.
                    </p>
                </div>
            </div>

            <div className="demoStage">
                <img
                    className="backgroundImage"
                    src="/premium-navbar-ui/images/navcraft-floating.jpg"
                    alt="Premium travel landscape"
                />

                <div className="stageOverlay" />

                <div className="topMeta">
                    <span>
                        <FiMapPin />
                        Copenhagen / Denmark
                    </span>

                    <span>Collection 03</span>
                </div>

                <div className="stageContent">
                    <span className="eyebrow">Curated destinations</span>

                    <h3>
                        Places worth
                        <br />
                        slowing down for.
                    </h3>

                    <p>
                        A contextual interface designed to keep navigation
                        accessible without interrupting the visual story.
                    </p>

                    <a href="#floating-nav">
                        Explore destination
                        <FiArrowUpRight />
                    </a>
                </div>

                <div className="floatingNav">
                    <a className="floatingBrand" href="#floating-nav">
                        <FiCompass />
                        ORBIT
                    </a>

                    <nav>
                        <a className="active" href="#floating-nav">
                            Discover
                        </a>

                        <a href="#floating-nav">Places</a>
                        <a href="#floating-nav">Stories</a>
                        <a href="#floating-nav">Guides</a>
                    </nav>

                    <div className="floatingActions">
                        <button type="button" aria-label="Save">
                            <FiBookmark />
                        </button>

                        <button type="button" aria-label="Favorites">
                            <FiHeart />
                        </button>

                        <button
                            className="menuButton"
                            type="button"
                            aria-label="Open menu"
                        >
                            <FiMenu />
                        </button>
                    </div>
                </div>

                <div className="contextCard">
                    <span className="contextIndex">01</span>

                    <div>
                        <span>Currently exploring</span>
                        <strong>Nordhavn</strong>
                    </div>

                    <FiArrowUpRight />
                </div>

                <div className="progressRail">
                    <span>01</span>

                    <div>
                        <span />
                    </div>

                    <span>04</span>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default FloatingNavSection;
