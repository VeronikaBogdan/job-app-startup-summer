import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../styles/theme';
import { Container } from '../layout/styled-layout';
import { FINAL_VACANCY_ID_INDEX, START_INDEX, VACANCY_PATH } from '../../app-constants';

export const StyledHeader = styled.header`
  background-color: ${colors.grey[0]};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 0;

  div:first-child {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 20px 0px;
    height: ${({ isOpen }) => (isOpen ? '110px' : '75px')};
    align-items: flex-start;
    justify-content: flex-start;

    div:first-child {
      display: block;
      position: absolute;
      left: 10px;
    }
  }
`;

export const LogoLink = styled(Link)`
  width: 141px;
  height: 36px;
  position: absolute;
  left: 0;

  @media (max-width: 768px) {
    left: 45px;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 275px;
  width: 100%;
  padding: 32px 0px;
  margin-right: 50px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    padding: 0;
    margin-left: 10px;
    padding-top: 50px;
    background-color: ${colors.grey[0]};
  }
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ to, pathname }) =>
    pathname === to ||
    (pathname.slice(START_INDEX, FINAL_VACANCY_ID_INDEX) === VACANCY_PATH && to === '/')
      ? colors.blue[1]
      : colors.grey[7]};
  background-color: ${colors.grey[0]};

  &:hover {
    color: ${colors.blue[2]};
  }

  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
