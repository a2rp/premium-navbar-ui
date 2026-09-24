import {
    FiArrowUpRight,
    FiBookmark,
    FiChevronRight,
    FiCompass,
    FiHeart,
    FiHome,
    FiLayers,
    FiMenu,
    FiSearch,
    FiUser,
    FiX,
} from "react-icons/fi";

import { Styled } from "./styled";

function MobileNavSection() {
    return (
        <Styled.Wrapper id="mobile-nav">
            <div className="sectionHeader">
                <span className="sectionIndex">04 / MOBILE NAVIGATION</span>

                <div className="headingRow">
                    <h2>
                        Small screen.
                        <span>Full experience.</span>
                    </h2>

                    <p>
                        Mobile navigation should feel considered, not reduced.
                        This concept combines hierarchy, shortcuts, imagery and
                        contextual actions inside a compact drawer system.
                    </p>
                </div>
            </div>

            <div className="showcase">
                <div className="showcaseCopy">
                    <span className="copyEyebrow">Mobile system / 01</span>

                    <h3>A drawer that feels like part of the product.</h3>

                    <p>
                        Instead of hiding navigation behind a generic menu, the
                        drawer becomes a curated space for destinations, saved
                        items, profile actions and editorial discovery.
                    </p>

                    <div className="featureList">
                        <div>
                            <span>
                                <FiLayers />
                            </span>

                            <div>
                                <strong>Clear hierarchy</strong>
                                <p>
                                    Primary and secondary destinations remain
                                    easy to scan.
                                </p>
                            </div>
                        </div>

                        <div>
                            <span>
                                <FiCompass />
                            </span>

                            <div>
                                <strong>Contextual discovery</strong>
                                <p>
                                    Featured content adds visual guidance inside
                                    the navigation itself.
                                </p>
                            </div>
                        </div>

                        <div>
                            <span>
                                <FiBookmark />
                            </span>

                            <div>
                                <strong>Useful shortcuts</strong>
                                <p>
                                    Saved content and account actions stay
                                    immediately accessible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="phones">
                    <div className="phone phoneMain">
                        <div className="phoneScreen">
                            <img
                                src="/premium-navbar-ui/images/navcraft-mobile-main.jpg"
                                alt="Mobile travel interface"
                            />

                            <div className="screenOverlay" />

                            <div className="mobileHeader">
                                <button type="button" aria-label="Open menu">
                                    <FiMenu />
                                </button>

                                <a href="#mobile-nav" className="mobileBrand">
                                    NOMAD
                                </a>

                                <button type="button" aria-label="Favorites">
                                    <FiHeart />
                                </button>
                            </div>

                            <div className="mobileHero">
                                <span>Selected escapes</span>

                                <h4>Find your quiet place.</h4>

                                <a href="#mobile-nav">
                                    Explore
                                    <FiArrowUpRight />
                                </a>
                            </div>

                            <div className="bottomNavigation">
                                <a className="active" href="#mobile-nav">
                                    <FiHome />
                                    <span>Home</span>
                                </a>

                                <a href="#mobile-nav">
                                    <FiSearch />
                                    <span>Explore</span>
                                </a>

                                <a href="#mobile-nav">
                                    <FiBookmark />
                                    <span>Saved</span>
                                </a>

                                <a href="#mobile-nav">
                                    <FiUser />
                                    <span>Profile</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="phone phoneDrawer">
                        <div className="drawerScreen">
                            <div className="drawerHeader">
                                <div>
                                    <span>Navigation</span>
                                    <strong>NOMAD</strong>
                                </div>

                                <button type="button" aria-label="Close menu">
                                    <FiX />
                                </button>
                            </div>

                            <nav className="drawerNav">
                                <a className="active" href="#mobile-nav">
                                    <span>Discover</span>
                                    <FiChevronRight />
                                </a>

                                <a href="#mobile-nav">
                                    <span>Destinations</span>
                                    <FiChevronRight />
                                </a>

                                <a href="#mobile-nav">
                                    <span>Stays</span>
                                    <FiChevronRight />
                                </a>

                                <a href="#mobile-nav">
                                    <span>Journal</span>
                                    <FiChevronRight />
                                </a>
                            </nav>

                            <a href="#mobile-nav" className="featuredStory">
                                <img
                                    src="/premium-navbar-ui/images/navcraft-mobile-drawer.jpg"
                                    alt="Featured destination"
                                />

                                <div className="featuredOverlay" />

                                <div className="featuredContent">
                                    <span>Featured escape</span>

                                    <strong>
                                        Hidden coastlines
                                        <br />
                                        of the north.
                                    </strong>

                                    <FiArrowUpRight />
                                </div>
                            </a>

                            <div className="drawerLinks">
                                <a href="#mobile-nav">
                                    <span>
                                        <FiBookmark />
                                        Saved places
                                    </span>

                                    <small>08</small>
                                </a>

                                <a href="#mobile-nav">
                                    <span>
                                        <FiUser />
                                        My account
                                    </span>

                                    <FiChevronRight />
                                </a>
                            </div>

                            <div className="drawerFooter">
                                <span>Language / EN</span>
                                <span>2026 Edition</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default MobileNavSection;
