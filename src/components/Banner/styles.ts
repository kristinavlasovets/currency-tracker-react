import { Colors } from '@constants/styles/colors'
import { Dimensions } from '@constants/styles/dimensions'
import { FontFamily, FontSize, FontWeight } from '@constants/styles/fonts'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  background: ${Colors.BOX_GRADIENT_BLACK};

  @media (max-width: ${Dimensions.mobile}px) {
    padding-top: 30px;
    height: fit-content;
    padding-bottom: 30px;
  }
`

export const TextBlockWrapper = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: ${Dimensions.mobile}px) {
    align-items: center;
    margin-bottom: 20px;
  }
`

export const TitleOne = styled.h1`
  background: ${Colors.TEXT_GRADIENT_GREEN};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent 0.8;
  background-clip: text;
  text-fill-color: transparent;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.EXTRA_LARGE}px;
  font-weight: ${FontWeight.SEMI_BOLD};

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.NORMAL}px;
  }
`

export const TitleTwo = styled.h1`
  background: ${Colors.TEXT_GRADIENT_GREEN};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent 0.8;
  background-clip: text;
  text-fill-color: transparent;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.SUPER_LARGE}px;
  font-weight: ${FontWeight.SEMI_BOLD};

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.NORMAL}px;
  }
`

export const Subtitle = styled.p`
  width: 50%;
  align-self: flex-end;
  text-align: center;
  background: transparent;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.EXTRA_LIGHT};
  color: ${(props) => props.theme.subtitleColor};
  line-height: 187%;

  @media (max-width: ${Dimensions.mobile}px) {
    width: 90%;
  }
`

export const LogoWrapper = styled.div`
  background: transparent;
  width: 250px;
  height: 250px;
  margin-left: 120px;

  @media (max-width: ${Dimensions.mobile}px) {
    display: none;
  }
`

export const Logo = styled.img`
  background: transparent;
  width: 100%;
  height: 100%;
`
