import React, { FC } from 'react';

import { footerText } from '@constants/config/components';

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
} from './styles';

const Footer: FC = () => {
  const { chapterTitle, chapterText, subchapterText, copyrightNotice } =
    footerText;

  return (
    <Wrapper>
      <ContentWrapper>
        <ChapterWrapper>
          <ChapterTitleWrapper>
            <ChapterTitle>{chapterTitle}</ChapterTitle>
          </ChapterTitleWrapper>
          <ChapterText>{chapterText}</ChapterText>
        </ChapterWrapper>
        {subchapterText.map(({ title, text, path }) => (
          <SubchapterWrapper key={title}>
            <SubchapterTitle to={path}>{title}</SubchapterTitle>
            <SubchapterText to={path}>{text[0]}</SubchapterText>
            <SubchapterText to={path}>{text[1]}</SubchapterText>
          </SubchapterWrapper>
        ))}
      </ContentWrapper>
      <CopyrightNoticeWrapper>
        <CopyrightNotice>{copyrightNotice}</CopyrightNotice>
      </CopyrightNoticeWrapper>
    </Wrapper>
  );
};

export default Footer;
