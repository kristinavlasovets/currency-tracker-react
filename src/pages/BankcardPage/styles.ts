import styled from 'styled-components';

import { DataResultProps } from './types';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.eighty}px auto;
  width: 100%;
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
  height: 180px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.margins.twenty}px auto;
    height: 80px;
  }
`;

export const SearchInputs = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  position: relative;
  width: 350px;
  height: 45px;
  padding: 15px;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${({ theme }) => theme.colors.SEARCH_LIGHT_GRAY};
  background: ${({ theme }) => theme.colors.SEARCH_DARK_GRAY};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 180px;
    height: 30px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  transform: translate(315px, -140%);
  width: 25px;
  height: 25px;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    display: none;
  }
`;

export const SearchIcon = styled.img`
  width: 100%;
  height: 100%;
  padding: 5px;
  cursor: pointer;
  background: transparent;
`;

export const DataResult = styled.div<DataResultProps>`
  margin-top: ${({ theme }) => theme.margins.five}px;
  width: 350px;
  height: 150px;
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
    width: 180px;
    height: 80px;
  }
`;

export const DataItem = styled.div`
  width: 100%;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${({ theme }) => theme.colors.SEARCH_LIGHT_GRAY};
  background: ${({ theme }) => theme.colors.SEARCH_DARK_GRAY};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.GREEN};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: 5px;
    padding-left: 15px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;

export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 77px);
  margin-bottom: ${({ theme }) => theme.margins.twoHundredsTen}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    height: 70vh;
    margin-bottom: ${({ theme }) => theme.margins.fifty}px;
  }
`;
export const Map = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
