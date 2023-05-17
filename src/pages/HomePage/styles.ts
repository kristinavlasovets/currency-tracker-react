import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.zero} auto;
  width: ${({ theme }) => theme.width.hundred}%;
  padding: ${({ theme }) => theme.paddings.zero}px
    ${({ theme }) => theme.paddings.twoHundredsTen}px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.paddings.zero}px;
  }
`;
export const CardWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.eighty}px;
  width: ${({ theme }) => theme.width.hundred}%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
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
