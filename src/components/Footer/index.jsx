import {
    FiArrowUpRight,
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiPlay,
} from "react-icons/fi";

import { Styled } from "./styled";

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

                        <div className="linkGroup">
                            <span>Developer</span>

                            <a
                                href="https://www.ashishranjan.net"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiArrowUpRight />
                                Portfolio
                            </a>

                            <a
                                href="https://github.com/a2rp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiGithub />
                                GitHub
                            </a>

                            <a
                                href="https://codepen.io/ash1198"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiArrowUpRight />
                                CodePen
                            </a>

                            <a
                                href="https://www.linkedin.com/in/aashishranjan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiLinkedin />
                                LinkedIn
                            </a>
                        </div>

                        <div className="linkGroup">
                            <span>Social</span>

                            <a
                                href="https://www.facebook.com/theash.ashish/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiFacebook />
                                Facebook
                            </a>

                            <a
                                href="https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiPlay />
                                YouTube
                            </a>

                            <a href="mailto:ash.ranjan09@gmail.com">
                                <FiMail />
                                Email
                            </a>
                        </div>

                        <div className="linkGroup">
                            <span>Support</span>

                            <a
                                href="https://buymeacoffee.com/a2rp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiCoffee />
                                Buy Me A Coffee
                            </a>

                            <a
                                href="https://patreon.com/a2rp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiArrowUpRight />
                                Patreon
                            </a>

                            <a
                                href="https://a2rp-donation-page.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiArrowUpRight />
                                Support My Work
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footerBottom">
                    <span>© 2026 Ashish Ranjan. All rights reserved.</span>

                    <a
                        href="https://github.com/a2rp/premium-navbar-ui"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View repository
                        <FiArrowUpRight />
                    </a>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default Footer;
