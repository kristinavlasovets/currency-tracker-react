import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.margins.zero} auto;
  width: 100%;
  padding: 0 210px;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: 0;
  }
`;
export const CardWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.eighty}px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`;
