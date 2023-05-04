import { Colors } from '@constants/styles/colors'
import { Dimensions } from '@constants/styles/dimensions'
import { FontFamily, FontSize, FontWeight } from '@constants/styles/fonts'
import styled, { keyframes } from 'styled-components'

const hint = keyframes`
  0% {transform:  scale(1)}
  100% {transform: scale(1.02)}`

export const CardWrapper = styled.div`
  margin-top: 30px;
  width: 400px;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  gap: 20px;
  background: ${(props) => props.theme.currencyCardColor};
  border: 1px solid ${Colors.MEDIUM_GRAY};
  border-radius: 8px;

  &:hover {
    -webkit-animation: ${hint} 200ms ease-out;
    animation: ${hint} 200ms ease-out;
  }

  @media (max-width: ${Dimensions.mobile}px) {
    margin: 10px 10px 0px 10px;
    width: 180px;
    height: 45px;
  }
`

export const CardIconWrapper = styled.div`
  width: 55px;
  height: 55px;
  background: transparent;

  @media (max-width: ${Dimensions.mobile}px) {
    width: 25px;
    height: 25px;
  }
`

export const CardIcon = styled.img`
  width: 100%;
  height: 100%;
  background: transparent;
`

export const CardCurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
`

export const CardName = styled.p`
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.SMALL}px;
  font-weight: ${FontWeight.EXTRA_LIGHT};
  color: ${Colors.LIGHT_GRAY};
  line-height: 141%;
  background: transparent;

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.TINY}px;
    line-height: 100%;
  }
`

export const CardStatus = styled.p`
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.EXTRA_LIGHT};
  color: ${Colors.GRAY};
  line-height: 129%;
  background: transparent;

  @media (max-width: ${Dimensions.mobile}px) {
    padding-top: 5px;
    font-size: ${FontSize.EXTRA_TINY}px;
    line-height: 100%;
  }
`
