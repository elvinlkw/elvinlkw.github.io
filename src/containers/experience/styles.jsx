import theme from 'src/theme';
import styled from 'styled-components';

const CARD_WIDTH = '300px';

export const StyledContainer = styled.section`
  min-height: fit-content;

  h1 {
    color: ${theme.colors.iBlue};
    margin-bottom: 32px;
  }

  .section-text {
    /* width: 640px; */
  }

  h2 {
    font-weight: bold;
    line-height: 2;
  }

  ul,
  li {
    list-style: none;
  }
`;

export const StyledExperienceCardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 64px;

  li {
    text-decoration: none;
    color: #000;
    background: #ffc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${CARD_WIDTH};
    padding: 1rem;
    box-shadow: 2px 2px 7px rgba(33, 33, 33, 0.7);
    transform: rotate(-2deg);
    transition: transform 0.15s linear;
  }

  li:nth-child(even) {
    transform: rotate(1deg);
    position: relative;
    top: 5px;
    background: #c0e2e0;
  }
  li:nth-child(3n) {
    transform: rotate(-1deg);
    position: relative;
    top: -5px;
    background: #d0cff3;
  }
  li:nth-child(5n) {
    transform: rotate(-2deg);
    position: relative;
    top: -10px;
  }

  li:last-child {
    background: #9ecef0;
    color: #000;
  }

  li:hover,
  li:focus {
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.7);
    transform: scale(1.125);
    position: relative;
    z-index: 5;
  }

  li {
    margin: 1em;
  }
`;

export const StyledExperienceCard = styled.li`
  .experience-card-top-content .text-role {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  .experience-card-top-content .text-role::after {
    content: '';
    position: absolute;
    background: ${theme.colors.black};
    width: 70px;
    height: 2px;
    -webkit-transition: margin-top 0.2s;
    -moz-transition: margin-top 0.2s;
    transition: margin-top 0.2s;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -100%);
  }

  .experience-card-top-content {
    text-align: center;
  }

  .experience-card-bottom-content {
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: ${theme.colors.black};
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin: 0 4px;
  }
`;
