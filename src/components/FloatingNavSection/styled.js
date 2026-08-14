import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 140px 24px;
        background: #f8f4ec;

        .sectionHeader,
        .demoStage {
            width: min(100%, 1500px);
            margin: 0 auto;
        }

        .sectionHeader {
            margin-bottom: 80px;
        }

        .sectionIndex {
            display: block;
            margin-bottom: 1.7rem;
            color: #968d80;
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

        .demoStage {
            position: relative;
            min-height: 850px;
            overflow: hidden;
            border-radius: 18px;
            background: #262721;
            box-shadow: 0 38px 90px rgba(58, 51, 39, 0.16);
        }

        .backgroundImage {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .stageOverlay {
            position: absolute;
            inset: 0;
            background:
                linear-gradient(
                    to right,
                    rgba(20, 21, 17, 0.74),
                    rgba(20, 21, 17, 0.18) 58%
                ),
                linear-gradient(to top, rgba(20, 21, 17, 0.52), transparent 42%);
        }

        .topMeta {
            position: absolute;
            top: 34px;
            left: 36px;
            right: 36px;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: rgba(255, 255, 255, 0.75);
            font-size: 0.55rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .topMeta span:first-child {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .stageContent {
            position: absolute;
            left: 7%;
            top: 50%;
            z-index: 2;
            max-width: 700px;
            color: #fff;
            transform: translateY(-50%);
        }

        .eyebrow {
            display: block;
            margin-bottom: 1.2rem;
            color: rgba(255, 255, 255, 0.64);
            font-size: 0.56rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }

        .stageContent h3 {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.8rem, 6vw, 7.5rem);
            font-weight: 400;
            line-height: 0.9;
            letter-spacing: -0.06em;
        }

        .stageContent p {
            max-width: 480px;
            margin-top: 1.8rem;
            color: rgba(255, 255, 255, 0.72);
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .stageContent > a {
            width: fit-content;
            min-height: 50px;
            margin-top: 2rem;
            padding: 0 1rem 0 1.2rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.26);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(14px);
            color: #fff;
            font-size: 0.58rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            transition:
                background 0.25s ease,
                transform 0.25s ease;
        }

        .stageContent > a:hover {
            background: rgba(255, 255, 255, 0.16);
            transform: translateY(-2px);
        }

        .floatingNav {
            position: absolute;
            left: 50%;
            bottom: 34px;
            z-index: 5;
            width: min(calc(100% - 70px), 900px);
            min-height: 70px;
            padding: 0 12px 0 18px;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 999px;
            background: rgba(245, 242, 234, 0.88);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.24);
            backdrop-filter: blur(22px);
            transform: translateX(-50%);
        }

        .floatingBrand {
            width: fit-content;
            display: flex;
            align-items: center;
            gap: 0.55rem;
            color: #24231e;
            font-size: 0.68rem;
            font-weight: 900;
            letter-spacing: 0.12em;
        }

        .floatingNav nav {
            display: flex;
            align-items: center;
            gap: 0.35rem;
        }

        .floatingNav nav a {
            min-height: 42px;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            color: #6d675d;
            font-size: 0.56rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.09em;
            transition:
                background 0.22s ease,
                color 0.22s ease;
        }

        .floatingNav nav a:hover,
        .floatingNav nav a.active {
            background: #26251f;
            color: #f8f4ec;
        }

        .floatingActions {
            justify-self: end;
            display: flex;
            align-items: center;
            gap: 0.35rem;
        }

        .floatingActions button {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: #4e4941;
            transition:
                background 0.2s ease,
                color 0.2s ease;
        }

        .floatingActions button:hover {
            background: #e4ded3;
            color: #1f1e19;
        }

        .menuButton {
            display: none !important;
        }

        .contextCard {
            position: absolute;
            right: 34px;
            top: 50%;
            z-index: 3;
            width: 250px;
            min-height: 94px;
            padding: 16px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 0.9rem;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 16px;
            background: rgba(24, 25, 21, 0.46);
            backdrop-filter: blur(18px);
            color: #fff;
            transform: translateY(-50%);
        }

        .contextIndex {
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.12);
            font-size: 0.58rem;
        }

        .contextCard > div {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
        }

        .contextCard > div span {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.46rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .contextCard strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.05rem;
            font-weight: 400;
        }

        .progressRail {
            position: absolute;
            right: 40px;
            bottom: 132px;
            z-index: 3;
            display: flex;
            align-items: center;
            gap: 0.7rem;
            color: rgba(255, 255, 255, 0.65);
            font-size: 0.48rem;
            letter-spacing: 0.1em;
        }

        .progressRail > div {
            width: 90px;
            height: 1px;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.28);
        }

        .progressRail > div span {
            display: block;
            width: 35%;
            height: 100%;
            background: #fff;
        }

        @media (max-width: 1050px) {
            .contextCard {
                display: none;
            }

            .stageContent {
                left: 6%;
            }

            .floatingNav {
                grid-template-columns: 1fr auto;
            }

            .floatingNav nav {
                display: none;
            }

            .menuButton {
                display: flex !important;
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

            .demoStage {
                min-height: 720px;
                border-radius: 14px;
            }

            .topMeta {
                top: 24px;
                left: 22px;
                right: 22px;
            }

            .topMeta span:last-child {
                display: none;
            }

            .stageContent {
                left: 24px;
                right: 24px;
                top: 45%;
            }

            .stageContent h3 {
                font-size: clamp(3.6rem, 15vw, 5.8rem);
            }

            .floatingNav {
                bottom: 20px;
                width: calc(100% - 34px);
                min-height: 62px;
                padding-left: 14px;
            }

            .progressRail {
                right: 24px;
                bottom: 108px;
            }
        }

        @media (max-width: 480px) {
            .demoStage {
                min-height: 660px;
            }

            .stageContent p {
                font-size: 0.82rem;
            }

            .floatingActions button:not(.menuButton) {
                display: none;
            }

            .progressRail {
                display: none;
            }
        }
    `,
};
