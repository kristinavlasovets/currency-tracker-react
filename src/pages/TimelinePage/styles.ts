import { Dimensions } from '@constants/styles/dimensions'
import { FontFamily, FontSize, FontWeight } from '@constants/styles/fonts'
import styled from 'styled-components'

export const SelectWrapper = styled.div`
  margin: 40px auto 100px;
  width: 100%;
  height: fit-content;
  padding-left: 14vw;
  position: relative;

  @media (max-width: ${Dimensions.mobile}px) {
    margin: 0 auto;
  }
`

export const SelectButton = styled.button`
  width: 140px;
  height: 30px;
  pointer-events: none;
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: 4px;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.LIGHT};
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${Dimensions.mobile}px) {
    width: 60px;
    height: 20px;
    font-size: ${FontSize.EXTRA_TINY}px;
  }
`

export const SelectMenu = styled.ul`
  width: 140px;
  height: fit-content;
  position: absolute;
  left: 14vw;
  top: calc(100% + 5px);
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: 4px;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 150ms ease-in-out;

  ${SelectWrapper}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: ${Dimensions.mobile}px) {
    top: calc(100% + 1px);
    width: 60px;
    height: fit-content;
  }
`

export const SelectItem = styled.li`
  padding: 5px;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.LIGHT};
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bodyColor};

  &:hover {
    background-color: ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.bodyColor};
  }

  @media (max-width: ${Dimensions.mobile}px) {
    padding: 1px;
    font-size: ${FontSize.EXTRA_TINY}px;
  }
`

export const CurrencyNameWrapper = styled.div`
  margin-top: 30px;
  width: 400px;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 14vw;
  gap: 20px;
  background: transparent;

  @media (max-width: ${Dimensions.mobile}px) {
    margin-top: 35px;
    width: 200px;
    height: 40px;
  }
`

export const CurrencyIconWrapper = styled.div`
  width: 55px;
  height: 55px;
  background: transparent;

  @media (max-width: ${Dimensions.mobile}px) {
    width: 20px;
    height: 20px;
  }
`

export const CurrencyIcon = styled.img`
  width: 100%;
  height: 100%;
  background: transparent;
`

export const CurrencyName = styled.p`
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.EXTRA_LIGHT};
  color: ${(props) => props.theme.fontColor};
  line-height: 141%;
  background: transparent;

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.EXTRA_TINY}px;
  }
`
