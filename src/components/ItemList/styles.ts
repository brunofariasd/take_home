import { View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const StyledButton = styled(TouchableOpacity)`
  overflow: visible;
`

export const Header = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const Card = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: ${(props): number => props.height || props.theme.spacing[8] * 2}px;
  width: ${(props): number => props.width || props.theme.spacing[8] * 3}px;
  padding: ${(props): number => props.theme.spacing[3]}px;
  border-radius: ${(props): number => props.theme.spacing[1]}px;
  border-color: ${(props): string => props.theme.colors.gray[4]};
  border-width: ${(props): number => props.theme.spacing[1] / 3}px;
  background-color: ${(props): number => (props.isPressing ? props.theme.colors.gray[4] : '#fff')};
`
