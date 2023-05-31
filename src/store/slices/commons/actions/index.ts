import { useAsyncStorage } from '@react-native-async-storage/async-storage'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { updateThemeApp } from '..'

export const getActiveTheme = createAsyncThunk('commons/getActiveTheme', async (_, { dispatch }) => {
  const { getItem, setItem } = useAsyncStorage('@TWTDownloadSaver:theme')
  const activeTheme = await getItem()

  if (activeTheme) {
    return dispatch(updateThemeApp(JSON.parse(activeTheme)))
  }

  await setItem(JSON.stringify(false))

  return dispatch(updateThemeApp(false))
})

export const updateTheme = createAsyncThunk<void, { isDark: boolean }>(
  'commons/updateTheme',
  async ({ isDark }, { dispatch }) => {
    dispatch(updateThemeApp(isDark))
    const { setItem } = useAsyncStorage('@TWTDownloadSaver:theme')

    await setItem(JSON.stringify(isDark))
  },
)
