/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import Share, { ShareOptions } from 'react-native-share'
import Toast from 'react-native-root-toast'
import { Linking } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import { useTranslation } from 'react-i18next'
import { toastConfiguration } from '../../constants/globals'

export default function useAppFunction() {
  const { t } = useTranslation(['common'])

  const handleOnRateUs = async () => {
    Linking.openURL('https://play.google.com/store/apps/details?id=com.twt_saver')
  }

  const handleOnShareApp = async () => {
    Toast.show(t('common:text_actions.share_app_start'), {
      ...toastConfiguration,
      duration: 500,
    })
    const options: ShareOptions = {
      message: t('common:text_actions.share_app_message') as string,
      url: 'https://play.google.com/store/apps/details?id=com.twt_saver',
    }

    Share.open(options)
      .then(res => {
        Toast.show(t('common:text_actions.share_app_success'), {
          ...toastConfiguration,
          duration: 500,
        })
      })
      .catch(err => {
        err && console.log(err)
      })
  }

  const handleOnPrivacyPolicy = async () => {
    Linking.openURL('https://brunofariasdev.blogspot.com/2022/08/download-saver-para-twitter-privacy.html')
  }

  const handleOnMarketGPlay = async () => {
    Linking.openURL('https://play.google.com/store/apps/dev?id=7455642269620120824')
  }

  const CheckConnectivity = () => {
    NetInfo.fetch()
      .then(state => {
        if (!state.isConnected) {
          Toast.show(t('common:text_actions.no_connection_message'), { ...toastConfiguration, duration: 5000 })
        }
      })
      .catch((err: string) => {
        console.log(err)
      })
  }

  return {
    handleOnShareApp,
    handleOnRateUs,
    handleOnMarketGPlay,
    handleOnPrivacyPolicy,
    CheckConnectivity,
  }
}
