import styled from 'styled-components';

export const SelectWrapper = styled.div`
  margin: ${({ theme }) => theme.margins.fourty}px auto
    ${({ theme }) => theme.margins.hundred}px;
  width: ${({ theme }) => theme.width.hundred}%;
  height: fit-content;
  padding-left: ${({ theme }) => theme.paddings.fifteen}%;
  position: relative;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.margins.zero} auto;
  }
`;

export const SelectButton = styled.button`
  width: ${({ theme }) => theme.width.hundredFourty}px;
  height: ${({ theme }) => theme.height.thirty}px;
  pointer-events: none;
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: ${({ theme }) => theme.borderRadiuses.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.sixty}px;
    height: ${({ theme }) => theme.height.twenty}px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;

export const SelectMenu = styled.ul`
  width: ${({ theme }) => theme.width.hundredFourty}px;
  height: fit-content;
  position: absolute;
  left: ${({ theme }) => theme.left.fifteen}%;
  top: calc(100% + ${({ theme }) => theme.top.five}px);
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: ${({ theme }) => theme.borderRadiuses.xs}px;
  opacity: ${({ theme }) => theme.opacities.zero};
  transform: translateY(-10px);
  transition: opacity 150ms ease-in-out;

  ${SelectWrapper}:hover & {
    opacity: ${({ theme }) => theme.opacities.one};
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    top: calc(100% + ${({ theme }) => theme.top.one}px);
    width: ${({ theme }) => theme.width.sixty}px;
    height: fit-content;
  }
`;

export const SelectItem = styled.li`
  padding: ${({ theme }) => theme.paddings.five}px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bodyColor};

  &:hover {
    background-color: ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.bodyColor};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.one}px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;

export const CurrencyNameWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margins.thirty}px;
  width: ${({ theme }) => theme.width.fourHundred}px;
  height: ${({ theme }) => theme.height.ninety}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${({ theme }) => theme.paddings.fifteen}%;
  gap: 20px;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-top: ${({ theme }) => theme.margins.thirtyFive}px;
    width: ${({ theme }) => theme.width.twoHundred}px;
    height: ${({ theme }) => theme.height.fourty}px;
  }
`;

export const CurrencyIconWrapper = styled.div`
  width: ${({ theme }) => theme.width.fiftyFive}px;
  height: ${({ theme }) => theme.height.fiftyFive}px;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.twenty}px;
    height: ${({ theme }) => theme.height.twenty}px;
  }
`;

export const CurrencyIcon = styled.img`
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.hundred}%;
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
  width: ${({ theme }) => theme.width.eightyFive}%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-right: ${({ theme }) => theme.paddings.twoHundredsTen}px;
  padding-bottom: ${({ theme }) => theme.paddings.sixty}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.margins.zero} auto;
    width: ${({ theme }) => theme.width.hundred}%;
    padding-right: ${({ theme }) => theme.paddings.five}px;
    padding-bottom: ${({ theme }) => theme.paddings.fifty}px;
  }
`;

export const Text = styled.p`
  padding-left: ${({ theme }) => theme.paddings.eighteen}px;
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  color: ${(props) => props.theme.subtitleColor};
  line-height: 125%;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
  }
`;
