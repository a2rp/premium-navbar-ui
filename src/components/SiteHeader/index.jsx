import { useEffect, useState } from "react";
import { FiArrowUpRight, FiLayers, FiMenu, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const navItems = [
    { label: "Showcase", href: "#showcase" },
    { label: "Mega Menu", href: "#mega-menu" },
    { label: "Floating", href: "#floating-nav" },
    { label: "Mobile", href: "#mobile-nav" },
    { label: "Features", href: "#features" },
];

function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <Styled.Wrapper className={menuOpen ? "menuOpen" : ""}>
            <a className="brand" href="#home" aria-label="Premium Navbar UI home" onClick={closeMenu}>
                <span className="brandIcon">
                    <img src="/premium-navbar-ui/logo.png" alt="" />
                    <FiLayers aria-hidden="true" />
                </span>
                <span className="brandText">
                    NAVCRAFT
                    <small>Navigation Systems</small>
                </span>
            </a>

            <nav className="desktopNav" aria-label="Main navigation">
                {navItems.map((item) => (
                    <a key={item.href} href={item.href}>{item.label}</a>
                ))}
            </nav>

            <div className="headerActions">
                <a
                    className="githubLink"
                    href="https://github.com/a2rp/premium-navbar-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Source
                    <FiArrowUpRight aria-hidden="true" />
                </a>
                <button
                    className="menuButton"
                    type="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((current) => !current)}
                >
                    {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                </button>
            </div>

            <div className="mobileMenu" aria-hidden={!menuOpen}>
                <nav aria-label="Mobile navigation">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
                    ))}
                </nav>
                <a
                    className="mobileSourceLink"
                    href="https://github.com/a2rp/premium-navbar-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                >
                    View Source
                    <FiArrowUpRight aria-hidden="true" />
                </a>
            </div>
        </Styled.Wrapper>
    );
}

export default SiteHeader;
