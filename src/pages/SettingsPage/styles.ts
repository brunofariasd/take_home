import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import styled from 'styled-components/native'
import { heightPaddingBottom } from '../../core/constants/globals'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px 20px ${heightPaddingBottom}px;
  background: ${({ theme }) => theme.background};
`

export const ListSettingMenu = styled.ScrollView``

export const SettingItem = styled(RectButton)`
  width: 100%;
  padding: ${heightPaddingBottom / 5}px;
  background: #770FDF
  border-radius: 12px;
  margin-top: 8px;

  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
`

export const SettingItemIcon = styled(Icon).attrs({
  size: 12,
})`
  color: #daded8;
`

export const SettingItemText = styled.Text`
  font-size: 11px;
  color: #daded8
  font-family: 'RobotoSlab-Regular';
  text-align: center;

  margin-left: 8px;
`
