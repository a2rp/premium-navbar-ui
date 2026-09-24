import {
    FiArrowUpRight,
    FiBox,
    FiChevronDown,
    FiCircle,
    FiGrid,
    FiLayers,
} from "react-icons/fi";

import { Styled } from "./styled";

function MegaMenuSection() {
    return (
        <Styled.Wrapper id="mega-menu">
            <div className="sectionHeader">
                <span className="sectionIndex">02 / MEGA MENU</span>

                <div className="headingRow">
                    <h2>
                        Navigation with
                        <span>room to breathe.</span>
                    </h2>

                    <p>
                        A mega menu can do more than expose links. It can
                        introduce categories, highlight stories and guide users
                        visually before they even leave the page.
                    </p>
                </div>
            </div>

            <div className="demoFrame">
                <div className="demoNavbar">
                    <a href="#mega-menu" className="brand">
                        ATELIER
                    </a>

                    <nav>
                        <a href="#mega-menu" className="active">
                            Collections
                            <FiChevronDown />
                        </a>

                        <a href="#mega-menu">Designers</a>
                        <a href="#mega-menu">Journal</a>
                        <a href="#mega-menu">About</a>
                    </nav>

                    <div className="navActions">
                        <button type="button">
                            <FiGrid />
                            Explore
                        </button>
                    </div>
                </div>

                <div className="megaMenu">
                    <div className="menuIntro">
                        <span className="menuEyebrow">Curated navigation</span>

                        <h3>
                            Discover by
                            <br />
                            perspective.
                        </h3>

                        <p>
                            Browse distinct directions across objects, spaces,
                            materials and visual culture.
                        </p>

                        <a href="#mega-menu">
                            View all collections
                            <FiArrowUpRight />
                        </a>
                    </div>

                    <div className="menuColumns">
                        <div className="menuColumn">
                            <span className="columnLabel">Objects</span>

                            <a href="#mega-menu">
                                <span>
                                    <FiCircle />
                                    Furniture
                                </span>
                                <small>24</small>
                            </a>

                            <a href="#mega-menu">
                                <span>
                                    <FiBox />
                                    Lighting
                                </span>
                                <small>18</small>
                            </a>

                            <a href="#mega-menu">
                                <span>
                                    <FiLayers />
                                    Accessories
                                </span>
                                <small>31</small>
                            </a>
                        </div>

                        <div className="menuColumn">
                            <span className="columnLabel">Spaces</span>

                            <a href="#mega-menu">
                                <span>Residential</span>
                                <small>12</small>
                            </a>

                            <a href="#mega-menu">
                                <span>Hospitality</span>
                                <small>09</small>
                            </a>

                            <a href="#mega-menu">
                                <span>Retail</span>
                                <small>16</small>
                            </a>
                        </div>

                        <div className="menuColumn">
                            <span className="columnLabel">Materials</span>

                            <a href="#mega-menu">
                                <span>Stone</span>
                                <small>07</small>
                            </a>

                            <a href="#mega-menu">
                                <span>Wood</span>
                                <small>14</small>
                            </a>

                            <a href="#mega-menu">
                                <span>Metal</span>
                                <small>11</small>
                            </a>
                        </div>
                    </div>

                    <a href="#mega-menu" className="featureCard">
                        <img
                            src="/premium-navbar-ui/images/navcraft-mega-menu.jpg"
                            alt="Featured design collection"
                        />

                        <div className="featureOverlay" />

                        <div className="featureTop">
                            <span>Featured story</span>

                            <FiArrowUpRight />
                        </div>

                        <div className="featureBottom">
                            <span>Issue 04</span>

                            <strong>
                                The new language
                                <br />
                                of quiet luxury.
                            </strong>
                        </div>
                    </a>
                </div>

                <div className="pagePreview">
                    <div>
                        <span>Featured collection / 2026</span>

                        <h3>
                            Objects shaped by
                            <br />
                            material and restraint.
                        </h3>
                    </div>

                    <img
                        src="/premium-navbar-ui/images/navcraft-page-preview.jpg"
                        alt="Minimal architecture"
                    />
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default MegaMenuSection;
