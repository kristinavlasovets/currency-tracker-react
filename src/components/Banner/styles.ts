import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.zero}px auto;
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.fourHundredSixty}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.paddings.sixty}px;
  background: ${({ theme }) => theme.colors.BOX_GRADIENT_BLACK};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    height: fit-content;
    padding-top: ${({ theme }) => theme.paddings.thirty}px;
    padding-bottom: ${({ theme }) => theme.paddings.thirty}px;
  }
`;

export const TextBlockWrapper = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    align-items: center;
    margin-bottom: ${({ theme }) => theme.margins.twenty}px;
  }
`;

export const TitleOne = styled.h1`
  background: ${({ theme }) => theme.colors.TEXT_GRADIENT_GREEN};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent 0.8;
  background-clip: text;
  text-fill-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const TitleTwo = styled.h1`
  background: ${({ theme }) => theme.colors.TEXT_GRADIENT_GREEN};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent 0.8;
  background-clip: text;
  text-fill-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const Subtitle = styled.p`
  width: ${({ theme }) => theme.width.fifty}%;
  align-self: flex-end;
  text-align: center;
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  color: ${(props) => props.theme.subtitleColor};
  line-height: 187%;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.ninety}%;
  }
`;

export const LogoWrapper = styled.div`
  background: transparent;
  width: ${({ theme }) => theme.width.twoHundredFifty}px;
  height: ${({ theme }) => theme.height.twoHundredFifty}px;
  margin-left: ${({ theme }) => theme.margins.hundredTwenty}px;
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    display: none;
  }
`;

export const Logo = styled.img`
  background: transparent;
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.hundred}%;
`;
