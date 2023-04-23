import { createGlobalStyle } from 'styled-components'
import { Colors } from '../constants/styles/colors'

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${Colors.DARK_BG};
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
`
