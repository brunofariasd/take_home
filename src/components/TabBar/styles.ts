import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

interface LabelProps {
  isFocused: boolean
}

export const TabItemContainer = styled(TouchableOpacity)<LabelProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const TabItemLabel = styled.Text<LabelProps>`
  color: ${props => (props.isFocused ? '#770FDF' : '#000000')};
  font-size: 11px;
  font-family: 'RobotoSlab-Regular';
`
