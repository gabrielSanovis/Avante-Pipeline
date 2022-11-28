import  { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle<{isOpen: boolean}>`
    body {
        background-color: #127475;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        ${props => props.isOpen ? css`overflow-y: hidden;` : null}
    }

    :root {
        font-family: Roboto, sans-serif;
    }
`;