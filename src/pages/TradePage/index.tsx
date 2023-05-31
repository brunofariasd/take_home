import React from 'react'
import { useTranslation } from 'react-i18next'
import ListStatusView from '../../components/ListStatusView'

const TradePage: React.FC = () => {
  const { t } = useTranslation(['pages', 'common'])

  return <ListStatusView data={[]} />
}

export default TradePage
