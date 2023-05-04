import MyLogoSvg from '@assets/svg/logo/logo.svg'
import { bannerText } from '@constants/texts/components/banner'
import React, { FC } from 'react'

import {
  Logo,
  LogoWrapper,
  Subtitle,
  TextBlockWrapper,
  TitleOne,
  TitleTwo,
  TitleWrapper,
  Wrapper,
} from './styles'

const Banner: FC = () => {
  const { titleOne, titleTwo, subtitle, imgAlt } = bannerText

  return (
    <Wrapper>
      <TextBlockWrapper>
        <TitleWrapper>
          <TitleOne>{titleOne}</TitleOne>
          <TitleTwo>{titleTwo}</TitleTwo>
        </TitleWrapper>
        <Subtitle>{subtitle}</Subtitle>
      </TextBlockWrapper>
      <LogoWrapper>
        <Logo src={MyLogoSvg} alt={imgAlt} />
      </LogoWrapper>
    </Wrapper>
  )
}

export default Banner
