import theme from 'src/theme';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: #f0f3f4;
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

  .projects-container {
    grid-template-columns: repeat(auto-fill, 320px);
    justify-content: center;
    gap: 64px;
  }
`;

export const StyledProjectcard = styled.div`
  width: 320px;
  margin: 1rem;
  border-radius: 12px;

  figure {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
  }

  img {
    border-radius: 1rem;
    width: 80%;
    height: 90%;
    -webkit-box-shadow: 0 0 6px ${theme.colors.iBlue};
    box-shadow: 0 0 6px ${theme.colors.iBlue};
  }

  .card-body {
    padding: 8px 16px;
    justify-content: flex-end;
  }

  .card-body-header {
    position: relative;
  }

  .card-title {
    text-align: center;
    display: inline;
    width: 100%;
  }

  .dropdown {
    position: absolute;
    top: -10px;
    right: 0;
  }
`;
