import styled from 'styled-components';
import theme from 'src/theme';

export const StyledContainer = styled.div`
  padding: 0;
  position: fixed;
`;

export const StyledCaret = styled.div`
  padding: 8px;
  border-radius: 50%;
  background: ${theme.colors.iBlue};
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transition: all 0.1s linear;
  }
`;
