import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from './core/hooks/useAppStore'
import { getActiveTheme } from './store/slices/commons/actions'

import LoadingPage from './pages/LoadingPage'
import AppRoute from './routes'
import { updateLoadingRoot } from './store/slices/commons'

import './i18n'

const Main: React.FC = () => {
  const dispatch = useAppDispatch()
  const homeReducer = useAppSelector(state => state.commonsReducer)

  useEffect(() => {
    dispatch(updateLoadingRoot(true))
    dispatch(getActiveTheme())
    setTimeout(() => {
      dispatch(updateLoadingRoot(false))
    }, 1500)
  }, [dispatch])

  return homeReducer.loadingRoot ? <LoadingPage /> : <AppRoute />
}

export default Main
