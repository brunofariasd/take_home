import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #312e38;
`;

export const LoadingPageImage = styled.Image`
  align-self: flex-start;
  width: 100px;
  max-height: 100px;
  margin-bottom: 20px;
`;

export const LoadingPageIcon = styled.ActivityIndicator`
  margin-bottom: 20px;
`;

export const LoadingPageText = styled.Text`
  color: #daded8;
  font-size: 21px;
  font-family: 'RobotoSlab-Medium';
`;
