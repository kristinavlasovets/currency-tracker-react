import styled from 'styled-components';

import { SelectMenuProps } from './types';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.MODAL_BG};
  opacity: 0.9;
`;

export const ContentWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: auto;
  padding: 40px 40px 80px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  background: ${({ theme }) => theme.colors.DARK_GRAY};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  margin-bottom: 30px;
  padding: 5px 0;
  width: 110px;
  align-self: flex-end;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
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
    color: ${({ theme }) => theme.colors.DARK_GRAY};
    font-weight: ${({ theme }) => theme.fontWeights.s};
    background: ${({ theme }) => theme.colors.LIGHT_GRAY};
    z-index: -1;
    transition: width 250ms ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.DARK_GRAY};
    font-weight: ${({ theme }) => theme.fontWeights.xs};
    background: ${({ theme }) => theme.colors.LIGHT_GRAY};
    &:after {
      width: 110%;
    }
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 80px;
  }
`;

export const CurrencyWrapper = styled.div`
  margin: 10px auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  line-height: 130%;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  background: transparent;
`;

export const Status = styled.p`
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  background: transparent;
`;

export const SelectWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  position: relative;
  background: transparent;
`;

export const SelectButton = styled.button`
  width: 80%;
  height: 70px;
  border: 1px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  background: ${({ theme }) => theme.colors.DARK_GRAY};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 100%;
    height: 40px;
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
  }
`;

export const SelectMenu = styled.ul<SelectMenuProps>`
  width: 80%;
  height: 170px;
  position: absolute;
  top: calc(100% + 5px);
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: ${({ theme }) => theme.borderRadiuses.xs}px;
  opacity: ${({ isDropdownVisible }) => (isDropdownVisible ? 1 : 0)};
  transform: ${({ isDropdownVisible }) =>
    isDropdownVisible ? 'translateY(0)' : 'translateY(-10px)'};
  transition: opacity 150ms ease-in-out;
  z-index: 1000;
  overflow: hidden;
  overflow-y: auto;
  pointer-events: ${({ isDropdownVisible }) =>
    isDropdownVisible ? 'all' : 'none'};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 100%;
    height: 150px;
  }
`;

export const SelectItem = styled.li`
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  background: ${({ theme }) => theme.colors.DARK_GRAY};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.GREEN};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
  }
`;
