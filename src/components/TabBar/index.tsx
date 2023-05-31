import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { ITabItemProps } from '../../core/constants/globals'
import { TabItemContainer, TabItemLabel } from './styles'

const Tab: React.FC<ITabItemProps> = ({ tab, onPress, icon, isFocused }) => (
  <TabItemContainer onPress={onPress} isFocused={isFocused}>
    {icon && <Icon name={icon} size={21} color={isFocused ? '#770FDF' : '#000000'} />}
    <TabItemLabel isFocused={isFocused}>{tab.name}</TabItemLabel>
  </TabItemContainer>
)

export default Tab
