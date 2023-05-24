import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 38px auto 0;
  width: calc(100vw - 100px);
  max-width: 1130px;

  @media (max-width: 768px) {
    max-width: 640px;
    width: calc(100vw - 50px);
    margin-top: 25px;
  }

  @media (max-width: 500px) {
    width: 100%;
    width: calc(100vw - 20px);
    margin-top: 10px;
  }
`;
