import { Dimensions } from '@constants/styles/dimensions'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 50px 200px;
  width: 85%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-right: 210px;
  padding-bottom: 60px;

  @media (max-width: ${Dimensions.mobile}px) {
    margin: 0px auto;
    width: 100%;
    padding-right: 5px;
    padding-bottom: 50px;
  }
`
