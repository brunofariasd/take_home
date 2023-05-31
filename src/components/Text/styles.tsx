import { Text } from 'react-native'
import styled, { DefaultTheme, css } from 'styled-components/native'
import { CSSObject, CSSProp } from 'styled-components'
import { Props } from './types'

const getVariantStyle = ({ fontSize, fontFamily }): CSSProp<DefaultTheme> => `
  font-size: ${fontSize}px;
  font-family: ${fontFamily};
`

export const variants: Record<Props['variant'], any> = {
  'body-l': css<{ isBold: boolean }>`
    ${({ theme, isBold }): CSSProp<DefaultTheme> =>
      getVariantStyle({
        fontSize: 16,
        fontFamily: isBold ? theme.fonts.body : theme.fonts.bodyRegular,
      })};
  `,
  'body-m': css<{ isBold: boolean }>`
    ${({ theme, isBold }): CSSProp<DefaultTheme> =>
      getVariantStyle({
        fontSize: 14,
        fontFamily: isBold ? theme.fonts.body : theme.fonts.bodyRegular,
      })};
  `,
  'body-s': css<{ isBold: boolean }>`
    ${({ theme, isBold }): CSSProp<DefaultTheme> =>
      getVariantStyle({
        fontSize: 12,
        fontFamily: isBold ? theme.fonts.body : theme.fonts.bodyRegular,
      })};
  `,
  'body-xs': css<{ isBold: boolean }>`
    ${({ theme, isBold }): CSSProp<DefaultTheme> =>
      getVariantStyle({
        fontSize: 11,
        fontFamily: isBold ? theme.fonts.body : theme.fonts.bodyRegular,
      })};
  `,
}
export const StyledText = styled(Text)<{
  variant: Props['variant']
  isBold: boolean
  textAlign: string
}>`
  ${(props): CSSObject => variants[props.variant]};
  text-align: ${(props): string => props.textAlign};
  font-style: 'normal';
  color: #000;
`
