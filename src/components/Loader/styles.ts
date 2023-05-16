import styled from 'styled-components';

export const Message = styled.div`
  width: ${({ theme }) => theme.width.hundred}%;
  margin: 45% auto;
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
`;
