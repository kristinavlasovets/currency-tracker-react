import { Colors } from '@constants/styles/colors'
import { FontFamily, FontSize, FontWeight } from '@constants/styles/fonts'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.DARK_GRAY};
`
export const ErrorMessage = styled.p`
  margin: 20vh auto;
  font-family: ${FontFamily.POPPINS};
  font-size: ${FontSize.NORMAL}px;
  font-weight: ${FontWeight.EXTRA_LIGHT};
  color: ${Colors.LIGHT_GRAY};
  line-height: 141%;
  background: transparent;
`
