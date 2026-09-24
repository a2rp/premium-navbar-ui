import {
    FiArrowDownRight,
    FiArrowUpRight,
    FiCompass,
    FiGrid,
    FiMove,
} from "react-icons/fi";

import { Styled } from "./styled";

function HeroSection() {
    return (
        <Styled.Wrapper id="home">
            <div className="heroShell">
                <div className="heroIntro">
                    <div className="eyebrow">
                        <span>
                            <FiCompass />
                        </span>
                        Premium navigation collection
                    </div>

                    <h1>
                        Navigation
                        <span>should feel</span>
                        unforgettable.
                    </h1>

                    <div className="heroCopy">
                        <p>
                            A curated showcase of navigation systems designed
                            for modern brands, products and editorial
                            experiences.
                        </p>

                        <a href="#showcase" className="exploreButton">
                            Explore collection
                            <FiArrowDownRight />
                        </a>
                    </div>
                </div>

                <div className="heroGallery">
                    <div className="galleryCard mainCard">
                        <img
                            src="/premium-navbar-ui/images/navcraft-main.jpg"
                            alt="Editorial architecture"
                        />

                        <div className="imageOverlay" />

                        <div className="cardNav">
                            <span>FORMA</span>

                            <div>
                                <span>Journal</span>
                                <span>Objects</span>
                                <span>Spaces</span>
                            </div>

                            <FiGrid />
                        </div>

                        <div className="cardCaption">
                            <span>01 / Editorial navigation</span>

                            <strong>
                                Navigation as part of the visual identity.
                            </strong>
                        </div>
                    </div>

                    <div className="galleryCard sideCard sideCardTop">
                        <img
                            src="/premium-navbar-ui/images/navcraft-detail.jpg"
                            alt="Premium editorial detail"
                        />

                        <div className="miniLabel">
                            <FiMove />
                            Adaptive layout
                        </div>
                    </div>

                    <div className="galleryCard sideCard sideCardBottom">
                        <img
                            src="/premium-navbar-ui/images/navcraft-object.jpg"
                            alt="Modern product composition"
                        />

                        <a href="#mega-menu" className="imageLink">
                            View system
                            <FiArrowUpRight />
                        </a>
                    </div>
                </div>

                <div className="heroFooter">
                    <div className="heroStat">
                        <strong>12+</strong>
                        <span>Navigation concepts</span>
                    </div>

                    <div className="heroStat">
                        <strong>100%</strong>
                        <span>Responsive systems</span>
                    </div>

                    <div className="heroNote">
                        <span>Curated / 2026</span>

                        <p>
                            Built for interfaces where navigation deserves the
                            same attention as content.
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default HeroSection;
