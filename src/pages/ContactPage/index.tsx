import { contactPageText } from '@constants/texts/pages/contact'
import React, { FC } from 'react'

import { Text, Title, Wrapper } from './styles'

const ContactPage: FC = () => {
  const { title, text } = contactPageText
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Text>{text[0]}</Text>
      <Text>{text[1]}</Text>
    </Wrapper>
  )
}

export default ContactPage
