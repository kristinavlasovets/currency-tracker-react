import { FontFamily, FontSize, FontWeight } from '@constants/styles/fonts'
import styled from 'styled-components'

export const Message = styled.div`
  width: 100%;
  margin: 45vh auto;
  display: flex;
  justify-content: center;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.EXTRA_LARGE}px;
  font-weight: ${FontWeight.LIGHT};
`
