import React from 'react';

import { Container, TitleText, IconTitle } from './styles';

interface TitleProps {
  icon?: string;
  children: string;
}

const Title: React.FC<TitleProps> = ({ icon, children }) => (
  <Container>
    {!!icon && <IconTitle name={icon} size={50} />}
    <TitleText>{children}</TitleText>
  </Container>
);

Title.defaultProps = {
  icon: undefined,
};

export default Title;
