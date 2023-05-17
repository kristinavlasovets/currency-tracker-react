import styled from 'styled-components';

import { DataResultProps } from './types';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.eighty}px auto;
  width: ${({ theme }) => theme.width.hundred}%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.margins.ten}px auto;
  }
`;

export const Text = styled.p`
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${(props) => props.theme.subtitleColor};
  line-height: 125%;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
  }
`;

export const Search = styled.div`
  margin: ${({ theme }) => theme.margins.thirty}px auto;
  height: ${({ theme }) => theme.height.hundredEighty}px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.margins.twenty}px auto;
    height: ${({ theme }) => theme.height.eighty}px;
  }
`;

export const SearchInputs = styled.div`
  width: ${({ theme }) => theme.width.hundred}%;
`;

export const Input = styled.input`
  position: relative;
  width: ${({ theme }) => theme.width.threeHundredFifty}px;
  height: ${({ theme }) => theme.height.fourtyFive}px;
  padding: ${({ theme }) => theme.paddings.fifteen}px;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${({ theme }) => theme.colors.SEARCH_LIGHT_GRAY};
  background: ${({ theme }) => theme.colors.SEARCH_DARK_GRAY};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.hundredEighty}px;
    height: ${({ theme }) => theme.height.thirty}px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  transform: translate(315px, -140%);
  width: ${({ theme }) => theme.width.twentyFive}px;
  height: ${({ theme }) => theme.height.twentyFive}px;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    display: none;
  }
`;

export const SearchIcon = styled.img`
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.hundred}%;
  padding: ${({ theme }) => theme.paddings.five}px;
  cursor: pointer;
  background: transparent;
`;

export const DataResult = styled.div<DataResultProps>`
  margin-top: ${({ theme }) => theme.margins.five}px;
  width: ${({ theme }) => theme.width.threeHundredFifty}px;
  height: ${({ theme }) => theme.height.hundredFifty}px;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;

  overflow: hidden;
  overflow-y: auto;

  opacity: ${({ isDropdownVisible }) => (isDropdownVisible ? 1 : 0)};
  transform: ${({ isDropdownVisible }) =>
    isDropdownVisible ? 'translateY(0)' : 'translateY(-10px)'};
  pointer-events: ${({ isDropdownVisible }) =>
    isDropdownVisible ? 'all' : 'none'};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.hundredEighty}px;
    height: ${({ theme }) => theme.height.eighty}px;
  }
`;

export const DataItem = styled.div`
  width: ${({ theme }) => theme.width.hundred}%;
  padding: ${({ theme }) => theme.paddings.ten}px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${({ theme }) => theme.colors.SEARCH_LIGHT_GRAY};
  background: ${({ theme }) => theme.colors.SEARCH_DARK_GRAY};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.GREEN};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.five}px;
    padding-left: ${({ theme }) => theme.paddings.fifteen}px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;

export const MapWrapper = styled.div`
  position: relative;
  width: ${({ theme }) => theme.width.hundred}%;
  height: calc(100vh - 77px);
  margin-bottom: ${({ theme }) => theme.margins.twoHundredsTen}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    height: ${({ theme }) => theme.height.seventy}vh;
    margin-bottom: ${({ theme }) => theme.margins.fifty}px;
  }
`;
export const Map = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.hundred}%;
`;
