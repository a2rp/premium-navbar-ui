import { FiArrowUpRight, FiLayers, FiMenu } from "react-icons/fi";

import { Styled } from "./styled";

function SiteHeader() {
    return (
        <Styled.Wrapper>
            <a
                className="brand"
                href="#home"
                aria-label="Premium Navbar UI home"
            >
                <span className="brandIcon">
                    <FiLayers />
                </span>

                <span className="brandText">
                    NAVCRAFT
                    <small>Navigation Systems</small>
                </span>
            </a>

            <nav className="desktopNav" aria-label="Main navigation">
                <a href="#showcase">Showcase</a>
                <a href="#mega-menu">Mega Menu</a>
                <a href="#floating-nav">Floating</a>
                <a href="#mobile-nav">Mobile</a>
                <a href="#features">Features</a>
            </nav>

            <div className="headerActions">
                <a
                    className="githubLink"
                    href="https://github.com/a2rp/premium-navbar-ui"
                    target="_blank"
                    rel="noreferrer"
                >
                    View Source
                    <FiArrowUpRight />
                </a>

                <button
                    className="menuButton"
                    type="button"
                    aria-label="Open navigation menu"
                >
                    <FiMenu />
                </button>
            </div>
        </Styled.Wrapper>
    );
}

export default SiteHeader;
