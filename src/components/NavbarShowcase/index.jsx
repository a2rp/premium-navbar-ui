import {
    FiArrowRight,
    FiChevronDown,
    FiCommand,
    FiSearch,
    FiShoppingBag,
    FiUser,
} from "react-icons/fi";

import { Styled } from "./styled";

function NavbarShowcase() {
    return (
        <Styled.Wrapper id="showcase">
            <div className="sectionHeader">
                <div>
                    <span className="sectionIndex">
                        01 / NAVIGATION SHOWCASE
                    </span>

                    <h2>
                        One purpose.
                        <span>Three different personalities.</span>
                    </h2>
                </div>

                <p>
                    Navigation can disappear into the interface or become one of
                    its strongest visual signatures. These concepts explore both
                    directions.
                </p>
            </div>

            <div className="showcaseStack">
                <article className="showcaseBlock editorialBlock">
                    <div className="blockMeta">
                        <span>Concept 01</span>
                        <strong>Editorial Split</strong>
                    </div>

                    <div className="demoSurface editorialSurface">
                        <div className="editorialNav">
                            <div className="editorialBrand">MAISON</div>

                            <nav>
                                <a href="#showcase">Collection</a>
                                <a href="#showcase">Journal</a>
                                <a href="#showcase">Spaces</a>
                            </nav>

                            <div className="editorialActions">
                                <button type="button" aria-label="Search">
                                    <FiSearch />
                                </button>

                                <button type="button" aria-label="Account">
                                    <FiUser />
                                </button>
                            </div>
                        </div>

                        <div className="editorialContent">
                            <div className="editorialCopy">
                                <span>Autumn / Winter</span>

                                <h3>
                                    Quiet forms.
                                    <br />
                                    Strong presence.
                                </h3>

                                <a href="#showcase">
                                    Explore collection
                                    <FiArrowRight />
                                </a>
                            </div>

                            <img
                                src="https://picsum.photos/seed/navcraft-editorial/1200/850"
                                alt="Editorial fashion composition"
                            />
                        </div>
                    </div>
                </article>

                <article className="showcaseBlock commerceBlock">
                    <div className="blockMeta">
                        <span>Concept 02</span>
                        <strong>Commerce Utility</strong>
                    </div>

                    <div className="demoSurface commerceSurface">
                        <div className="commerceTop">
                            <span>Complimentary shipping worldwide</span>
                            <span>SS26 / New arrivals</span>
                        </div>

                        <div className="commerceNav">
                            <a className="commerceBrand" href="#showcase">
                                AUREL
                            </a>

                            <nav>
                                <a href="#showcase">
                                    Women
                                    <FiChevronDown />
                                </a>

                                <a href="#showcase">
                                    Men
                                    <FiChevronDown />
                                </a>

                                <a href="#showcase">Objects</a>
                                <a href="#showcase">Stories</a>
                            </nav>

                            <div className="commerceActions">
                                <button type="button">
                                    <FiSearch />
                                    <span>Search</span>
                                </button>

                                <button type="button">
                                    <FiShoppingBag />
                                    <span>Bag 02</span>
                                </button>
                            </div>
                        </div>

                        <div className="commerceBody">
                            <img
                                src="https://picsum.photos/seed/navcraft-commerce/1400/800"
                                alt="Premium product environment"
                            />

                            <div className="commerceCaption">
                                <span>New collection</span>
                                <strong>Objects for considered living.</strong>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="showcaseBlock commandBlock">
                    <div className="blockMeta">
                        <span>Concept 03</span>
                        <strong>Command Navigation</strong>
                    </div>

                    <div className="demoSurface commandSurface">
                        <div className="commandBackdrop">
                            <div className="commandSiteNav">
                                <a className="commandBrand" href="#showcase">
                                    NORTH
                                </a>

                                <span>Product / Design / Technology</span>

                                <button type="button">
                                    <FiCommand />
                                    Command
                                </button>
                            </div>

                            <div className="commandPage">
                                <span>Digital products / 2026</span>

                                <h3>
                                    Interfaces built
                                    <br />
                                    around focus.
                                </h3>
                            </div>
                        </div>

                        <div className="commandPalette">
                            <div className="commandSearch">
                                <FiSearch />
                                <span>Navigate anywhere...</span>
                                <kbd>⌘ K</kbd>
                            </div>

                            <div className="commandGroup">
                                <span className="commandLabel">
                                    Quick access
                                </span>

                                <button type="button">
                                    <span>
                                        <FiCommand />
                                        Projects
                                    </span>
                                    <span>↵</span>
                                </button>

                                <button type="button">
                                    <span>
                                        <FiCommand />
                                        Studio
                                    </span>
                                    <span>↵</span>
                                </button>

                                <button type="button">
                                    <span>
                                        <FiCommand />
                                        Journal
                                    </span>
                                    <span>↵</span>
                                </button>

                                <button type="button">
                                    <span>
                                        <FiCommand />
                                        Contact
                                    </span>
                                    <span>↵</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </Styled.Wrapper>
    );
}

export default NavbarShowcase;
