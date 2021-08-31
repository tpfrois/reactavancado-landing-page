import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
  wide?: boolean
  href: string
  withPrice?: boolean
}

const Button: React.FC<Props> = ({ children, wide, withPrice, href }) => (
  <S.ButtonWrapper href={href} wide={wide} withPrice={withPrice}>
    {children}
  </S.ButtonWrapper>
)

export default Button
