import { Colors } from '@constants/styles/colors'

import { IDarkTheme, ILightTheme } from './types'

export const darkTheme: IDarkTheme = {
  bodyColor: Colors.DARK_BG,
  fontColor: Colors.LIGHT_BG,
  subtitleColor: Colors.LIGHT_GRAY,
  currencyCardColor: Colors.DARK_GRAY,
}
export const lightTheme: ILightTheme = {
  bodyColor: Colors.LIGHT_BG,
  fontColor: Colors.DARK_BG,
  subtitleColor: Colors.DARK_GRAY,
  currencyCardColor: Colors.MEDIUM_GRAY,
}
