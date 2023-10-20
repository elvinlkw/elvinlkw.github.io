import theme from 'src/theme';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: #fcfcfc;
  min-height: 100vh;

  h1 {
    color: ${theme.colors.iBlue};
    margin-bottom: 32px;
  }

  label,
  label:hover {
    background-color: ${theme.colors.white};
    border: none;
  }
`;

export const StyledProjectcard = styled.div`
  img {
    height: 250px;
    width: 400px;
  }
`;
