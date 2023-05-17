import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HeaderLinkProps, HeaderNavProps } from './types';

export const HeaderWrapper = styled.header`
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.hundred}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.twenty}px
      ${({ theme }) => theme.paddings.fifty}px
      ${({ theme }) => theme.paddings.zero}px;
    height: fit-content;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

export const ToggleMenu = styled.a`
  position: absolute;
  top: ${({ theme }) => theme.top.fifteen}px;
  right: ${({ theme }) => theme.right.fifteen}px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ theme }) => theme.width.thirty}px;
  height: ${({ theme }) => theme.height.nineteen}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    display: flex;
  }
`;

export const Bar = styled.span`
  height: ${({ theme }) => theme.height.one}px;
  width: ${({ theme }) => theme.width.hundred}%;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: ${({ theme }) => theme.borderRadiuses.m}px;
`;

export const HeaderNav = styled.nav<HeaderNavProps>`
  padding: ${({ theme }) => theme.paddings.zero}px
    ${({ theme }) => theme.paddings.fifty}px
    ${({ theme }) => theme.paddings.zero}px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.zero}px;
    flex-direction: column;
    align-items: flex-start;
    display: ${({ isBurgerMenuVisible }) =>
      isBurgerMenuVisible ? 'flex' : 'none'};
  }
`;

export const LogoWrapper = styled.div`
  width: ${({ theme }) => theme.width.thirty}px;
  height: ${({ theme }) => theme.height.thirty}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-bottom: ${({ theme }) => theme.margins.ten}px;
  }
`;

export const Logo = styled.img`
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.hundred}%;
`;

export const HeaderLink = styled(Link)<HeaderLinkProps>`
  position: relative;
  margin-right: ${({ theme }) => theme.margins.hundredTwenty}px;

  &:last-of-type {
    margin-right: ${({ theme }) => theme.margins.zero}px;
  }
  color: ${(props) => props.theme.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};

  &:after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.GREEN};
    height: ${({ theme }) => theme.height.three}px;
    width: ${({ isactive }) => (isactive === 'true' ? '100%' : 0)};
    left: ${({ theme }) => theme.left.zero}px;
    bottom: -${({ theme }) => theme.bottom.eight}px;
    transition: 0.3s;
  }

  &:hover:after {
    width: ${({ theme }) => theme.width.hundred}%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding-right: ${({ theme }) => theme.paddings.zero}px;
    margin-bottom: ${({ theme }) => theme.margins.five}px;

    &:after {
      bottom: -${({ theme }) => theme.bottom.three}px;
    }
  }
`;

export const ToggleSwitch = styled.input`
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  height: ${({ theme }) => theme.height.twenty}px;
  width: ${({ theme }) => theme.width.fourty}px;
  background-color: ${(props) => props.theme.bodyColor};
  border-radius: ${({ theme }) => theme.borderRadiuses.l}px;
  border: 1px solid ${(props) => props.theme.fontColor};
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${(props) => props.theme.fontColor};
  }

  &:before {
    content: '';
    position: absolute;
    height: ${({ theme }) => theme.height.sixteen}px;
    width: ${({ theme }) => theme.width.sixteen}px;
    left: ${({ theme }) => theme.left.twenty}px;
    background-color: ${(props) => props.theme.bodyColor};
    border-radius: ${({ theme }) => theme.borderRadiuses.xl}%;
    border: 1px solid ${(props) => props.theme.fontColor};
    cursor: pointer;
    transition: 0.3s;
  }

  &:checked::before {
    left: ${({ theme }) => theme.left.zero}px;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-top: ${({ theme }) => theme.margins.ten}px;
    margin-bottom: ${({ theme }) => theme.margins.ten}px;
  }
`;
