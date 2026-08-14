import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 140px 24px;
        background: #fbf8f2;

        .sectionHeader,
        .showcaseStack {
            width: min(100%, 1500px);
            margin: 0 auto;
        }

        .sectionHeader {
            display: grid;
            grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.65fr);
            gap: 6vw;
            align-items: end;
            margin-bottom: 90px;
        }

        .sectionIndex {
            display: block;
            margin-bottom: 1.7rem;
            color: #9a9285;
            font-size: 0.62rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.16em;
        }

        .sectionHeader h2 {
            max-width: 950px;
            color: #1b1915;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.8rem, 6vw, 7rem);
            font-weight: 400;
            line-height: 0.92;
            letter-spacing: -0.065em;
        }

        .sectionHeader h2 span {
            display: block;
            color: #9a9183;
            font-style: italic;
        }

        .sectionHeader > p {
            max-width: 420px;
            color: #726b60;
            font-size: 0.92rem;
            line-height: 1.85;
        }

        .showcaseStack {
            display: grid;
            gap: 90px;
        }

        .showcaseBlock {
            display: grid;
            grid-template-columns: 180px 1fr;
            gap: 2rem;
        }

        .blockMeta {
            padding-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.55rem;
        }

        .blockMeta span {
            color: #a29a8d;
            font-size: 0.56rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .blockMeta strong {
            color: #37332c;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.25rem;
            font-weight: 400;
        }

        .demoSurface {
            min-width: 0;
            overflow: hidden;
            border: 1px solid rgba(41, 36, 28, 0.09);
            box-shadow: 0 28px 70px rgba(72, 61, 44, 0.08);
        }

        /* Editorial */

        .editorialSurface {
            background: #e7e0d5;
        }

        .editorialNav {
            min-height: 86px;
            padding: 0 28px;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            border-bottom: 1px solid rgba(34, 30, 23, 0.12);
            background: #f5f0e8;
        }

        .editorialBrand {
            color: #1d1a16;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.25rem;
            letter-spacing: 0.12em;
        }

        .editorialNav nav {
            display: flex;
            align-items: center;
            gap: 2.2rem;
        }

        .editorialNav nav a {
            color: #5f594f;
            font-size: 0.62rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .editorialActions {
            justify-self: end;
            display: flex;
            gap: 0.65rem;
        }

        .editorialActions button {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(34, 30, 23, 0.1);
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            color: #29251f;
        }

        .editorialContent {
            min-height: 600px;
            display: grid;
            grid-template-columns: 0.72fr 1.28fr;
        }

        .editorialCopy {
            padding: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #ddd4c6;
        }

        .editorialCopy > span {
            color: #8c8375;
            font-size: 0.58rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .editorialCopy h3 {
            margin-top: 1.5rem;
            color: #27231d;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.5rem, 4vw, 5rem);
            font-weight: 400;
            line-height: 0.98;
            letter-spacing: -0.05em;
        }

        .editorialCopy a {
            width: fit-content;
            margin-top: 2rem;
            display: flex;
            align-items: center;
            gap: 0.7rem;
            color: #343028;
            font-size: 0.62rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .editorialContent img {
            width: 100%;
            height: 100%;
            min-height: 600px;
            object-fit: cover;
        }

        /* Commerce */

        .commerceSurface {
            background: #f6f2ea;
        }

        .commerceTop {
            min-height: 34px;
            padding: 0 22px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #27251f;
            color: #d8d1c6;
            font-size: 0.48rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .commerceNav {
            min-height: 82px;
            padding: 0 24px;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            border-bottom: 1px solid rgba(34, 31, 25, 0.09);
        }

        .commerceBrand {
            color: #211f1a;
            font-size: 1rem;
            font-weight: 900;
            letter-spacing: 0.2em;
        }

        .commerceNav nav {
            display: flex;
            align-items: center;
            gap: 1.8rem;
        }

        .commerceNav nav a {
            display: flex;
            align-items: center;
            gap: 0.35rem;
            color: #555046;
            font-size: 0.58rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.11em;
        }

        .commerceActions {
            justify-self: end;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .commerceActions button {
            display: flex;
            align-items: center;
            gap: 0.45rem;
            color: #48443b;
            font-size: 0.55rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.09em;
        }

        .commerceBody {
            position: relative;
            height: 560px;
        }

        .commerceBody img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .commerceBody::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to top,
                rgba(24, 22, 18, 0.62),
                transparent 45%
            );
        }

        .commerceCaption {
            position: absolute;
            left: 32px;
            bottom: 32px;
            z-index: 2;
            max-width: 520px;
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
            color: #fff;
        }

        .commerceCaption span {
            font-size: 0.56rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .commerceCaption strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2.2rem, 4vw, 4.5rem);
            font-weight: 400;
            line-height: 0.98;
        }

        /* Command */

        .commandSurface {
            position: relative;
            min-height: 620px;
            padding: 44px;
            background: #2b2b27;
        }

        .commandBackdrop {
            min-height: 532px;
            border-radius: 18px;
            overflow: hidden;
            background:
                linear-gradient(
                    rgba(255, 255, 255, 0.02),
                    rgba(255, 255, 255, 0.02)
                ),
                #161713;
        }

        .commandSiteNav {
            min-height: 78px;
            padding: 0 24px;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: #d7d7cf;
        }

        .commandBrand {
            font-size: 0.9rem;
            font-weight: 800;
            letter-spacing: 0.18em;
        }

        .commandSiteNav > span {
            color: #74766f;
            font-size: 0.52rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .commandSiteNav button {
            justify-self: end;
            min-height: 38px;
            padding: 0 0.85rem;
            display: flex;
            align-items: center;
            gap: 0.55rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            color: #aaa;
            font-size: 0.54rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .commandPage {
            padding: 90px 52px;
        }

        .commandPage span {
            color: #666861;
            font-size: 0.56rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .commandPage h3 {
            margin-top: 1.5rem;
            color: #e3e3da;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3rem, 5vw, 6rem);
            font-weight: 400;
            line-height: 0.95;
            letter-spacing: -0.055em;
        }

        .commandPalette {
            position: absolute;
            left: 50%;
            top: 50%;
            width: min(560px, calc(100% - 90px));
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 16px;
            background: rgba(245, 242, 234, 0.96);
            box-shadow: 0 30px 90px rgba(0, 0, 0, 0.32);
            transform: translate(-50%, -42%);
            overflow: hidden;
        }

        .commandSearch {
            min-height: 64px;
            padding: 0 18px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 0.9rem;
            align-items: center;
            border-bottom: 1px solid rgba(34, 31, 25, 0.09);
            color: #736e64;
        }

        .commandSearch > span {
            font-size: 0.72rem;
        }

        .commandSearch kbd {
            padding: 0.35rem 0.5rem;
            border: 1px solid rgba(34, 31, 25, 0.1);
            border-radius: 7px;
            background: #eae5dc;
            color: #6a655b;
            font-size: 0.55rem;
        }

        .commandGroup {
            padding: 12px;
        }

        .commandLabel {
            display: block;
            padding: 8px 10px 10px;
            color: #a0988b;
            font-size: 0.48rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .commandGroup button {
            width: 100%;
            min-height: 50px;
            padding: 0 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 10px;
            color: #4f4a41;
            transition: background 0.2s ease;
        }

        .commandGroup button:hover {
            background: #e9e4db;
        }

        .commandGroup button > span:first-child {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            font-size: 0.68rem;
            font-weight: 700;
        }

        .commandGroup button > span:last-child {
            color: #a0988c;
        }

        @media (max-width: 1000px) {
            .showcaseBlock {
                grid-template-columns: 1fr;
            }

            .blockMeta {
                padding-top: 0;
            }

            .editorialContent {
                grid-template-columns: 1fr;
            }

            .editorialContent img {
                min-height: 480px;
            }
        }

        @media (max-width: 760px) {
            padding: 100px 16px;

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 2rem;
                margin-bottom: 65px;
            }

            .sectionHeader h2 {
                font-size: clamp(3.2rem, 14vw, 5rem);
            }

            .showcaseStack {
                gap: 65px;
            }

            .editorialNav,
            .commerceNav,
            .commandSiteNav {
                grid-template-columns: 1fr auto;
            }

            .editorialNav nav,
            .commerceNav nav,
            .commandSiteNav > span {
                display: none;
            }

            .editorialCopy {
                padding: 34px 24px;
            }

            .commerceActions button span {
                display: none;
            }

            .commerceBody {
                height: 470px;
            }

            .commandSurface {
                min-height: 560px;
                padding: 18px;
            }

            .commandBackdrop {
                min-height: 524px;
            }

            .commandPage {
                padding: 72px 24px;
            }

            .commandPalette {
                width: calc(100% - 52px);
            }
        }

        @media (max-width: 520px) {
            .editorialContent img {
                min-height: 380px;
            }

            .commerceTop span:last-child {
                display: none;
            }

            .commerceBody {
                height: 420px;
            }

            .commerceCaption {
                left: 22px;
                right: 22px;
                bottom: 22px;
            }

            .commandPalette {
                width: calc(100% - 28px);
            }
        }
    `,
};
