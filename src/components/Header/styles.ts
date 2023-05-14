import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HeaderLinkProps, HeaderNavProps } from './types';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: 20px 50px 0px;
    height: fit-content;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

export const ToggleMenu = styled.a`
  position: absolute;
  top: 15px;
  right: 15px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 19px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    display: flex;
  }
`;

export const Bar = styled.span`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: ${({ theme }) => theme.borderRadiuses.m}px;
`;

export const HeaderNav = styled.nav<HeaderNavProps>`
  padding: 0px 50px 0px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: 0px;
    flex-direction: column;
    align-items: flex-start;
    display: ${({ isBurgerMenuVisible }) =>
      isBurgerMenuVisible ? 'flex' : 'none'};
  }
`;

export const LogoWrapper = styled.div`
  width: 30px;
  height: 30px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-bottom: 10px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeaderLink = styled(Link)<HeaderLinkProps>`
  position: relative;
  margin-right: 120px;
  &:last-of-type {
    margin-right: 0;
  }
  color: ${(props) => props.theme.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};

  &:after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.GREEN};
    height: 3px;
    width: ${({ isActive }) => (isActive ? '100%' : 0)};
    left: 0;
    bottom: -8px;
    transition: 0.3s;
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding-right: 0px;
  }
`;

export const ToggleSwitch = styled.input`
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  height: 20px;
  width: 40px;
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
    height: 16px;
    width: 16px;
    left: 20px;
    background-color: ${(props) => props.theme.bodyColor};
    border-radius: ${({ theme }) => theme.borderRadiuses.xl}%;
    border: 1px solid ${(props) => props.theme.fontColor};
    cursor: pointer;
    transition: 0.3s;
  }

  &:checked::before {
    left: 0px;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
