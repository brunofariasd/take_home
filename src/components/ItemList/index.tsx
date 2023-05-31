import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Card, Header, StyledButton } from './styles'
import { useTheme } from 'styled-components/native'
import Text from '../Text'

interface Props {
  iconName: string
  value: string
  badgeValue?: Number
  sideContent?: React.ReactNode
  info?: string
}

const CardButton: React.FC<Props> = ({ value, info, iconName, badgeValue }): JSX.Element => {
  const [isPressing, handlePress] = useState(false)

  const { colors } = useTheme()

  const getColor = (): string => {
    if (isPressing) return colors.white
    return colors.gray[2]
  }

  return (
    <StyledButton
      activeOpacity={1}
      accessibilityRole="button"
      onPressIn={(): void => handlePress(true)}
      onPressOut={(): void => handlePress(false)}>
      <Card testID="card" isPressing={isPressing}>
        <Header>
          <Icon name={iconName} size={24} color={getColor()} testID="card-button-icon" />
        </Header>
        <Text numberOfLines={1} ellipsizeMode="tail" variant="body-l">
          {value}
        </Text>
      </Card>
    </StyledButton>
  )
}

export default CardButton
