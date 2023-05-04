import MySearchIconSvg from '@assets/svg/icons/bankcardPage/search.svg'
import MapComponent from '@components/MapComponent'
import { bankcardText } from '@constants/texts/pages/bankcard'
import { ICurrencyItem } from '@models/ICurrencyItem'
import { allCurrenciesArray } from '@shared/sharedData'
import React, { ChangeEvent, FC, useState } from 'react'

import {
  DataItem,
  DataResult,
  Input,
  Search,
  SearchIcon,
  SearchIconWrapper,
  SearchInputs,
  Text,
  Wrapper,
} from './styles'

const BankcardPage: FC = () => {
  const [filteredData, setFilteredData] = useState<ICurrencyItem[]>([])
  const [searchCode, setSearchCode] = useState<string>('')

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const searchParameter = e.target.value
    const newFilter = allCurrenciesArray.filter(({ code }) => {
      return code.toLowerCase().includes(searchParameter.toLowerCase())
    })

    if (searchParameter === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const handleShow = (code: string) => () => {
    setSearchCode(code)
  }

  const { text, inputPlaceholder, imgAlt } = bankcardText

  return (
    <>
      <Wrapper>
        <Text>{text}</Text>
        <Search>
          <SearchInputs>
            <Input placeholder={inputPlaceholder} onChange={handleFilter} />
            <SearchIconWrapper>
              <SearchIcon src={MySearchIconSvg} alt={imgAlt} />
            </SearchIconWrapper>
          </SearchInputs>
          {filteredData?.length != 0 && (
            <DataResult>
              {filteredData.map(({ code }) => (
                <DataItem key={code} onClick={handleShow(code)}>
                  {code}
                </DataItem>
              ))}
            </DataResult>
          )}
        </Search>
      </Wrapper>
      <MapComponent searchCode={searchCode} />
    </>
  )
}

export default BankcardPage
