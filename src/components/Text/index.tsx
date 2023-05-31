import React from 'react'
import { useTheme } from 'styled-components/native'
import { StyledText } from './styles'
import { Props } from './types'

/**
 * Text component for multiple purpose
 */
const TextComponent: React.FC<Props> = ({ variant, children, isBold, textAlign, ...otherProps }): JSX.Element => {
  return (
    <StyledText {...otherProps} isBold={isBold} variant={variant} textAlign={textAlign}>
      {children}
    </StyledText>
  )
}

TextComponent.defaultProps = {
  isBold: false,
  textAlign: 'left',
  variant: 'body-l',
}

export default TextComponent
