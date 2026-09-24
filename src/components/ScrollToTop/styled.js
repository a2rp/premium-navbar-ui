import styled from "styled-components";

export const Styled = {
    Button: styled.button`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 90;
        width: 42px;
        height: 42px;
        display: grid;
        place-items: center;
        border: 1px solid rgba(27, 26, 21, 0.18);
        border-radius: 50%;
        background: #fffdf9;
        color: #1b1a15;
        box-shadow: 0 10px 24px rgba(59, 51, 38, 0.14);
        transition: border-color 0.2s ease, box-shadow 0.2s ease, text-shadow 0.2s ease;
        &:hover,
        &:focus-visible {
            border-color: #1b1a15;
            box-shadow: 0 0 18px rgba(27, 26, 21, 0.2);
            text-shadow: 0 0 10px rgba(27, 26, 21, 0.2);
        }
    `,
};
