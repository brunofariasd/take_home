import { Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import styled from 'styled-components/native'
import { heightPaddingBottom } from '../../core/constants/globals'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px ${heightPaddingBottom}px;
  background: ${({ theme }) => theme.background};
`

export const IconSwitch = styled(Icon)`
  color: ${({ theme }) => theme.secundaryColor};
`

export const SwitchContainerButton = styled.View`
  position: absolute;
  right: 0;
  top: 0;

  margin: 20px 20px;
  flex-direction: row;
  align-items: center;
`

export const SwitchButton = styled.Switch`
  margin: 0 4px;
`

export const ModalScrollView = styled.View``

export const ModalContent = styled.View`
  background: #ffffff;
  align-items: center;
  align-content: space-around;
  justify-content: space-around;
  border-radius: 20px;
  padding: 20px 0;
  overflow: hidden;
  opacity: 0.95;
`

export const ModalImage = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 20px;
  resize-mode: contain;
`

export const ModalTextContent = styled.Text`
  font-size: 16px;
  font-family: RobotoSlab-Regular;
  text-align: center;
  color: #000000;
  padding: 0 15px;
`

export const ModalContentButton = styled(Pressable)`
  justify-content: center;
  align-items: center;
  background: #96e0aa;
  margin-top: 8px;
  border-radius: 20px;
  padding: 14px;
  elevation: 2;
`

export const ModalTextButton = styled.Text`
  font-size: 16px;
  font-family: RobotoSlab-Medium;
  text-align: center;
  color: #000000;
`
