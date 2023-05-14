import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.DARK_GRAY};
`;
export const ErrorMessage = styled.p`
  margin: 20vh auto;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  line-height: 141%;
  background: transparent;
`;
