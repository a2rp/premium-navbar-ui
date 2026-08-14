import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        min-height: 100vh;
        padding: 150px 24px 70px;
        background:
            radial-gradient(
                circle at 75% 18%,
                rgba(151, 128, 82, 0.14),
                transparent 30%
            ),
            #f2eee7;

        .heroShell {
            width: min(100%, 1500px);
            margin: 0 auto;
        }

        .heroIntro {
            position: relative;
            z-index: 3;
            display: grid;
            grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
            gap: 6vw;
            align-items: end;
        }

        .eyebrow {
            grid-column: 1 / -1;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 0.5rem;
            color: #817a6e;
            font-size: 0.68rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }

        .eyebrow > span {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(38, 35, 28, 0.12);
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.45);
            color: #2b2923;
        }

        h1 {
            max-width: 960px;
            color: #181713;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(4.4rem, 7.5vw, 9rem);
            font-weight: 400;
            line-height: 0.86;
            letter-spacing: -0.07em;
        }

        h1 span {
            display: block;
            color: #918a7d;
            font-style: italic;
        }

        .heroCopy {
            padding-bottom: 0.6rem;
        }

        .heroCopy p {
            max-width: 470px;
            color: #716b60;
            font-size: 1rem;
            line-height: 1.85;
        }

        .exploreButton {
            width: fit-content;
            min-height: 52px;
            margin-top: 2rem;
            padding: 0 1.25rem;
            display: flex;
            align-items: center;
            gap: 1.25rem;
            border-radius: 999px;
            background: #1c1b16;
            color: #f8f4ec;
            font-size: 0.68rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            transition:
                transform 0.3s ease,
                box-shadow 0.3s ease;
        }

        .exploreButton svg {
            font-size: 1rem;
        }

        .exploreButton:hover {
            transform: translateY(-3px);
            box-shadow: 0 14px 30px rgba(48, 42, 31, 0.15);
        }

        .heroGallery {
            position: relative;
            min-height: 760px;
            margin-top: 85px;
        }

        .galleryCard {
            position: absolute;
            overflow: hidden;
            background: #ddd6ca;
            box-shadow: 0 30px 80px rgba(77, 66, 47, 0.12);
        }

        .galleryCard img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .galleryCard:hover img {
            transform: scale(1.035);
        }

        .mainCard {
            top: 0;
            left: 9%;
            width: 58%;
            height: 700px;
            border-radius: 8px;
        }

        .imageOverlay {
            position: absolute;
            inset: 0;
            background:
                linear-gradient(
                    to bottom,
                    rgba(19, 18, 14, 0.15),
                    transparent 35%
                ),
                linear-gradient(to top, rgba(19, 18, 14, 0.7), transparent 40%);
        }

        .cardNav {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 2;
            min-height: 72px;
            padding: 0 24px;
            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 2rem;
            align-items: center;
            color: #fff;
            border-bottom: 1px solid rgba(255, 255, 255, 0.35);
        }

        .cardNav > span {
            font-family: Georgia, "Times New Roman", serif;
            font-size: 1.15rem;
            letter-spacing: 0.08em;
        }

        .cardNav > div {
            display: flex;
            gap: 1.6rem;
            font-size: 0.58rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .cardNav > svg {
            font-size: 1rem;
        }

        .cardCaption {
            position: absolute;
            left: 28px;
            right: 28px;
            bottom: 28px;
            z-index: 2;
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 2rem;
            color: #fff;
        }

        .cardCaption > span {
            max-width: 130px;
            font-size: 0.54rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
            line-height: 1.6;
        }

        .cardCaption strong {
            max-width: 380px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(1.8rem, 2.6vw, 3rem);
            font-weight: 400;
            line-height: 1.05;
            text-align: right;
        }

        .sideCard {
            right: 0;
            width: 28%;
            border-radius: 6px;
        }

        .sideCardTop {
            top: 35px;
            height: 320px;
        }

        .sideCardBottom {
            bottom: 0;
            height: 340px;
        }

        .miniLabel {
            position: absolute;
            left: 18px;
            bottom: 18px;
            display: flex;
            align-items: center;
            gap: 0.55rem;
            padding: 0.65rem 0.8rem;
            border-radius: 999px;
            background: rgba(248, 244, 236, 0.86);
            backdrop-filter: blur(12px);
            color: #2f2b22;
            font-size: 0.56rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .imageLink {
            position: absolute;
            left: 18px;
            right: 18px;
            bottom: 18px;
            min-height: 48px;
            padding: 0 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 12px;
            background: rgba(25, 24, 19, 0.84);
            backdrop-filter: blur(10px);
            color: #fff;
            font-size: 0.6rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.09em;
        }

        .heroFooter {
            margin-top: 75px;
            padding-top: 28px;
            display: grid;
            grid-template-columns: 0.5fr 0.5fr 1fr;
            gap: 3rem;
            border-top: 1px solid rgba(34, 31, 24, 0.12);
        }

        .heroStat {
            display: flex;
            flex-direction: column;
            gap: 0.55rem;
        }

        .heroStat strong {
            color: #1d1b16;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 2.4rem;
            font-weight: 400;
        }

        .heroStat span {
            color: #938b7c;
            font-size: 0.58rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
        }

        .heroNote {
            justify-self: end;
            max-width: 420px;
        }

        .heroNote > span {
            color: #a09889;
            font-size: 0.56rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .heroNote p {
            margin-top: 0.7rem;
            color: #6d675d;
            font-size: 0.86rem;
            line-height: 1.7;
        }

        @media (max-width: 1100px) {
            .heroIntro {
                grid-template-columns: 1fr;
                gap: 2.5rem;
            }

            .heroGallery {
                min-height: 660px;
            }

            .mainCard {
                left: 0;
                width: 68%;
                height: 620px;
            }

            .sideCard {
                width: 29%;
            }

            .sideCardTop {
                height: 285px;
            }

            .sideCardBottom {
                height: 300px;
            }
        }

        @media (max-width: 760px) {
            padding: 120px 16px 60px;

            h1 {
                font-size: clamp(4rem, 18vw, 6.5rem);
            }

            .heroGallery {
                min-height: 0;
                margin-top: 60px;
                display: grid;
                grid-template-columns: 1fr;
                gap: 14px;
            }

            .galleryCard,
            .mainCard,
            .sideCard,
            .sideCardTop,
            .sideCardBottom {
                position: relative;
                inset: auto;
                width: 100%;
            }

            .mainCard {
                height: 580px;
            }

            .sideCard {
                height: 340px;
            }

            .cardNav > div {
                display: none;
            }

            .cardCaption {
                flex-direction: column;
                align-items: flex-start;
            }

            .cardCaption strong {
                text-align: left;
            }

            .heroFooter {
                grid-template-columns: repeat(2, 1fr);
            }

            .heroNote {
                grid-column: 1 / -1;
                justify-self: start;
            }
        }

        @media (max-width: 500px) {
            .mainCard {
                height: 500px;
            }

            .sideCard {
                height: 300px;
            }

            .heroFooter {
                grid-template-columns: 1fr;
            }

            .heroNote {
                grid-column: auto;
            }
        }
    `,
};
