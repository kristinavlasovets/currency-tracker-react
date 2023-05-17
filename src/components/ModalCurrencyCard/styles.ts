import styled from 'styled-components';

import { SelectMenuProps } from './types';

export const Wrapper = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.top.zero}px;
  left: ${({ theme }) => theme.left.zero}px;
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.hundred}%;
  background: ${({ theme }) => theme.colors.MODAL_BG};
  opacity: ${({ theme }) => theme.opacities.dotNine};
`;

export const ContentWrapper = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.top.fifty}%;
  left: ${({ theme }) => theme.left.fifty}%;
  width: ${({ theme }) => theme.width.fifty}%;
  height: auto;
  padding: ${({ theme }) => theme.paddings.fourty}px
    ${({ theme }) => theme.paddings.fourty}px
    ${({ theme }) => theme.paddings.hundred}px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  background: ${({ theme }) => theme.colors.DARK_GRAY};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.ninety}%;
    padding: ${({ theme }) => theme.paddings.fourty}px
      ${({ theme }) => theme.paddings.fourty}px
      ${({ theme }) => theme.paddings.fourty}px;
  }
`;

export const Button = styled.button`
  margin-bottom: ${({ theme }) => theme.margins.thirty}px;
  padding: ${({ theme }) => theme.paddings.five}px
    ${({ theme }) => theme.paddings.zero}px;
  width: ${({ theme }) => theme.width.hundredTen}px;
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
  z-index: ${({ theme }) => theme.zIndexes.one};
  transition: color 250ms ease-in-out;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: ${({ theme }) => theme.top.zero}px;
    left: ${({ theme }) => theme.left.fifty}%;
    transform: translateX(-50%);
    width: ${({ theme }) => theme.width.zero};
    height: ${({ theme }) => theme.height.hundred}%;
    color: ${({ theme }) => theme.colors.DARK_GRAY};
    font-weight: ${({ theme }) => theme.fontWeights.s};
    background: ${({ theme }) => theme.colors.LIGHT_GRAY};
    z-index: -${({ theme }) => theme.zIndexes.one};
    transition: width 250ms ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.DARK_GRAY};
    font-weight: ${({ theme }) => theme.fontWeights.xs};
    background: ${({ theme }) => theme.colors.LIGHT_GRAY};
    &:after {
      width: ${({ theme }) => theme.width.hundredTen}%;
    }
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.sixty}px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;

export const CurrencyWrapper = styled.div`
  margin: ${({ theme }) => theme.margins.ten}px auto;
  padding: ${({ theme }) => theme.paddings.ten}px;
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
  padding-left: ${({ theme }) => theme.paddings.twenty}px;
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  background: transparent;
`;

export const SelectWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.twenty}px;
  width: ${({ theme }) => theme.width.hundred}%;
  height: fit-content;
  display: flex;
  justify-content: center;
  position: relative;
  background: transparent;
`;

export const SelectButton = styled.button`
  width: ${({ theme }) => theme.width.eighty}%;
  height: ${({ theme }) => theme.height.seventy}px;
  border: 1px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  background: ${({ theme }) => theme.colors.DARK_GRAY};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.hundred}%;
    height: ${({ theme }) => theme.height.fourty}px;
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
  }
`;

export const SelectMenu = styled.ul<SelectMenuProps>`
  width: ${({ theme }) => theme.width.eighty}%;
  height: ${({ theme }) => theme.height.hundredSeventy}px;
  position: absolute;
  top: calc(100% + ${({ theme }) => theme.top.five}px);
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: ${({ theme }) => theme.borderRadiuses.xs}px;
  opacity: ${({ isDropdownVisible }) => (isDropdownVisible ? 1 : 0)};
  transform: ${({ isDropdownVisible }) =>
    isDropdownVisible ? 'translateY(0)' : 'translateY(-10px)'};
  transition: opacity 150ms ease-in-out;
  z-index: ${({ theme }) => theme.zIndexes.thousand};
  overflow: hidden;
  overflow-y: auto;
  pointer-events: ${({ isDropdownVisible }) =>
    isDropdownVisible ? 'all' : 'none'};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.hundred}%;
    height: ${({ theme }) => theme.height.hundredFifty}px;
  }
`;

export const SelectItem = styled.li`
  padding: ${({ theme }) => theme.paddings.five}px;
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
