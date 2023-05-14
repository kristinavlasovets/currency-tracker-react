import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
* {
    background-color: ${(props) => props.theme.bodyColor};
    color: ${(props) => props.theme.fontColor};
    font-family: 'Poppins', 'Inter', sans-serif;
    margin: ${({ theme }) => theme.margins.zero};
    padding: 0px;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    list-style: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;
