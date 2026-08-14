import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 140px 24px;
        background: #ebe5da;

        .sectionHeader,
        .demoFrame {
            width: min(100%, 1500px);
            margin: 0 auto;
        }

        .sectionHeader {
            margin-bottom: 80px;
        }

        .sectionIndex {
            display: block;
            margin-bottom: 1.7rem;
            color: #91887a;
            font-size: 0.62rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.16em;
        }

        .headingRow {
            display: grid;
            grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.65fr);
            gap: 6vw;
            align-items: end;
        }

        .headingRow h2 {
            max-width: 900px;
            color: #1b1915;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
            font-weight: 400;
            line-height: 0.92;
            letter-spacing: -0.065em;
        }

        .headingRow h2 span {
            display: block;
            color: #91897c;
            font-style: italic;
        }

        .headingRow p {
            max-width: 420px;
            color: #6f675c;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .demoFrame {
            overflow: hidden;
            border: 1px solid rgba(44, 39, 30, 0.09);
            border-radius: 12px;
            background: #f8f4ec;
            box-shadow: 0 35px 90px rgba(72, 61, 42, 0.12);
        }

        .demoNavbar {
            min-height: 84px;
            padding: 0 26px;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            border-bottom: 1px solid rgba(42, 37, 29, 0.09);
            background: #fbf8f2;
        }

        .brand {
            width: fit-content;
            color: #1d1a15;
            font-size: 1rem;
            font-weight: 900;
            letter-spacing: 0.18em;
        }

        .demoNavbar nav {
            display: flex;
            align-items: center;
            gap: 2rem;
        }

        .demoNavbar nav a {
            position: relative;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            color: #6d665b;
            font-size: 0.6rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.11em;
        }

        .demoNavbar nav a::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -30px;
            width: 0;
            height: 2px;
            background: #27231d;
            transition: width 0.25s ease;
        }

        .demoNavbar nav a:hover::after,
        .demoNavbar nav a.active::after {
            width: 100%;
        }

        .demoNavbar nav a.active {
            color: #28241e;
        }

        .navActions {
            justify-self: end;
        }

        .navActions button {
            min-height: 40px;
            padding: 0 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.55rem;
            border: 1px solid rgba(41, 36, 28, 0.1);
            border-radius: 999px;
            background: #f2ede4;
            color: #403b32;
            font-size: 0.56rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.09em;
        }

        .megaMenu {
            display: grid;
            grid-template-columns: 0.9fr 1.3fr 0.8fr;
            gap: 3rem;
            padding: 42px;
            border-bottom: 1px solid rgba(42, 37, 29, 0.09);
            background: #f6f1e8;
        }

        .menuIntro {
            padding-right: 1rem;
        }

        .menuEyebrow,
        .columnLabel {
            display: block;
            color: #9a9183;
            font-size: 0.52rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .menuIntro h3 {
            margin-top: 1.3rem;
            color: #27231d;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.2rem, 3.2vw, 4rem);
            font-weight: 400;
            line-height: 0.98;
            letter-spacing: -0.045em;
        }

        .menuIntro p {
            max-width: 330px;
            margin-top: 1.4rem;
            color: #756e63;
            font-size: 0.78rem;
            line-height: 1.75;
        }

        .menuIntro > a {
            width: fit-content;
            margin-top: 1.8rem;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            color: #38332b;
            font-size: 0.56rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .menuColumns {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
        }

        .menuColumn {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
        }

        .columnLabel {
            margin-bottom: 0.9rem;
        }

        .menuColumn a {
            min-height: 48px;
            padding: 0 0.7rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 10px;
            color: #49443b;
            transition:
                background 0.2s ease,
                transform 0.2s ease;
        }

        .menuColumn a:hover {
            background: #e9e2d6;
            transform: translateX(3px);
        }

        .menuColumn a span {
            display: flex;
            align-items: center;
            gap: 0.55rem;
            font-size: 0.68rem;
            font-weight: 700;
        }

        .menuColumn a span svg {
            color: #8d8375;
            font-size: 0.8rem;
        }

        .menuColumn a small {
            color: #a79f92;
            font-size: 0.5rem;
        }

        .featureCard {
            position: relative;
            min-height: 340px;
            overflow: hidden;
            border-radius: 10px;
        }

        .featureCard img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }

        .featureCard:hover img {
            transform: scale(1.04);
        }

        .featureOverlay {
            position: absolute;
            inset: 0;
            background:
                linear-gradient(
                    to bottom,
                    rgba(20, 18, 14, 0.2),
                    transparent 40%
                ),
                linear-gradient(to top, rgba(20, 18, 14, 0.75), transparent 50%);
        }

        .featureTop,
        .featureBottom {
            position: absolute;
            left: 18px;
            right: 18px;
            z-index: 2;
            color: #fff;
        }

        .featureTop {
            top: 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .featureTop span {
            font-size: 0.5rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .featureBottom {
            bottom: 18px;
        }

        .featureBottom > span {
            display: block;
            margin-bottom: 0.6rem;
            color: rgba(255, 255, 255, 0.72);
            font-size: 0.48rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .featureBottom strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.5rem, 2vw, 2.4rem);
            font-weight: 400;
            line-height: 1.05;
        }

        .pagePreview {
            position: relative;
            min-height: 500px;
            overflow: hidden;
        }

        .pagePreview img {
            width: 100%;
            height: 500px;
            object-fit: cover;
        }

        .pagePreview::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to right,
                rgba(24, 21, 17, 0.72),
                rgba(24, 21, 17, 0.08)
            );
        }

        .pagePreview > div {
            position: absolute;
            left: 42px;
            top: 50%;
            z-index: 2;
            max-width: 650px;
            color: #fff;
            transform: translateY(-50%);
        }

        .pagePreview > div span {
            font-size: 0.54rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .pagePreview > div h3 {
            margin-top: 1.2rem;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.8rem, 4.8vw, 5.7rem);
            font-weight: 400;
            line-height: 0.96;
            letter-spacing: -0.05em;
        }

        @media (max-width: 1100px) {
            .megaMenu {
                grid-template-columns: 1fr 1.5fr;
            }

            .featureCard {
                grid-column: 1 / -1;
                min-height: 420px;
            }

            .featureCard img {
                position: absolute;
                inset: 0;
            }
        }

        @media (max-width: 800px) {
            padding: 100px 16px;

            .headingRow {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .headingRow h2 {
                font-size: clamp(3.2rem, 14vw, 5rem);
            }

            .demoNavbar {
                grid-template-columns: 1fr auto;
            }

            .demoNavbar nav {
                display: none;
            }

            .megaMenu {
                grid-template-columns: 1fr;
                padding: 28px;
            }

            .menuColumns {
                grid-template-columns: repeat(3, 1fr);
            }

            .featureCard {
                grid-column: auto;
                min-height: 380px;
            }

            .pagePreview > div {
                left: 28px;
                right: 28px;
            }
        }

        @media (max-width: 600px) {
            .menuColumns {
                grid-template-columns: 1fr;
            }

            .featureCard {
                min-height: 320px;
            }

            .pagePreview,
            .pagePreview img {
                min-height: 440px;
                height: 440px;
            }
        }
    `,
};
