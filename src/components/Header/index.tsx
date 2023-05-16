import React, { FC, memo, useState } from 'react';

import MyLogoSvg from '@assets/svg/logo/logo.svg';
import { headerText } from '@constants/config/components';
import { NAVIGATION } from '@constants/routes/navigation';

import {
  Bar,
  HeaderLink,
  HeaderNav,
  HeaderWrapper,
  Logo,
  LogoWrapper,
  ToggleMenu,
  ToggleSwitch,
} from './styles';
import { HeaderProps } from './types';

const Header: FC<HeaderProps> = memo(({ toggleTheme, isDarkTheme }) => {
  const [isToggled, setIsToggled] = useState<boolean>(isDarkTheme);
  const [isActiveLink, setIsActiveLink] = useState<number>(0);
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] =
    useState<boolean>(false);

  const onHandlerToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  const onHandlerActiveLink = (index: number) => () => {
    setIsActiveLink(index);
  };

  const onHandlerShowMenu = () => {
    setIsBurgerMenuVisible(!isBurgerMenuVisible);
  };
  const { imgAlt, inputType } = headerText;

  return (
    <HeaderWrapper>
      <ToggleMenu href="#" onClick={onHandlerShowMenu}>
        <Bar />
        <Bar />
        <Bar />
      </ToggleMenu>
      <LogoWrapper>
        <Logo src={MyLogoSvg} alt={imgAlt} />
      </LogoWrapper>
      <HeaderNav isBurgerMenuVisible={isBurgerMenuVisible}>
        {NAVIGATION.map(({ text, path }, index) => (
          <HeaderLink
            to={path}
            key={path}
            onClick={onHandlerActiveLink(index)}
            isactive={(isActiveLink === index).toString()}
          >
            {text}
          </HeaderLink>
        ))}
      </HeaderNav>
      <ToggleSwitch
        type={inputType}
        checked={isToggled}
        onChange={onHandlerToggle}
        data-cy="toggleTheme"
      />
    </HeaderWrapper>
  );
});

export default Header;
