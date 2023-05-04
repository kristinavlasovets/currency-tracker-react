import { footerText } from '@constants/texts/components/footer'
import React, { FC } from 'react'

import {
  ChapterText,
  ChapterTitle,
  ChapterTitleWrapper,
  ChapterWrapper,
  ContentWrapper,
  CopyrightNotice,
  CopyrightNoticeWrapper,
  SubchapterText,
  SubchapterTitle,
  SubchapterWrapper,
  Wrapper,
} from './styles'

const Footer: FC = () => {
  const {
    chapterTitle,
    chapterText,
    subchapterTitle,
    subchapterText,
    copyrightNotice,
  } = footerText

  return (
    <Wrapper>
      <ContentWrapper>
        <ChapterWrapper>
          <ChapterTitleWrapper>
            <ChapterTitle>{chapterTitle}</ChapterTitle>
          </ChapterTitleWrapper>
          <ChapterText>{chapterText}</ChapterText>
        </ChapterWrapper>
        <SubchapterWrapper>
          <SubchapterTitle>{subchapterTitle[0]}</SubchapterTitle>
          <SubchapterText>{subchapterText[0]}</SubchapterText>
          <SubchapterText>{subchapterText[1]}</SubchapterText>
        </SubchapterWrapper>
        <SubchapterWrapper>
          <SubchapterTitle>{subchapterTitle[1]}</SubchapterTitle>
          <SubchapterText>{subchapterText[2]}</SubchapterText>
          <SubchapterText>{subchapterText[3]}</SubchapterText>
        </SubchapterWrapper>
        <SubchapterWrapper>
          <SubchapterTitle>{subchapterTitle[2]}</SubchapterTitle>
          <SubchapterText>{subchapterText[4]}</SubchapterText>
          <SubchapterText>{subchapterText[5]}</SubchapterText>
        </SubchapterWrapper>
      </ContentWrapper>
      <CopyrightNoticeWrapper>
        <CopyrightNotice>{copyrightNotice}</CopyrightNotice>
      </CopyrightNoticeWrapper>
    </Wrapper>
  )
}

export default Footer
