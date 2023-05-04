import { Colors } from '@constants/styles/colors'
import { Dimensions } from '@constants/styles/dimensions'
import { FontFamily, FontSize, FontWeight } from '@constants/styles/fonts'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 80px auto;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${Dimensions.mobile}px) {
    margin: 10px auto;
  }
`

export const Text = styled.p`
  background: transparent;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.NORMAL}px;
  font-weight: ${FontWeight.LIGHT};
  color: ${(props) => props.theme.subtitleColor};
  line-height: 125%;

  @media (max-width: ${Dimensions.mobile}px) {
    font-size: ${FontSize.TINY}px;
  }
`

export const Search = styled.div`
  margin: 30px auto;
  height: 180px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${Dimensions.mobile}px) {
    margin: 20px auto;
    height: 80px;
  }
`

export const SearchInputs = styled.div`
  width: 100%;
`

export const Input = styled.input`
  position: relative;
  width: 350px;
  height: 45px;
  padding: 15px;
  border: 0;
  border-radius: 8px;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.LIGHT};
  color: ${Colors.SEARCH_LIGHT_GRAY};
  background: ${Colors.SEARCH_DARK_GRAY};

  @media (max-width: ${Dimensions.mobile}px) {
    width: 180px;
    height: 30px;
    font-size: ${FontSize.EXTRA_TINY}px;
  }
`

export const SearchIconWrapper = styled.div`
  position: absolute;
  transform: translate(315px, -140%);
  width: 25px;
  height: 25px;
  background: transparent;

  @media (max-width: ${Dimensions.mobile}px) {
    display: none;
  }
`

export const SearchIcon = styled.img`
  width: 100%;
  height: 100%;
  padding: 5px;
  cursor: pointer;
  background: transparent;
`

export const DataResult = styled.div`
  margin-top: 5px;
  width: 350px;
  height: 150px;
  border: 0;
  border-radius: 8px;

  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${Dimensions.mobile}px) {
    width: 180px;
    height: 80px;
  }
`

export const DataItem = styled.div`
  width: 100%;
  padding: 10px;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.TINY}px;
  font-weight: ${FontWeight.LIGHT};
  color: ${Colors.SEARCH_LIGHT_GRAY};
  background: ${Colors.SEARCH_DARK_GRAY};
  cursor: pointer;

  &:hover {
    color: ${Colors.GREEN};
  }

  @media (max-width: ${Dimensions.mobile}px) {
    padding: 5px;
    padding-left: 15px;
    font-size: ${FontSize.EXTRA_TINY}px;
  }
`
