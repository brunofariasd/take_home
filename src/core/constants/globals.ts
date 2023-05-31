import { Dimensions } from 'react-native'

export interface FilesData {
  name: string
  iconName: string
  urlImageBackground: string
}

export interface IModalProps {
  active: boolean
}

export interface ITabItemProps {
  tab: any
  onPress: () => void
  icon: string
  isFocused: boolean
}

export const toastConfiguration = {
  backgroundColor: '#1DA1F2',
  textColor: '#fff',
  opacity: 1,
  position: -100,
  shadow: true,
  animation: true,
  hideOnPress: true,
  delay: 0,
}

export const screen = Dimensions.get('window')

export const heightPaddingBottom = Dimensions.get('window').height >= 750 ? 90 : 60
