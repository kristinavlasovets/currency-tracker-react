import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.margins.fifty}px;
  width: 400px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-top: ${({ theme }) => theme.margins.ten}px;
    width: 110px;
    padding-left: 5px;
  }
`;

export const Text = styled.p`
  padding-bottom: 25px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  line-height: 129%;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding-left: 5px;
    padding-bottom: 5px;
    font-size: ${({ theme }) => theme.fontSizes.s}px;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 2px solid ${({ theme }) => theme.colors.MEDIUM_GRAY};
`;
