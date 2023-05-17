import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.hundred}%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.DARK_GRAY};
`;
export const ErrorMessage = styled.p`
  margin: ${({ theme }) => theme.margins.twenty}% auto;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  line-height: 141%;
  background: transparent;
`;
