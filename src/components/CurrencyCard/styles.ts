import styled, { keyframes } from 'styled-components';

const hint = keyframes`
  0% {transform:  scale(1)}
  100% {transform: scale(1.02)}`;

export const CardWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margins.thirty}px;
  width: ${({ theme }) => theme.width.fourHundred}px;
  height: ${({ theme }) => theme.height.ninety}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.twenty}px;
  gap: 20px;
  background: ${(props) => props.theme.currencyCardColor};
  border: 1px solid ${({ theme }) => theme.colors.MEDIUM_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;

  &:hover {
    -webkit-animation: ${hint} 200ms ease-out;
    animation: ${hint} 200ms ease-out;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.margins.ten}px
      ${({ theme }) => theme.margins.ten}px
      ${({ theme }) => theme.margins.zero}px
      ${({ theme }) => theme.margins.ten}px;
    width: ${({ theme }) => theme.width.hundredEighty}px;
    height: ${({ theme }) => theme.height.fourtyFive}px;
  }
`;

export const CardIconWrapper = styled.div`
  width: ${({ theme }) => theme.width.fiftyFive}px;
  height: ${({ theme }) => theme.height.fiftyFive}px;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.twentyFive}px;
    height: ${({ theme }) => theme.height.twentyFive}px;
  }
`;

export const CardIcon = styled.img`
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.hundred}%;
  background: transparent;
`;

export const CardCurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
`;

export const CardName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  line-height: 141%;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    line-height: 100%;
  }
`;

export const CardStatus = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  color: ${({ theme }) => theme.colors.GRAY};
  line-height: 129%;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding-top: ${({ theme }) => theme.paddings.five}px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
    line-height: 100%;
  }
`;
