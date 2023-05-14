import styled from 'styled-components';

export const SelectWrapper = styled.div`
  margin: ${({ theme }) => theme.margins.fourty}px auto
    ${({ theme }) => theme.margins.hundred}px;
  width: 100%;
  height: fit-content;
  padding-left: 14vw;
  position: relative;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.margins.zero} auto;
  }
`;

export const SelectButton = styled.button`
  width: 140px;
  height: 30px;
  pointer-events: none;
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: ${({ theme }) => theme.borderRadiuses.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 60px;
    height: 20px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;

export const SelectMenu = styled.ul`
  width: 140px;
  height: fit-content;
  position: absolute;
  left: 14vw;
  top: calc(100% + 5px);
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: ${({ theme }) => theme.borderRadiuses.xs}px;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 150ms ease-in-out;

  ${SelectWrapper}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    top: calc(100% + 1px);
    width: 60px;
    height: fit-content;
  }
`;

export const SelectItem = styled.li`
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bodyColor};

  &:hover {
    background-color: ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.bodyColor};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: 1px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;

export const CurrencyNameWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margins.thirty}px;
  width: 400px;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 14vw;
  gap: 20px;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-top: ${({ theme }) => theme.margins.thirtyFive}px;
    width: 200px;
    height: 40px;
  }
`;

export const CurrencyIconWrapper = styled.div`
  width: 55px;
  height: 55px;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 20px;
    height: 20px;
  }
`;

export const CurrencyIcon = styled.img`
  width: 100%;
  height: 100%;
  background: transparent;
`;

export const CurrencyName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  color: ${(props) => props.theme.fontColor};
  line-height: 141%;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;

export const ChartWrapper = styled.div`
  margin: ${({ theme }) => theme.margins.fifty}px
    ${({ theme }) => theme.margins.twoHundreds}px;
  width: 85%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-right: 210px;
  padding-bottom: 60px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.margins.zero} auto;
    width: 100%;
    padding-right: 5px;
    padding-bottom: 50px;
  }
`;
