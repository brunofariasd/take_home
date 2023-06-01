import { Image, ImageBackground, Pressable, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import styled from 'styled-components/native'
import { heightPaddingBottom } from '../../core/constants/globals'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 20px ${heightPaddingBottom}px;
  background: ${({ theme }) => theme.colors.white};
`

export const StyledBanner = styled.View`
  overflow: hidden;
  margin-vertical: ${(props): number => props.theme.spacing[5]}px;
`

export const StyledImageBanner = styled(Image)`
  width: 100%;
  border-radius: ${(props): number => props.theme.spacing[4]}px;
`
