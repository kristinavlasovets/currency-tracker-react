import React, { FC, useEffect, useState } from 'react';

import { ICurrency } from '@/@types/index';
import { getCurrencyData } from '@api/index';
import MyLargeIconSvg from '@assets/svg/icons/statusLine/largeIcon.svg';
import MyMediumIconSvg from '@assets/svg/icons/statusLine/mediumIcon.svg';
import MySmallIconSvg from '@assets/svg/icons/statusLine/smallIcon.svg';
import { statusLineText } from '@constants/config/components';

import {
  IconWrapper,
  LargeIcon,
  MediumIcon,
  SmallIcon,
  Text,
  Wrapper,
} from './styles';

const StatusLine: FC = () => {
  const [updateTime, setUpdateTime] = useState<ICurrency>({} as ICurrency);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    getCurrencyData()
      .then(({ data }) => {
        setUpdateTime(data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const { text, hours, imgAlt } = statusLineText;
  return (
    <Wrapper>
      <IconWrapper>
        <SmallIcon src={MySmallIconSvg} alt={imgAlt} />
        <MediumIcon src={MyMediumIconSvg} alt={imgAlt} />
        <LargeIcon src={MyLargeIconSvg} alt={imgAlt} />
      </IconWrapper>
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text>
          {text}
          {updateTime?.meta?.last_updated_at.slice(11, 16)}
          {hours}
        </Text>
      )}
    </Wrapper>
  );
};

export default StatusLine;
