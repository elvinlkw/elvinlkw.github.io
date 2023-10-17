import theme from 'src/theme';
import styled from 'styled-components';

export const StyledContainer = styled.section`
  background-color: #fcfcfc;
  min-height: 100vh;

  h1 {
    color: ${theme.colors.iBlue};
    margin-bottom: 1rem;
  }

  .icon-container {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(auto-fill, 150px);
    grid-template-columns: repeat(auto-fill, 150px);
    grid-gap: 36px;
    justify-content: center;
  }
`;

export const StyledFilters = styled.fieldset`
  border: 2px solid ${theme.colors.iBlue};
  font-family: 'Lato';
  padding: 8px;

  legend {
    padding: 4px;
    color: ${theme.colors.iBlue};
  }

  .form-control {
    margin: 0 4px;
  }

  .checkbox {
    border: 1px solid ${theme.colors.black};
  }

  .checkbox:checked {
    border: none;
  }
`;

export const StyledCard = styled.div`
  display: block;
  margin-bottom: 1rem;

  .card-image {
    padding-bottom: 8px;
  }

  h3 {
    position: relative;
    padding-top: 8px;
    font-family: 'Lato';
  }

  h3::before {
    content: '';
    position: absolute;
    background: ${theme.colors.black};
    width: 60px;
    height: 2px;
    top: 0;
    left: 50%;
    margin: 0 0 0 -30px;
    -webkit-transition: margin-top 0.2s;
    -moz-transition: margin-top 0.2s;
    transition: margin-top 0.2s;
  }
`;
