import { Dimensions } from '@constants/styles/dimensions'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { FontFamily, FontSize, FontWeight } from '../../constants/styles/fonts'

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${Dimensions.mobile}px) {
    height: 150px;
  }
`
export const HeaderNav = styled.nav`
  padding: 0px 50px 0px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${Dimensions.mobile}px) {
    flex-direction: column;
  }
`

export const LogoWrapper = styled.div`
  width: 30px;
  height: 30px;
`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`

export const HeaderLink = styled(Link)`
  padding-right: 120px;
  &:last-of-type {
    padding-right: 0;
  }
  color: ${(props) => props.theme.fontColor};
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.LIGHT};

  @media (max-width: ${Dimensions.mobile}px) {
    padding-right: 0px;
  }
`

export const ToggleSwitch = styled.input`
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  height: 20px;
  width: 40px;
  background-color: ${(props) => props.theme.bodyColor};
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.fontColor};
  cursor: pointer;
  outline: none;

  &:before {
    content: '';
    position: absolute;
    height: 16px;
    width: 16px;
    left: 20px;
    background-color: ${(props) => props.theme.bodyColor};
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.fontColor};
    cursor: pointer;
    transition: 0.3s;
  }

  &:checked::before {
    left: 0px;
  }
`
