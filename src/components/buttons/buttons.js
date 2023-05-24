import styled from 'styled-components';

import { colors } from '@/styles/theme';

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${colors.blue[1]};
  border: 0;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${colors.grey[0]};

  &:hover {
    background: ${colors.blue[2]};
  }

  &:active {
    background: ${colors.blue[0]};
  }
`;

export const SearchButton = styled(Button)`
  margin-right: -1px;
  letter-spacing: 0.8px;
  width: 97px;
  height: 32px;
`;
