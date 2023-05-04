import { Colors } from '@constants/styles/colors'
import { Dimensions } from '@constants/styles/dimensions'
import { FontFamily, FontSize, FontWeight } from '@constants/styles/fonts'
import styled from 'styled-components'

export const Wrapper = styled.footer`
  width: 100%;
  height: 380px;
  padding: 0 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${Dimensions.mobile}px) {
    padding: 10px;
    height: fit-content;
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${Dimensions.mobile}px) {
    padding: 10px;
    flex-direction: column;
    height: fit-content;
  }
`

export const ChapterWrapper = styled.div`
  width: 480px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${Dimensions.mobile}px) {
    width: 100%;
  }
`

export const ChapterTitleWrapper = styled.div`
  background: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

export const ChapterTitle = styled.h2`
  padding-bottom: 40px;
  background: ${Colors.TEXT_GRADIENT_GREEN};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent 0.8;
  background-clip: text;
  text-fill-color: transparent;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.SMALL}px;
  font-weight: ${FontWeight.SEMI_BOLD};

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.TINY}px;
    padding-bottom: 10px;
  }
`

export const ChapterText = styled.p`
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.EXTRA_LIGHT};
  line-height: 150%;

  @media (max-width: ${Dimensions.mobile}px) {
    margin-bottom: 20px;
    font-size: ${FontSize.EXTRA_TINY}px;
  }
`

export const SubchapterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubchapterTitle = styled.h3`
  padding-bottom: 40px;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.LIGHT};
  line-height: 150%;

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.EXTRA_TINY}px;
    padding-bottom: 10px;
  }
`

export const SubchapterText = styled.p`
  padding-bottom: 15px;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.LIGHT};
  color: ${Colors.FOOTER_GRAY};
  line-height: 150%;

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.EXTRA_TINY}px;
    padding-bottom: 5px;
  }
`

export const CopyrightNoticeWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${Dimensions.mobile}px) {
    height: fit-content;
    padding-bottom: 10px;
  }
`

export const CopyrightNotice = styled.p`
  font-family: ${FontFamily.INTER};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.REGULAR};
  color: ${Colors.FOOTER_GRAY};

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.EXTRA_TINY}px;
  }
`
