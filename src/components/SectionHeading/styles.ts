import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.margins.fifty}px;
  width: ${({ theme }) => theme.width.fourHundred}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-top: ${({ theme }) => theme.margins.ten}px;
    width: ${({ theme }) => theme.width.hundredTen}px;
    padding-left: ${({ theme }) => theme.paddings.five}px;
  }
`;

export const Text = styled.p`
  padding-bottom: ${({ theme }) => theme.paddings.twentyFive}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  line-height: 129%;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding-left: ${({ theme }) => theme.paddings.five}px;
    padding-bottom: ${({ theme }) => theme.paddings.five}px;
    font-size: ${({ theme }) => theme.fontSizes.s}px;
  }
`;

export const Divider = styled.hr`
  width: ${({ theme }) => theme.width.hundred}%;
  border: 0;
  border-top: 2px solid ${({ theme }) => theme.colors.MEDIUM_GRAY};
`;
