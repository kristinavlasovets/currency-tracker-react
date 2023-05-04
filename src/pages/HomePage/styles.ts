import { Dimensions } from '@constants/styles/dimensions'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 210px;

  @media (max-width: ${Dimensions.mobile}px) {
    padding: 0;
  }
`
export const CardWrapper = styled.div`
  margin-bottom: 80px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`
