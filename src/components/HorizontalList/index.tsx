import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Container, Item, ItemSeparator } from './styles'
import { useAppDispatch } from '../../core/hooks/useAppStore'
import { FilesData } from '../../core/constants/globals'
import { useTheme } from 'styled-components/native'

interface ListProps {
  data: FilesData[]
  renderItem: ({ item, index }) => React.ReactNode
}

const HorizontalList: React.FC<ListProps> = ({ data, renderItem }) => {
  const dispatch = useAppDispatch()
  const { spacing } = useTheme()

  const { navigate } = useNavigation<any>()

  const getPadding = (): number => {
    return spacing[3]
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item): string => item.value.toString()}
        ItemSeparatorComponent={(): React.ReactElement => <ItemSeparator />}
        renderItem={({ item, index }): React.ReactElement => <Item>{renderItem({ item, index })}</Item>}
      />
    </Container>
  )
}

export default HorizontalList
