import React from 'react';
import { useLocation } from 'react-router-dom';
import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import { HeaderContainer, Links, LogoLink, StyledHeader, StyledLink } from './styled-header';

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <HeaderContainer isOpen={opened}>
        <Burger opened={opened} onClick={toggle} />
        <LogoLink to='/'>
          <Logo />
        </LogoLink>
        <Links isOpen={opened}>
          <StyledLink to='/' pathname={pathname}>
            Поиск Вакансий
          </StyledLink>
          <StyledLink to='/favorites' pathname={pathname}>
            Избранное
          </StyledLink>
        </Links>
      </HeaderContainer>
    </StyledHeader>
  );
};
