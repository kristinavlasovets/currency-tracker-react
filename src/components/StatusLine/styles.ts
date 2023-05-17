import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1); opacity: 0.5;}
  100% {transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.9); opacity: 0.2;}`;

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.hundredTwenty}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: relative;
  width: ${({ theme }) => theme.width.fifty}px;
  height: ${({ theme }) => theme.height.fifty}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.twenty}px;
    height: ${({ theme }) => theme.height.twenty}px;
  }
`;

export const LargeIcon = styled.img`
  position: absolute;
  left: ${({ theme }) => theme.left.fifty}%;
  top: ${({ theme }) => theme.top.fifty}%;
  transform: translateX(-50%) translateY(-50%);
  width: ${({ theme }) => theme.width.hundred}%;
  height: ${({ theme }) => theme.height.hundred}%;
  min-width: ${({ theme }) => theme.width.fifty}px;
  min-height: ${({ theme }) => theme.height.fifty}px;
  opacity: ${({ theme }) => theme.opacities.dotOne};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    min-width: ${({ theme }) => theme.width.twentyFive}px;
    min-height: ${({ theme }) => theme.height.twentyFive}px;
  }
`;

export const MediumIcon = styled.img`
  position: absolute;
  left: ${({ theme }) => theme.left.fifty}%;
  top: ${({ theme }) => theme.top.fifty}%;
  transform: translateX(-50%) translateY(-50%);
  width: ${({ theme }) => theme.width.twenty}px;
  height: ${({ theme }) => theme.height.twenty}px;
  -webkit-animation: ${pulse} 2s ease-out infinite;
  animation: ${pulse} 2s ease-out infinite;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.ten}px;
    height: ${({ theme }) => theme.height.ten}px;
  }
`;

export const SmallIcon = styled.img`
  position: absolute;
  left: ${({ theme }) => theme.left.fifty}%;
  top: ${({ theme }) => theme.top.fifty}%;
  transform: translateX(-50%) translateY(-50%);
  width: ${({ theme }) => theme.width.fifteen}px;
  height: ${({ theme }) => theme.height.fifteen}px;
  opacity: ${({ theme }) => theme.opacities.dotSeven};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.seven}px;
    height: ${({ theme }) => theme.height.seven}px;
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
