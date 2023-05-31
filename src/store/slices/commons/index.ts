/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/no-cycle */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../..'

type HomeState = {
  loadingRoot: boolean
  showModalLoading: boolean
  showModalHowToUse: boolean
  darkMode: boolean
}

const initialState: HomeState = {
  loadingRoot: false,
  showModalLoading: false,
  showModalHowToUse: false,
  darkMode: false,
}

const commonsReducer = createSlice({
  name: 'commons',
  initialState,
  reducers: {
    updateLoadingRoot(state, action: PayloadAction<boolean>) {
      state.loadingRoot = action.payload
    },
    updateThemeApp(state, action: PayloadAction<boolean>) {
      state.darkMode = action.payload
    },
    showModalLoading(state, action: PayloadAction<boolean>) {
      state.showModalLoading = action.payload
    },
  },
})

export const { updateLoadingRoot, showModalLoading, updateThemeApp } = commonsReducer.actions

export default commonsReducer.reducer

/** Selectors */
const rootSelector = (state: RootState): HomeState => state.commonsReducer

export const getDarkMode = createSelector([rootSelector], homeState => homeState.darkMode)

export const getLoadingRoot = createSelector([rootSelector], homeState => homeState.loadingRoot || [])
