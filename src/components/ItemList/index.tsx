import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Card, Header, StyledButton } from './styles'
import { useTheme } from 'styled-components/native'
import Text from '../Text'

interface Props {
  iconName?: string
  titleHeader?: string
  height?: number
  width?: number
  value: string
}

const CardButton: React.FC<Props> = ({ value, titleHeader, width, height, iconName }): JSX.Element => {
  const [isPressing, handlePress] = useState(false)

  const { colors } = useTheme()

  const getColor = (): string => {
    if (isPressing) return colors.primary
    return colors.gray[2]
  }

  return (
    <StyledButton
      activeOpacity={1}
      accessibilityRole="button"
      onPressIn={(): void => handlePress(true)}
      onPressOut={(): void => handlePress(false)}>
      <Card testID="card" isPressing={isPressing} width={width} height={height}>
        {(iconName || titleHeader) && (
          <Header>
            {iconName && <Icon name={iconName} size={24} color={getColor()} testID="card-button-icon" />}
            {titleHeader && (
              <Text numberOfLines={1} ellipsizeMode="tail" variant="body-l">
                {value}
              </Text>
            )}
          </Header>
        )}
        <Text textAlign="left" ellipsizeMode="tail" variant="body-l">
          {value}
        </Text>
      </Card>
    </StyledButton>
  )
}

export default CardButton
