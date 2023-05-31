import React from 'react'
import { useTranslation } from 'react-i18next'
import useAppFunction from '../../core/helpers/utils'
import { Container, ListSettingMenu, SettingItem, SettingItemIcon, SettingItemText } from './styles'

const SettingsPage: React.FC = () => {
  const { t } = useTranslation(['pages', 'common'])
  const { handleOnRateUs, handleOnShareApp, handleOnPrivacyPolicy, handleOnMarketGPlay } = useAppFunction()

  return (
    <Container>
      <ListSettingMenu contentContainerStyle={{ flex: 1 }}>
        <SettingItem onPress={handleOnRateUs}>
          <SettingItemIcon name="thumbs-up" />
          <SettingItemText>{t('pages:settings.settings_menu_text_1')}</SettingItemText>
        </SettingItem>
        <SettingItem onPress={handleOnShareApp}>
          <SettingItemIcon name="share-2" />
          <SettingItemText>{t('pages:settings.settings_menu_text_2')}</SettingItemText>
        </SettingItem>
        <SettingItem onPress={handleOnPrivacyPolicy}>
          <SettingItemIcon name="pocket" />
          <SettingItemText>{t('pages:settings.settings_menu_text_3')}</SettingItemText>
        </SettingItem>
        <SettingItem onPress={handleOnMarketGPlay}>
          <SettingItemIcon name="zap" />
          <SettingItemText>{t('pages:settings.settings_menu_text_4')}</SettingItemText>
        </SettingItem>
      </ListSettingMenu>
    </Container>
  )
}

export default SettingsPage
