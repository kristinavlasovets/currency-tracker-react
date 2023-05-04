import { Dimensions } from '@constants/styles/dimensions'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 77px);
  margin-bottom: 210px;

  @media (max-width: ${Dimensions.mobile}px) {
    height: 70vh;
    margin-bottom: 50px;
  }
`
export const Map = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
