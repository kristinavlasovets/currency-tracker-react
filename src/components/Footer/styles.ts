import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  height: 380px;
  padding: 0 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bodyColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: 10px;
    height: fit-content;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: 10px;
    flex-direction: column;
    height: fit-content;
  }
`;

export const ChapterWrapper = styled.div`
  width: 480px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 100%;
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
  padding-bottom: 40px;
  background: ${({ theme }) => theme.colors.TEXT_GRADIENT_GREEN};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent 0.8;
  background-clip: text;
  text-fill-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    padding-bottom: 10px;
  }
`;

export const ChapterText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xxs};
  line-height: 150%;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  }
`;

export const SubchapterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubchapterTitle = styled(Link)`
  position: relative;
  padding-bottom: 40px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  line-height: 150%;

  &:after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.GREEN};
    height: 3px;
    width: 0;
    left: 0;
    bottom: 30px;
    transition: 0.3s;
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
    padding-bottom: 10px;
  }
`;

export const SubchapterText = styled(Link)`
  padding-bottom: 15px;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xs};
  color: ${({ theme }) => theme.colors.FOOTER_GRAY};
  line-height: 150%;

  &:hover {
    color: ${({ theme }) => theme.colors.WHITE};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxs}px;
    padding-bottom: 5px;
  }
`;

export const CopyrightNoticeWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    height: fit-content;
    padding-bottom: 10px;
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
