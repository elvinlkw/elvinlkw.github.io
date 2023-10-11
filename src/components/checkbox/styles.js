import styled from 'styled-components';
import theme from 'src/theme';

export const StyledCheckboxContainer = styled.div`
  /* .checkbox:hover {
    background-image: linear-gradient(
        -45deg,
        transparent 65%,
        ${theme.colors.iBlue} 65.99%
      ),
      linear-gradient(45deg, transparent 75%, ${theme.colors.iBlue} 75.99%),
      linear-gradient(-45deg, ${theme.colors.iBlue} 40%, transparent 40.99%),
      linear-gradient(
        45deg,
        ${theme.colors.iBlue} 30%,
        ${theme.colors.white} 30.99%,
        ${theme.colors.white} 40%,
        transparent 40.99%
      ),
      linear-gradient(
        -45deg,
        ${theme.colors.white} 50%,
        ${theme.colors.iBlue} 50.99%
      );
    opacity: 0.25; */
  }

  .checkbox:checked {
    background-color: ${theme.colors.iBlue};
    background-image: linear-gradient(
        -45deg,
        transparent 65%,
        ${theme.colors.iBlue} 65.99%
      ),
      linear-gradient(45deg, transparent 75%, ${theme.colors.iBlue} 75.99%),
      linear-gradient(-45deg, ${theme.colors.iBlue} 40%, transparent 40.99%),
      linear-gradient(
        45deg,
        ${theme.colors.iBlue} 30%,
        ${theme.colors.white} 30.99%,
        ${theme.colors.white} 40%,
        transparent 40.99%
      ),
      linear-gradient(
        -45deg,
        ${theme.colors.white} 50%,
        ${theme.colors.iBlue} 50.99%
      );
  }
`;
