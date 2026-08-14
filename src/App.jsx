import { Styled } from "./App.styled";

import SiteHeader from "./components/SiteHeader";
import HeroSection from "./components/HeroSection";
import NavbarShowcase from "./components/NavbarShowcase";
import MegaMenuSection from "./components/MegaMenuSection";
import FloatingNavSection from "./components/FloatingNavSection";
import MobileNavSection from "./components/MobileNavSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";

function App() {
    return (
        <Styled.Wrapper>
            <SiteHeader />

            <main>
                <HeroSection />
                <NavbarShowcase />
                <MegaMenuSection />
                <FloatingNavSection />
                <MobileNavSection />
                <FeaturesSection />
            </main>

            <Footer />
        </Styled.Wrapper>
    );
}

export default App;
