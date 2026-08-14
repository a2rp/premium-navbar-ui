import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 140px 24px;
        background: #e7e0d5;

        .sectionHeader,
        .featureLayout {
            width: min(100%, 1500px);
            margin: 0 auto;
        }

        .sectionHeader {
            margin-bottom: 80px;
        }

        .sectionIndex {
            display: block;
            margin-bottom: 1.7rem;
            color: #91887b;
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
            color: #71695d;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .featureLayout {
            display: grid;
            grid-template-columns: minmax(340px, 0.8fr) minmax(0, 1.2fr);
            gap: 18px;
        }

        .featureLead {
            position: relative;
            min-height: 680px;
            padding: 30px;
            overflow: hidden;
            border-radius: 18px;
            background: #1f211c;
            color: #f6f1e8;
        }

        .leadTop {
            position: relative;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #8f9486;
            font-size: 0.5rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .leadTop span:first-child {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .leadContent {
            position: relative;
            z-index: 2;
            max-width: 520px;
            margin-top: 150px;
        }

        .leadIndex {
            color: #7f8477;
            font-size: 0.52rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .leadContent h3 {
            margin-top: 1.4rem;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3rem, 4.5vw, 5.8rem);
            font-weight: 400;
            line-height: 0.94;
            letter-spacing: -0.055em;
        }

        .leadContent p {
            max-width: 440px;
            margin-top: 1.7rem;
            color: #a8ad9f;
            font-size: 0.86rem;
            line-height: 1.8;
        }

        .leadContent a {
            width: fit-content;
            min-height: 48px;
            margin-top: 2rem;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 999px;
            color: #e3e7dc;
            font-size: 0.56rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            transition:
                background 0.22s ease,
                transform 0.22s ease;
        }

        .leadContent a:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateY(-2px);
        }

        .leadPattern {
            position: absolute;
            right: -80px;
            bottom: -90px;
            width: 380px;
            height: 380px;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .leadPattern span {
            position: absolute;
            inset: 50%;
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }

        .leadPattern span:nth-child(1) {
            width: 75%;
            height: 75%;
        }

        .leadPattern span:nth-child(2) {
            width: 50%;
            height: 50%;
        }

        .leadPattern span:nth-child(3) {
            width: 26%;
            height: 26%;
        }

        .leadPattern span:nth-child(4) {
            width: 8%;
            height: 8%;
            background: rgba(255, 255, 255, 0.05);
        }

        .featureGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
        }

        .featureCard {
            min-height: 214px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 1px solid rgba(43, 38, 30, 0.08);
            border-radius: 16px;
            background: #f4efe7;
            transition:
                transform 0.25s ease,
                box-shadow 0.25s ease,
                background 0.25s ease;
        }

        .featureCard:hover {
            background: #faf7f1;
            transform: translateY(-4px);
            box-shadow: 0 18px 45px rgba(69, 59, 43, 0.09);
        }

        .cardTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .cardIcon {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(42, 37, 29, 0.1);
            border-radius: 50%;
            color: #595349;
        }

        .cardIndex {
            color: #aaa193;
            font-size: 0.5rem;
            font-weight: 700;
            letter-spacing: 0.12em;
        }

        .cardContent h3 {
            color: #2b2822;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.5rem;
            font-weight: 400;
        }

        .cardContent p {
            max-width: 320px;
            margin-top: 0.7rem;
            color: #797166;
            font-size: 0.72rem;
            line-height: 1.65;
        }

        @media (max-width: 1000px) {
            .featureLayout {
                grid-template-columns: 1fr;
            }

            .featureLead {
                min-height: 580px;
            }

            .leadContent {
                margin-top: 100px;
            }
        }

        @media (max-width: 760px) {
            padding: 100px 16px;

            .headingRow {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .headingRow h2 {
                font-size: clamp(3.2rem, 14vw, 5rem);
            }

            .featureGrid {
                grid-template-columns: 1fr;
            }

            .featureLead {
                min-height: 540px;
                padding: 24px;
            }
        }

        @media (max-width: 480px) {
            .leadTop span:last-child {
                display: none;
            }

            .leadContent {
                margin-top: 90px;
            }
        }
    `,
};
