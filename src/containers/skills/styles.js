import theme from 'src/theme';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: #fcfcfc;

  h1 {
    color: ${theme.colors.iBlue};
    margin-bottom: 1rem;
  }

  .icon-container {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(auto-fill, 100px);
    grid-template-columns: repeat(auto-fill, 100px);
    grid-auto-columns: 100px;
    grid-auto-rows: 100px;
    grid-gap: 36px;
    justify-content: center;
  }
`;

export const StyledFilters = styled.fieldset`
  border: 2px solid ${theme.colors.iBlue};

  legend {
    padding: 4px;
    color: ${theme.colors.iBlue};
  }

  label {
    justify-content: flex-start;
    gap: 4px;
  }
`;
