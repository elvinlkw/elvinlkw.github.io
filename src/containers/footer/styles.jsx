import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 80%;
  padding: 10px;
  background: #fff;
  margin: 0 auto;
  text-align: center;
  border-top: 1px ${({ theme }) => theme.colors.iBlue} solid;
  color: ${({ theme }) => theme.colors.black};
`;
