import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 53px;
  padding: 0px 16px;
  background: #ffffff;
  border-radius: 12px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #ffffff;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      border-color: #1da1f2;
    `}
`;

export const InputText = styled(TextInput)`
  flex: 1;
  color: #78746d;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
