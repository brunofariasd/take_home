/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { TextInput } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'
import Toast from 'react-native-root-toast'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Container, IconSwitch, SwitchButton, SwitchContainerButton } from './styles'

import { useAppDispatch } from '../../core/hooks/useAppStore'
import { getDarkMode, showModalHowToUse } from '../../store/slices/commons'

import Input, { InputValueRefProps } from '../../components/Input'
import Button from '../../components/Button'
import Title from '../../components/Title'
import images from '../../assets/images'

import { updateTheme } from '../../store/slices/commons/actions'

export const HomePage: React.FC = () => {
  const { t } = useTranslation(['pages', 'common'])
  const dispatch = useAppDispatch()
  const darkMode = useSelector(getDarkMode)

  const inputRef = useRef<TextInput>(null)
  const inputValueRef = useRef<InputValueRefProps>({ value: '' })

  const handleDownload = useCallback(() => {}, [])

  const toggleSwitch = (isDark: boolean) => {
    dispatch(updateTheme({ isDark }))
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
      <Container>
        <SwitchContainerButton>
          {darkMode && <IconSwitch name="sun" size={21} />}
          <SwitchButton
            trackColor={{ false: '#81b0ff', true: '#767577' }}
            thumbColor={darkMode ? '#f4f3f4' : '#f5dd4b'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={value => toggleSwitch(value)}
            value={!!darkMode}
          />
          {!darkMode && <IconSwitch name="moon" size={21} />}
        </SwitchContainerButton>
        <Title icon="dollar-sign">{t('pages:home.title')}</Title>
        <Input
          inputRef={inputRef}
          inputValueRef={inputValueRef}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="url"
          name="email"
          icon="mail"
          placeholder={t('pages:home.email_button_placeholder')}
          returnKeyType="done"
          onSubmitEditing={() => {
            handleDownload()
          }}
          onChangeText={value => {
            inputValueRef.current.value = value
          }}
        />
        <Input
          inputRef={inputRef}
          inputValueRef={inputValueRef}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="url"
          name="password"
          icon="lock"
          placeholder={t('pages:home.password_button_placeholder')}
          returnKeyType="done"
          onSubmitEditing={() => {
            handleDownload()
          }}
          onChangeText={value => {
            inputValueRef.current.value = value
          }}
        />
        <Button
          onPress={() => {
            handleDownload()
          }}>
          {t('common:buttons.login_accessibility_label')}
        </Button>
      </Container>
    </ScrollView>
  )
}
