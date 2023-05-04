import { Colors } from '@constants/styles/colors'
import { Dimensions } from '@constants/styles/dimensions'
import { FontFamily, FontSize, FontWeight } from '@constants/styles/fonts'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${Colors.MODAL_BG};
`

export const ContentWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: auto;
  padding: 80px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${Colors.LIGHT_GRAY};
  border-radius: 8px;
  background: ${Colors.DARK_GRAY};

  @media (max-width: ${Dimensions.mobile}px) {
    width: 90%;
  }
`

export const Button = styled.button`
  margin: 20px;
  padding: 5px 0;
  width: 110px;
  outline: none;
  border: 1px solid ${Colors.LIGHT_GRAY};
  border-radius: 8px;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.EXTRA_LIGHT};
  color: ${Colors.LIGHT_GRAY};
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 250ms ease-in-out;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    color: ${Colors.DARK_GRAY};
    font-weight: ${FontWeight.REGULAR};
    background: ${Colors.LIGHT_GRAY};
    z-index: -1;
    transition: width 250ms ease-in-out;
  }

  &:hover {
    color: ${Colors.DARK_GRAY};
    font-weight: ${FontWeight.LIGHT};
    background: ${Colors.LIGHT_GRAY};
    &:after {
      width: 110%;
    }
  }

  @media (max-width: ${Dimensions.mobile}px) {
    width: 80px;
  }
`

export const CurrencyWrapper = styled.div`
  margin: 10px auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background: transparent;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.SMALL}px;
  font-weight: ${FontWeight.EXTRA_LIGHT};
  line-height: 130%;
  background: transparent;
  border: 1px solid ${Colors.LIGHT_GRAY};
  border-radius: 8px;

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.TINY}px;
  }
`

export const Name = styled.p`
  color: ${Colors.LIGHT_GRAY};
  background: transparent;
`

export const Status = styled.p`
  padding-left: 20px;
  color: ${Colors.LIGHT_GRAY};
  background: transparent;
`

export const SelectWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  position: relative;
  background: transparent;
`

export const SelectButton = styled.button`
  width: 80%;
  height: 70px;
  pointer-events: none;
  border: 1px solid ${Colors.LIGHT_GRAY};
  border-radius: 8px;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.NORMAL}px;
  font-weight: ${FontWeight.LIGHT};
  color: ${Colors.LIGHT_GRAY};
  background: ${Colors.DARK_GRAY};

  @media (max-width: ${Dimensions.mobile}px) {
    width: 100%;
    height: 40px;
    font-size: ${FontSize.TINY}px;
  }
`

export const SelectMenu = styled.ul`
  width: 80%;
  height: 170px;
  position: absolute;
  top: calc(100% + 5px);
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: 4px;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 150ms ease-in-out;
  z-index: 1000;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  ${SelectWrapper}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: ${Dimensions.mobile}px) {
    width: 100%;
    height: 150px;
  }
`

export const SelectItem = styled.li`
  padding: 5px;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.LIGHT};
  color: ${Colors.LIGHT_GRAY};
  background: ${Colors.DARK_GRAY};
  cursor: pointer;

  &:hover {
    color: ${Colors.GREEN};
  }

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.TINY}px;
  }
`
