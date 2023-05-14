import React, { ChangeEvent, FC, useState } from 'react';

import MySearchIconSvg from '@assets/svg/icons/bankcardPage/search.svg';
import { bankcardText } from '@constants/config/pages/bankcard';
import { Currencies } from '@constants/currencies';
import { allCurrenciesArray } from '@shared/sharedData';
import { ICurrencyItem } from '@types';

import { useMap } from '../../hooks/useMap';

import {
  DataItem,
  DataResult,
  Input,
  Map,
  MapWrapper,
  Search,
  SearchIcon,
  SearchIconWrapper,
  SearchInputs,
  Text,
  Wrapper,
} from './styles';

import 'maplibre-gl/dist/maplibre-gl.css';

const BankcardPage: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredData, setFilteredData] = useState<ICurrencyItem[]>([]);
  const [searchCode, setSearchCode] = useState<string>('');
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isMessageVisible, setIsMessageVisible] = useState<boolean>(false);

  const mapContainerRef = useMap(searchCode);

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    const searchParameter = e.target.value;
    const newFilter = allCurrenciesArray.filter(({ code }) =>
      code.toLowerCase().includes(searchParameter.toLowerCase())
    );

    if (searchParameter === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      setIsDropdownVisible(true);
    }
  };

  const handleChoose = (code: string) => () => {
    setSearchCode(code);
    setIsDropdownVisible(false);
    setSearchValue(code);

    if (
      code === Currencies.BTC ||
      code === Currencies.ETH ||
      code === Currencies.LTC
    ) {
      setIsMessageVisible(true);
    } else {
      setIsMessageVisible(false);
    }
  };

  const { text, inputPlaceholder, imgAlt, message } = bankcardText;

  return (
    <>
      <Wrapper>
        <Text>{text}</Text>
        <Search>
          <SearchInputs>
            <Input
              value={searchValue}
              placeholder={inputPlaceholder}
              onChange={handleFilter}
            />
            <SearchIconWrapper>
              <SearchIcon src={MySearchIconSvg} alt={imgAlt} />
            </SearchIconWrapper>
          </SearchInputs>
          <DataResult isDropdownVisible={isDropdownVisible}>
            {filteredData.map(({ code }) => (
              <DataItem key={code} onClick={handleChoose(code)}>
                {code}
              </DataItem>
            ))}
          </DataResult>
        </Search>
        {isMessageVisible && <Text>{message}</Text>}
      </Wrapper>
      <MapWrapper>
        <Map ref={mapContainerRef} />
      </MapWrapper>
    </>
  );
};

export default BankcardPage;
