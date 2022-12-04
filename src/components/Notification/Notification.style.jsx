import styled from 'styled-components';

export const Notifications = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.primaryTextColor};

  font-size: ${p => p.theme.fontSizes[3]}px;
  margin-top: ${p => p.theme.space[3]}px;
`;
