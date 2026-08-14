import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        top: 22px;
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
        background: rgba(247, 243, 235, 0.82);
        box-shadow:
            0 18px 50px rgba(70, 61, 43, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
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
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: #1b1a15;
            color: #f7f3eb;
            font-size: 1rem;
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
            transition: color 0.25s ease;
        }

        .desktopNav a::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 0;
            height: 1px;
            background: #1b1a15;
            transform: translateX(-50%);
            transition: width 0.25s ease;
        }

        .desktopNav a:hover {
            color: #1b1a15;
        }

        .desktopNav a:hover::after {
            width: 100%;
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
            transition:
                background 0.25s ease,
                color 0.25s ease,
                transform 0.25s ease;
        }

        .githubLink:hover {
            background: #1b1a15;
            color: #fffdf8;
            transform: translateY(-2px);
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
        }

        @media (max-width: 1100px) {
            grid-template-columns: 1fr auto;

            .desktopNav {
                display: none;
            }

            .menuButton {
                display: flex;
            }
        }

        @media (max-width: 640px) {
            top: 12px;
            width: calc(100% - 24px);
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
