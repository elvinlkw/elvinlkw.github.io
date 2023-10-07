import styled from 'styled-components';
import theme from 'src/theme';

export const StyledBubble = styled.div`
  & {
    border-radius: 20px;
    padding: 8px 15px;
    color: white;
    background: ${theme.colors.iBlue};
    position: relative;
    align-items: flex-start;
    width: fit-content;
    margin-bottom: 8px;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: -7px;
    height: 20px;
    width: 20px;
    background: ${theme.colors.iBlue};
    border-bottom-right-radius: 15px;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: -10px;
    width: 10px;
    height: 20px;
    background: ${theme.colors.white};
    border-bottom-right-radius: 10px;
  }
`;
