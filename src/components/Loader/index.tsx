import { loaderText } from '@constants/texts/components/loader'
import React, { FC } from 'react'

import { Message } from './styles'

const Loader: FC = () => {
  const { message } = loaderText
  return <Message>{message}</Message>
}

export default Loader
