import React from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingContainer, LoadingPageIcon, LoadingPageText } from './styles';

const LoadingPage: React.FC = () => {
  const { t } = useTranslation(['pages', 'common']);

  return (
    <LoadingContainer>
      <LoadingPageIcon size="large" color="#ffffff" />
      <LoadingPageText>{t('pages:loading.title')}</LoadingPageText>
    </LoadingContainer>
  );
};

export default LoadingPage;
