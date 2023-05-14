import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.twoHundreds}px 0
    ${({ theme }) => theme.margins.twoHundreds}px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.margins.twenty}px 0
      ${({ theme }) => theme.margins.fourty}px;
  }
`;

export const Title = styled.h3`
  padding-bottom: 40px;
  font-family: 'Inter', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${({ theme }) => theme.colors.GREEN};
  line-height: 150%;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
  }
`;

export const Text = styled.p`
  padding-bottom: 15px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${({ theme }) => theme.colors.FOOTER_GRAY};
  line-height: 150%;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;
