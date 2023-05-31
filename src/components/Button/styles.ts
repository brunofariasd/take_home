import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #770fdf;
  border-radius: 10px;
  margin-top: 8px;

  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 21px;
  font-family: 'RobotoSlab-Regular';
`
