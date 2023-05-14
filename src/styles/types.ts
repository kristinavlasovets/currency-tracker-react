import { Colors } from '@constants/styles/colors';

export interface ICommonTheme {
  fontWeights: {
    xxs: number;
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
  };
  fontSizes: {
    xxs: number;
    xs: number;
    s: number;
    m: number;
    xl: number;
    xxl: number;
  };
  colors: {
    DARK_BG: string;
    LIGHT_BG: string;
    MODAL_BG: string;
    TEXT_GRADIENT_GREEN: string;
    IMAGE_GRADIENT_GREEN: string;
    BOX_GRADIENT_BLACK: string;
    GREEN: string;
    WHITE: string;
    LIGHT_GRAY: string;
    GRAY: string;
    MEDIUM_GRAY: string;
    DARK_GRAY: string;
    FOOTER_GRAY: string;
    SEARCH_LIGHT_GRAY: string;
    SEARCH_DARK_GRAY: string;
    RED: string;
  };
  dimensions: {
    mobile: number;
  };
  borderRadiuses: {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
  };
  margins: {
    zero: number;
    five: number;
    ten: number;
    twenty: number;
    thirty: number;
    thirtyFive: number;
    fourty: number;
    fourtyFive: number;
    fifty: number;
    eighty: number;
    hundred: number;
    hundredTwenty: number;
    twoHundreds: number;
    twoHundredsTen: number;
  };
}

export interface ITheme extends ICommonTheme {
  bodyColor: Colors;
  fontColor: Colors;
  subtitleColor: Colors;
  currencyCardColor: Colors;
}
