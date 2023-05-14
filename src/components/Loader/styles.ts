import styled from 'styled-components';

export const Message = styled.div`
  width: 100%;
  margin: 45vh auto;
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
`;
