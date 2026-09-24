import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        padding: 110px 24px 32px;
        background: #171813;
        color: #f3eee5;

        .footerInner {
            width: min(100%, 1500px);
            margin: 0 auto;
        }

        .footerTop {
            display: grid;
            grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
            gap: 7vw;
            padding-bottom: 80px;
        }

        .eyebrow {
            display: block;
            margin-bottom: 1.5rem;
            color: #777c70;
            font-size: 0.56rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.16em;
        }

        .footerBrand h2 {
            max-width: 820px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(3.4rem, 5.5vw, 6.5rem);
            font-weight: 400;
            line-height: 0.92;
            letter-spacing: -0.06em;
        }

        .footerBrand h2 span {
            display: block;
            color: #858a7c;
            font-style: italic;
        }

        .footerBrand p {
            max-width: 560px;
            margin-top: 1.8rem;
            color: #989c91;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .footerLinks {
            display: grid;
            grid-template-columns: repeat(2, minmax(140px, 1fr));
            gap: 2.5rem 3rem;
            align-self: end;
        }

        .linkGroup {
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
        }

        .linkGroup > span {
            margin-bottom: 0.4rem;
            color: #6f7468;
            font-size: 0.52rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .linkGroup a {
            width: fit-content;
            display: flex;
            align-items: center;
            gap: 0.55rem;
            color: #c5c8be;
            font-size: 0.68rem;
            transition:
                color 0.2s ease,
                transform 0.2s ease;
        }

        .linkGroup a:hover {
            color: #ffffff;
            transform: translateX(3px);
        }

        .footerBottom {
            min-height: 72px;
            padding-top: 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            color: #777c71;
            font-size: 0.54rem;
            text-transform: uppercase;
            letter-spacing: 0.11em;
        }

        .footerBottom a {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            color: #aeb2a7;
        }

        .footerBottom a:hover {
            color: #ffffff;
        }

        .iconLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .iconLinks a {
            width: 34px;
            height: 34px;
            display: grid;
            place-items: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 10px;
            color: #c5c8be;
            transition: color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, text-shadow 0.2s ease;
        }

        .iconLinks a:hover,
        .iconLinks a:focus-visible {
            border-color: rgba(255, 255, 255, 0.6);
            color: #ffffff;
            box-shadow: 0 0 18px rgba(255, 255, 255, 0.14);
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.28);
        }

        .iconLinks svg {
            width: 15px;
            height: 15px;
        }

        .repositoryLink {
            width: 34px;
            height: 34px;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 10px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease, text-shadow 0.2s ease;
        }

        .repositoryLink:hover,
        .repositoryLink:focus-visible {
            border-color: rgba(255, 255, 255, 0.6);
            box-shadow: 0 0 18px rgba(255, 255, 255, 0.14);
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.28);
        }

        @media (max-width: 900px) {
            .footerTop {
                grid-template-columns: 1fr;
            }

            .footerLinks {
                max-width: 600px;
                grid-template-columns: repeat(3, minmax(120px, 1fr));
            }
        }

        @media (max-width: 600px) {
            padding: 90px 16px 24px;

            .footerLinks {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .footerBottom {
                align-items: flex-start;
                flex-direction: column;
                gap: 1rem;
                padding: 24px 0;
            }
        }
    `,
};
