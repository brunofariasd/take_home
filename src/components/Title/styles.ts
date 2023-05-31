import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'
import { screen } from '../../core/constants/globals'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${screen.height * 0.06}px;
`

export const ImageLogo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  resize-mode: contain;
`

export const IconTitle = styled(Icon)`
  color: ${({ theme }) => theme.primaryColor};
`

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 21px;
  margin-top: 20px;
  text-align: center;
  font-family: 'RobotoSlab-Medium';
`
