import styled, { keyframes } from 'styled-components';

const hint = keyframes`
  0% {transform:  scale(1)}
  100% {transform: scale(1.02)}`;

export const CardWrapper = styled.div`
  margin-top: 30px;
  width: 400px;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  gap: 20px;
  background: ${(props) => props.theme.currencyCardColor};
  border: 1px solid ${({ theme }) => theme.colors.MEDIUM_GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;

  &:hover {
    -webkit-animation: ${hint} 200ms ease-out;
    animation: ${hint} 200ms ease-out;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: 10px 10px 0px 10px;
    width: 180px;
    height: 45px;
  }
`;

export const CardIconWrapper = styled.div`
  width: 55px;
  height: 55px;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 25px;
    height: 25px;
  }
`;

export const CardIcon = styled.img`
  width: 100%;
  height: 100%;
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
    padding-top: 5px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
    line-height: 100%;
  }
`;
