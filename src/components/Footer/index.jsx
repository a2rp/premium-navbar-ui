import {
    FaCodepen,
    FaFacebook,
    FaGithub,
    FaGlobe,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
import { FiArrowUpRight, FiCoffee, FiHeart, FiMail } from "react-icons/fi";

import { Styled } from "./styled";

const connectLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
];

const supportLinks = [
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiHeart },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
    { label: "Patreon", href: "https://patreon.com/a2rp", icon: FiArrowUpRight },
];

function IconLinks({ links }) {
    return (
        <div className="iconLinks">
            {links.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                    <Icon aria-hidden="true" />
                </a>
            ))}
        </div>
    );
}

function Footer() {
    return (
        <Styled.Wrapper>
            <div className="footerInner">
                <div className="footerTop">
                    <div className="footerBrand">
                        <span className="eyebrow">NAVCRAFT / 2026</span>
                        <h2>
                            Navigation systems
                            <span>crafted with intent.</span>
                        </h2>
                        <p>
                            A premium React showcase exploring modern navigation
                            patterns across editorial, commerce, mobile and
                            product interfaces.
                        </p>
                    </div>

                    <div className="footerLinks">
                        <div className="linkGroup">
                            <span>Explore</span>
                            <a href="#showcase">Showcase</a>
                            <a href="#mega-menu">Mega Menu</a>
                            <a href="#floating-nav">Floating Nav</a>
                            <a href="#mobile-nav">Mobile Nav</a>
                            <a href="#features">Features</a>
                        </div>
                        <div className="linkGroup iconGroup">
                            <span>Connect</span>
                            <IconLinks links={connectLinks} />
                        </div>
                        <div className="linkGroup iconGroup">
                            <span>Support</span>
                            <IconLinks links={supportLinks} />
                        </div>
                    </div>
                </div>

                <div className="footerBottom">
                    <span>
                        Copyright {"©"} {new Date().getFullYear()}{" "}
                        <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                            Ashish Ranjan
                        </a>
                    </span>
                    <a className="repositoryLink" href="https://github.com/a2rp/premium-navbar-ui" target="_blank" rel="noopener noreferrer" aria-label="View repository" title="View repository">
                        <FiArrowUpRight aria-hidden="true" />
                    </a>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default Footer;
