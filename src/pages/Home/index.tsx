/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { ScrollView } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import { Container, StyledBanner, StyledImageBanner } from './styles'

import HorizontalList from '../../components/HorizontalList'
import CardButton from '../../components/ItemList'
import { fundsData, infoData } from '../../core/constants/data'
import { FilesData } from '../../core/constants/globals'
import Text from '../../components/Text'
import images from '../../assets/images'
import { useTheme } from 'styled-components/native'

export const Home: React.FC = () => {
  const { t } = useTranslation(['pages', 'common'])
  const { spacing } = useTheme()

  const handleItemPress = useCallback(() => {}, [])

  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
      <Container>
        <Text ellipsizeMode="tail" variant="body-l" isBold>
          Funds
        </Text>
        <HorizontalList
          data={fundsData}
          renderItem={({ item }: { item: FilesData }): React.ReactElement => (
            <CardButton value={t(item.value)} iconName={item.iconName} onPress={(): void => {}} />
          )}
        />
        <StyledBanner>
          <StyledImageBanner source={images.imageExample} />
        </StyledBanner>
        <HorizontalList
          data={infoData}
          renderItem={({ item }: { item: FilesData }): React.ReactElement => (
            <CardButton
              width={spacing[8] * 4}
              height={spacing[8] * 4}
              value={t(item.value)}
              titleHeader={item.iconName}
              onPress={(): void => {}}
            />
          )}
        />
      </Container>
    </ScrollView>
  )
}
