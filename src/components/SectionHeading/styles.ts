import { Colors } from '@constants/styles/colors'
import { Dimensions } from '@constants/styles/dimensions'
import { FontFamily, FontSize, FontWeight } from '@constants/styles/fonts'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 50px 0;
  width: 400px;

  @media (max-width: ${Dimensions.mobile}px) {
    margin: 10px 0;
    width: 110px;
    padding-left: 5px;
  }
`

export const Text = styled.p`
  padding-bottom: 25px;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.NORMAL}px;
  font-weight: ${FontWeight.EXTRA_LIGHT};
  line-height: 129%;

  @media (max-width: ${Dimensions.mobile}px) {
    padding-left: 5px;
    padding-bottom: 5px;
    font-size: ${FontSize.SMALL}px;
  }
`

export const Divider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 2px solid ${Colors.MEDIUM_GRAY};
`
