import React, { FC } from 'react';

import { loaderText } from '@constants/config/components/loader';

import { Message } from './styles';

const Loader: FC = () => {
  const { message } = loaderText;
  return <Message>{message}</Message>;
};

export default Loader;
