import MyLogoSvg from '@assets/svg/logo/logo.svg'
import { NAVIGATION } from '@constants/routes/navigation'
import { headerText } from '@constants/texts/components/header'
import React, { FC, useState } from 'react'

import {
  HeaderLink,
  HeaderNav,
  HeaderWrapper,
  Logo,
  LogoWrapper,
  ToggleSwitch,
} from './styles'
import { HeaderProps } from './types'

const Header: FC<HeaderProps> = ({ toggleTheme, isDarkTheme }) => {
  const [isToggled, setIsToggled] = useState<boolean>(isDarkTheme)

  const onToggle = () => {
    setIsToggled(!isToggled)
    toggleTheme()
  }
  const { imgAlt, inputType } = headerText

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={MyLogoSvg} alt={imgAlt} />
      </LogoWrapper>
      <HeaderNav>
        {NAVIGATION.map(({ text, path }) => (
          <HeaderLink to={path} key={path}>
            {text}
          </HeaderLink>
        ))}
      </HeaderNav>
      <ToggleSwitch
        type={inputType}
        checked={isToggled}
        onChange={onToggle}
        data-cy="toggleTheme"
      />
    </HeaderWrapper>
  )
}

export default Header
