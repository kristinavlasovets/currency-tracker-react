import React, { FC } from 'react';

import { Divider, Text, Wrapper } from './styles';
import { SectionHeadingProps } from './types';

const SectionHeading: FC<SectionHeadingProps> = ({ text }) => (
  <Wrapper>
    <Text>{text}</Text>
    <Divider />
  </Wrapper>
);

export default SectionHeading;
