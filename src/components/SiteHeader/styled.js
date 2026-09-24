import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        top: 16px;
        left: 50%;
        z-index: 100;
        width: min(calc(100% - 48px), 1500px);
        min-height: 76px;
        padding: 0 18px 0 22px;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        border: 1px solid rgba(32, 30, 23, 0.1);
        border-radius: 18px;
        background: rgba(247, 243, 235, 0.9);
        box-shadow: 0 18px 50px rgba(70, 61, 43, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(20px);
        transform: translateX(-50%);

        .brand {
            justify-self: start;
            display: flex;
            align-items: center;
            gap: 0.85rem;
        }

        .brandIcon {
            width: 40px;
            height: 40px;
            display: grid;
            place-items: center;
            overflow: hidden;
            border-radius: 12px;
            background: #1b1a15;
            color: #f7f3eb;
            font-size: 1rem;
        }

        .brandIcon img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .brandIcon svg {
            display: none;
        }

        .brandText {
            display: flex;
            flex-direction: column;
            gap: 0.12rem;
            color: #1b1a15;
            font-size: 0.76rem;
            font-weight: 800;
            letter-spacing: 0.12em;
        }

        .brandText small {
            color: #8e887b;
            font-size: 0.48rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.16em;
        }

        .desktopNav {
            display: flex;
            align-items: center;
            gap: 2rem;
        }

        .desktopNav a {
            position: relative;
            padding: 0.6rem 0;
            color: #6b665c;
            font-size: 0.67rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.11em;
            transition: color 0.2s ease, text-shadow 0.2s ease;
        }

        .desktopNav a:hover,
        .desktopNav a:focus-visible {
            color: #1b1a15;
            text-shadow: 0 0 12px rgba(27, 26, 21, 0.18);
        }

        .desktopNav a:focus-visible,
        .githubLink:focus-visible,
        .menuButton:focus-visible,
        .mobileMenu a:focus-visible {
            outline: 2px solid #1b1a15;
            outline-offset: 4px;
        }

        .headerActions {
            justify-self: end;
            display: flex;
            align-items: center;
            gap: 0.65rem;
        }

        .githubLink {
            min-height: 42px;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            border: 1px solid rgba(27, 26, 21, 0.11);
            border-radius: 12px;
            background: #fffdf9;
            color: #2a2822;
            font-size: 0.62rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.09em;
            box-shadow: 0 8px 22px rgba(59, 51, 38, 0.05);
            transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .githubLink:hover,
        .githubLink:focus-visible {
            background: #1b1a15;
            border-color: #1b1a15;
            color: #fffdf8;
            box-shadow: 0 10px 24px rgba(27, 26, 21, 0.16);
        }

        .menuButton {
            width: 42px;
            height: 42px;
            display: none;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(27, 26, 21, 0.11);
            border-radius: 12px;
            background: #fffdf9;
            color: #1b1a15;
            font-size: 1rem;
            transition: border-color 0.2s ease, box-shadow 0.2s ease, text-shadow 0.2s ease;
        }

        .menuButton:hover,
        .menuButton:focus-visible {
            border-color: #1b1a15;
            box-shadow: 0 8px 18px rgba(27, 26, 21, 0.12);
            text-shadow: 0 0 10px rgba(27, 26, 21, 0.2);
        }

        .mobileMenu {
            display: none;
        }

        @media (max-width: 1100px) {
            grid-template-columns: 1fr auto;

            .desktopNav {
                display: none;
            }

            .menuButton {
                display: flex;
            }

            .mobileMenu {
                position: absolute;
                top: calc(100% + 8px);
                left: 0;
                right: 0;
                display: none;
                gap: 18px;
                padding: 18px;
                border: 1px solid rgba(32, 30, 23, 0.1);
                border-radius: 16px;
                background: rgba(247, 243, 235, 0.98);
                box-shadow: 0 20px 40px rgba(70, 61, 43, 0.14);
            }

            &.menuOpen .mobileMenu {
                display: grid;
            }

            .mobileMenu nav {
                display: grid;
                gap: 4px;
            }

            .mobileMenu nav a,
            .mobileSourceLink {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                padding: 12px 10px;
                border-bottom: 1px solid rgba(32, 30, 23, 0.08);
                color: #4c493f;
                font-size: 0.75rem;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.08em;
            }

            .mobileMenu nav a:hover,
            .mobileMenu nav a:focus-visible,
            .mobileSourceLink:hover,
            .mobileSourceLink:focus-visible {
                color: #1b1a15;
                text-shadow: 0 0 12px rgba(27, 26, 21, 0.16);
            }

            .mobileSourceLink {
                border: 1px solid rgba(27, 26, 21, 0.11);
                border-radius: 10px;
            }
        }

        @media (max-width: 640px) {
            top: 10px;
            width: calc(100% - 20px);
            min-height: 66px;
            padding: 0 12px 0 16px;
            border-radius: 15px;

            .brandIcon {
                width: 36px;
                height: 36px;
            }

            .brandText small {
                display: none;
            }

            .githubLink {
                display: none;
            }

            .menuButton {
                width: 38px;
                height: 38px;
            }
        }
    `,
};
