import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Container {...props}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
