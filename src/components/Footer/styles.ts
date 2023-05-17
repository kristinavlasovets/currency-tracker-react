import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.threeHundredEighty}px;
  padding: ${({ theme }) => theme.paddings.zero}
    ${({ theme }) => theme.paddings.twoHundredsTen}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.ten}px;
    height: fit-content;
  }
`;

export const ContentWrapper = styled.div`
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.threeHundred}px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.ten}px;
    flex-direction: column;
    height: fit-content;
  }
`;

export const ChapterWrapper = styled.div`
  width: ${({ theme }) => theme.width.fourHundredEighty}px;
  max-width: ${({ theme }) => theme.width.hundred}%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.hundred}%;
  }
`;

export const ChapterTitleWrapper = styled.div`
  background: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ChapterTitle = styled.h2`
  padding-bottom: ${({ theme }) => theme.paddings.fourty}px;
  background: ${({ theme }) => theme.colors.TEXT_GRADIENT_GREEN};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent 0.8;
  background-clip: text;
  text-fill-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    padding-bottom: ${({ theme }) => theme.paddings.ten}px;
  }
`;

export const ChapterText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  line-height: 150%;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-bottom: ${({ theme }) => theme.margins.twenty}px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;

export const SubchapterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubchapterTitle = styled(Link)`
  position: relative;
  padding-bottom: ${({ theme }) => theme.paddings.fourty}px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  line-height: 150%;

  &:after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.GREEN};
    height: ${({ theme }) => theme.height.three}px;
    width: ${({ theme }) => theme.width.zero};
    left: ${({ theme }) => theme.left.zero}px;
    bottom: ${({ theme }) => theme.bottom.thirty}px;
    transition: 0.3s;
  }

  &:hover:after {
    width: ${({ theme }) => theme.width.hundred}%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
    padding-bottom: ${({ theme }) => theme.paddings.ten}px;
  }
`;

export const SubchapterText = styled(Link)`
  padding-bottom: ${({ theme }) => theme.paddings.fifteen}px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${({ theme }) => theme.colors.FOOTER_GRAY};
  line-height: 150%;

  &:hover {
    color: ${({ theme }) => theme.colors.WHITE};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
    padding-bottom: ${({ theme }) => theme.paddings.five}px;
  }
`;

export const CopyrightNoticeWrapper = styled.div`
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.eighty}px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    height: fit-content;
    padding-bottom: ${({ theme }) => theme.paddings.ten}px;
  }
`;

export const CopyrightNotice = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.FOOTER_GRAY};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;
