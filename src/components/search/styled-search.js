import styled from 'styled-components';

import { colors } from '../../styles/theme';

export const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background: ${colors.grey[0]};
  border: 1px solid ${colors.grey[3]};
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    border: 1px solid ${colors.blue[1]};
  }

  &:focus-within {
    border: 1px solid ${colors.blue[1]};
  }

  svg {
    width: 20px;
    height: 20px;
    margin: 4px 4px 0 1px;
  }

  @media (max-width: 500px) {
    padding: 0 5px;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 0;
  padding: 13px 3px 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.4px;
  color: ${colors.grey[7]};

  &::placeholder {
    color: ${colors.grey[5]};

    @media (max-width: 500px) {
      font-size: 13px;
      line-height: 17px;
    }
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  &:focus {
    caret-color: ${colors.blue[1]};
    outline: none;
  }
`;
