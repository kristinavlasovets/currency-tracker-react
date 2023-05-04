import { Dimensions } from '@constants/styles/dimensions'
import { FontFamily, FontSize, FontWeight } from '@constants/styles/fonts'
import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% {transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1); opacity: 0.5;}
  100% {transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.9); opacity: 0.2;}`

export const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;

  @media (max-width: ${Dimensions.mobile}px) {
    width: 20px;
    height: 20px;
  }
`

export const LargeIcon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 50px;
  opacity: 0.1;

  @media (max-width: ${Dimensions.mobile}px) {
    min-width: 25px;
    min-height: 25px;
  }
`

export const MediumIcon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 20px;
  height: 20px;
  -webkit-animation: ${pulse} 2s ease-out infinite;
  animation: ${pulse} 2s ease-out infinite;

  @media (max-width: ${Dimensions.mobile}px) {
    width: 10px;
    height: 10px;
  }
`

export const SmallIcon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 15px;
  height: 15px;
  opacity: 0.7;

  @media (max-width: ${Dimensions.mobile}px) {
    width: 7px;
    height: 7px;
  }
`

export const Text = styled.p`
  padding-left: 18px;
  background: transparent;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.NORMAL}px;
  font-weight: ${FontWeight.EXTRA_LIGHT};
  color: ${(props) => props.theme.subtitleColor};
  line-height: 125%;

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.TINY}px;
  }
`
