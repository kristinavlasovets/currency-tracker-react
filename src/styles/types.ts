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
  paddings: {
    zero: number;
    one: number;
    five: number;
    ten: number;
    fifteen: number;
    eighteen: number;
    twenty: number;
    twentyFive: number;
    thirty: number;
    thirtyFive: number;
    fourty: number;
    fourtyFive: number;
    fifty: number;
    sixty: number;
    eighty: number;
    hundred: number;
    twoHundredsTen: number;
  };
  top: {
    zero: number;
    one: number;
    five: number;
    fifteen: number;
    fifty: number;
    hundred: number;
  };
  right: {
    fifteen: number;
  };
  left: {
    zero: number;
    fifteen: number;
    twenty: number;
    fifty: number;
  };
  bottom: {
    three: number;
    eight: number;
    thirty: number;
  };
  opacities: {
    zero: number;
    dotOne: number;
    dotTwo: number;
    dotFive: number;
    dotSeven: number;
    dotNine: number;
    one: number;
  };
  zIndexes: {
    one: number;
    thousand: number;
  };
  width: {
    zero: number;
    seven: number;
    ten: number;
    fifteen: number;
    sixteen: number;
    twenty: number;
    twentyFive: number;
    thirty: number;
    fourty: number;
    fifty: number;
    fiftyFive: number;
    sixty: number;
    eighty: number;
    eightyFive: number;
    ninety: number;
    hundred: number;
    hundredTen: number;
    hundredFourty: number;
    hundredEighty: number;
    twoHundred: number;
    twoHundredFifty: number;
    threeHundredFifty: number;
    fourHundred: number;
    fourHundredEighty: number;
  };
  height: {
    one: number;
    three: number;
    seven: number;
    ten: number;
    fifteen: number;
    sixteen: number;
    nineteen: number;
    twenty: number;
    twentyFive: number;
    thirty: number;
    fourty: number;
    fourtyFive: number;
    fifty: number;
    fiftyFive: number;
    seventy: number;
    eighty: number;
    ninety: number;
    hundred: number;
    hundredTwenty: number;
    hundredFifty: number;
    hundredSeventy: number;
    hundredEighty: number;
    twoHundredFifty: number;
    threeHundred: number;
    threeHundredEighty: number;
    fourHundredSixty: number;
  };
}

export interface ITheme extends ICommonTheme {
  bodyColor: Colors;
  fontColor: Colors;
  subtitleColor: Colors;
  currencyCardColor: Colors;
}
