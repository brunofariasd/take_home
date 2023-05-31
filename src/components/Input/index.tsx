/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/require-default-props */
import React, { useState, useCallback, useEffect } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { Container, InputText, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  inputRef: React.RefObject<TextInput>;
  inputValueRef: React.MutableRefObject<InputValueRefProps>;
  containerStyle?: {};
}

export interface InputValueRefProps {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, containerStyle = {}, inputRef, inputValueRef, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    setIsFilled(!!inputValueRef.current?.value);
  }, [inputValueRef, inputValueRef.current.value]);

  return (
    <Container style={containerStyle} isFocused={isFocused}>
      <Icon name={icon} size={20} color={isFocused || isFilled ? '#1DA1F2' : '#78746D'} />
      <InputText
        ref={inputRef}
        placeholderTextColor="#78746D"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default Input;
