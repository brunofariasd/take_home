import { TextProps } from 'react-native'

export interface OwnProps {
  isBold?: boolean
  textAlign?: 'left' | 'center' | 'right' | string
  variant?: 'body-l' | 'body-m' | 'body-s' | 'body-xs'
}

export type Props = OwnProps & TextProps
