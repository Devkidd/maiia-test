import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        max-width: 900px;
        margin: auto;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        border: none;
        background: inherit;
    }
`