import styled from 'styled-components'
import { Colors } from '../../constants/styles/colors'

export const StyledBannerTitleWrapper = styled.div`
  width: 700px;
  height: 120px;
  background: ${Colors.TITLE_GRADIENT_GREEN};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`
