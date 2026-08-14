import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 140px 24px;
        background: #1f211c;
        color: #f6f1e8;

        .sectionHeader,
        .showcase {
            width: min(100%, 1500px);
            margin: 0 auto;
        }

        .sectionHeader {
            margin-bottom: 90px;
        }

        .sectionIndex {
            display: block;
            margin-bottom: 1.7rem;
            color: #85897b;
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
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
            font-weight: 400;
            line-height: 0.92;
            letter-spacing: -0.065em;
        }

        .headingRow h2 span {
            display: block;
            color: #8e9384;
            font-style: italic;
        }

        .headingRow p {
            max-width: 420px;
            color: #9ca092;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .showcase {
            min-height: 840px;
            padding: 70px;
            display: grid;
            grid-template-columns: minmax(320px, 0.78fr) minmax(500px, 1.22fr);
            gap: 5vw;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 22px;
            background:
                radial-gradient(
                    circle at 80% 30%,
                    rgba(137, 145, 112, 0.16),
                    transparent 32%
                ),
                #292c25;
            box-shadow: 0 35px 100px rgba(0, 0, 0, 0.22);
        }

        .copyEyebrow {
            display: block;
            color: #8f9486;
            font-size: 0.55rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }

        .showcaseCopy h3 {
            max-width: 590px;
            margin-top: 1.5rem;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3rem, 4.6vw, 5.7rem);
            font-weight: 400;
            line-height: 0.96;
            letter-spacing: -0.055em;
        }

        .showcaseCopy > p {
            max-width: 520px;
            margin-top: 1.8rem;
            color: #aeb1a6;
            font-size: 0.9rem;
            line-height: 1.85;
        }

        .featureList {
            margin-top: 3rem;
            display: grid;
            gap: 1rem;
        }

        .featureList > div {
            padding: 18px 0;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .featureList > div > span {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: #c4c8b9;
        }

        .featureList strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.1rem;
            font-weight: 400;
        }

        .featureList p {
            max-width: 400px;
            margin-top: 0.35rem;
            color: #898e82;
            font-size: 0.7rem;
            line-height: 1.6;
        }

        .phones {
            position: relative;
            min-height: 690px;
        }

        .phone {
            position: absolute;
            width: 320px;
            height: 650px;
            padding: 9px;
            overflow: hidden;
            border-radius: 42px;
            background: #0d0e0c;
            box-shadow: 0 35px 80px rgba(0, 0, 0, 0.34);
        }

        .phone::before {
            content: "";
            position: absolute;
            top: 16px;
            left: 50%;
            z-index: 10;
            width: 86px;
            height: 22px;
            border-radius: 999px;
            background: #090a08;
            transform: translateX(-50%);
        }

        .phoneMain {
            left: 4%;
            bottom: 0;
            z-index: 2;
            transform: rotate(-4deg);
        }

        .phoneDrawer {
            right: 2%;
            top: 0;
            z-index: 1;
            transform: rotate(4deg);
        }

        .phoneScreen,
        .drawerScreen {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 35px;
        }

        .phoneScreen > img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .screenOverlay {
            position: absolute;
            inset: 0;
            background:
                linear-gradient(
                    to bottom,
                    rgba(14, 15, 12, 0.5),
                    transparent 35%
                ),
                linear-gradient(to top, rgba(14, 15, 12, 0.72), transparent 50%);
        }

        .mobileHeader {
            position: absolute;
            top: 34px;
            left: 18px;
            right: 18px;
            z-index: 3;
            min-height: 46px;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
        }

        .mobileHeader button {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            background: rgba(15, 16, 13, 0.2);
            backdrop-filter: blur(10px);
            color: #fff;
        }

        .mobileHeader button:last-child {
            justify-self: end;
        }

        .mobileBrand {
            color: #fff;
            font-size: 0.7rem;
            font-weight: 900;
            letter-spacing: 0.16em;
        }

        .mobileHero {
            position: absolute;
            left: 24px;
            right: 24px;
            bottom: 120px;
            z-index: 3;
        }

        .mobileHero > span {
            color: rgba(255, 255, 255, 0.68);
            font-size: 0.48rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .mobileHero h4 {
            margin-top: 0.8rem;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 2.9rem;
            font-weight: 400;
            line-height: 0.93;
            letter-spacing: -0.055em;
        }

        .mobileHero > a {
            width: fit-content;
            margin-top: 1.2rem;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            color: #fff;
            font-size: 0.55rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .bottomNavigation {
            position: absolute;
            left: 14px;
            right: 14px;
            bottom: 14px;
            z-index: 4;
            min-height: 72px;
            padding: 8px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border: 1px solid rgba(255, 255, 255, 0.17);
            border-radius: 22px;
            background: rgba(240, 237, 227, 0.9);
            backdrop-filter: blur(18px);
        }

        .bottomNavigation a {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.35rem;
            border-radius: 16px;
            color: #74766c;
            font-size: 0.45rem;
            font-weight: 700;
        }

        .bottomNavigation a svg {
            font-size: 0.95rem;
        }

        .bottomNavigation a.active {
            background: #272a23;
            color: #f4f1e9;
        }

        .drawerScreen {
            padding: 42px 22px 20px;
            background: #eee9df;
            color: #27251f;
        }

        .drawerHeader {
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .drawerHeader > div {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
        }

        .drawerHeader span {
            color: #999185;
            font-size: 0.46rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .drawerHeader strong {
            font-size: 0.75rem;
            letter-spacing: 0.14em;
        }

        .drawerHeader button {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(39, 37, 31, 0.1);
            border-radius: 50%;
            background: #f8f5ef;
            color: #3a3730;
        }

        .drawerNav {
            margin-top: 24px;
            display: grid;
        }

        .drawerNav a {
            min-height: 58px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(42, 38, 30, 0.09);
            color: #70695e;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.25rem;
        }

        .drawerNav a.active {
            color: #22201b;
        }

        .drawerNav svg {
            font-size: 0.8rem;
        }

        .featuredStory {
            position: relative;
            height: 190px;
            margin-top: 22px;
            display: block;
            overflow: hidden;
            border-radius: 16px;
        }

        .featuredStory img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .featuredOverlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(18, 18, 15, 0.72),
                transparent 65%
            );
        }

        .featuredContent {
            position: absolute;
            left: 16px;
            right: 16px;
            bottom: 16px;
            z-index: 2;
            color: #fff;
        }

        .featuredContent > span {
            display: block;
            margin-bottom: 0.45rem;
            color: rgba(255, 255, 255, 0.65);
            font-size: 0.42rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .featuredContent strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.1rem;
            font-weight: 400;
            line-height: 1.05;
        }

        .featuredContent svg {
            position: absolute;
            right: 0;
            bottom: 0;
        }

        .drawerLinks {
            margin-top: 15px;
            display: grid;
            gap: 7px;
        }

        .drawerLinks a {
            min-height: 46px;
            padding: 0 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 12px;
            background: #e4ded3;
            color: #555046;
            font-size: 0.54rem;
            font-weight: 700;
        }

        .drawerLinks a > span {
            display: flex;
            align-items: center;
            gap: 0.55rem;
        }

        .drawerLinks small {
            color: #90887c;
        }

        .drawerFooter {
            margin-top: 16px;
            padding-top: 14px;
            display: flex;
            justify-content: space-between;
            border-top: 1px solid rgba(42, 38, 30, 0.08);
            color: #9b9386;
            font-size: 0.42rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        @media (max-width: 1200px) {
            .showcase {
                padding: 50px;
                grid-template-columns: 0.75fr 1.25fr;
            }

            .phone {
                width: 290px;
                height: 600px;
            }

            .phones {
                min-height: 640px;
            }
        }

        @media (max-width: 1000px) {
            .showcase {
                grid-template-columns: 1fr;
            }

            .phones {
                width: min(100%, 720px);
                margin: 20px auto 0;
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

            .showcase {
                min-height: 0;
                padding: 30px 20px 40px;
            }

            .phones {
                min-height: 1030px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;
            }

            .phone {
                position: relative;
                inset: auto;
                width: min(100%, 320px);
                height: 650px;
                transform: none;
            }

            .phoneDrawer {
                margin-top: -250px;
                margin-left: 120px;
            }
        }

        @media (max-width: 520px) {
            .phones {
                min-height: 1360px;
                gap: 22px;
            }

            .phoneDrawer {
                margin: 0;
            }
        }
    `,
};
