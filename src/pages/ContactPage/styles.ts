import { Colors } from '@constants/styles/colors'
import { Dimensions } from '@constants/styles/dimensions'
import { FontFamily, FontSize, FontWeight } from '@constants/styles/fonts'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 200px 0 200px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${Dimensions.mobile}px) {
    margin: 20px 0 40px;
  }
`

export const Title = styled.h3`
  padding-bottom: 40px;
  font-family: ${FontFamily.INTER};
  font-size: ${FontSize.NORMAL}px;
  font-weight: ${FontWeight.LIGHT};
  color: ${Colors.GREEN};
  line-height: 150%;

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.TINY}px;
  }
`

export const Text = styled.p`
  padding-bottom: 15px;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.LIGHT};
  color: ${Colors.FOOTER_GRAY};
  line-height: 150%;

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.EXTRA_TINY}px;
  }
`
