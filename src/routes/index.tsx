import React, { useCallback, useMemo } from 'react'
import { SafeAreaView, StatusBar, StatusBarStyle } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import { ThemeProvider } from 'styled-components/native'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTranslation } from 'react-i18next'
import { Home } from '../pages/Home'

import { useAppSelector } from '../core/hooks/useAppStore'
import { lightTheme, darkTheme } from '../styles'

import TabNavigation from '../navigation'
import Settings from '../pages/Settings'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const AppRoute: React.FC = () => {
  const { t } = useTranslation(['common'])
  const homePageReducer = useAppSelector(state => state.commonsReducer)

  const tabBarBottom = useCallback((props: BottomTabBarProps) => <TabNavigation {...props} />, [])

  const themeProps = useMemo(
    () =>
      homePageReducer.darkMode
        ? {
            theme: darkTheme,
            background: '#121214',
            barContent: 'light-content',
          }
        : {
            theme: lightTheme,
            background: 'transparent',
            barContent: 'light-content',
          },
    [homePageReducer.darkMode],
  )

  const routesTab = useCallback(
    () => (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
        initialRouteName="Inicio"
        tabBar={tabBarBottom}>
        <Tab.Screen
          name={t('common:menu_bottom.home')}
          component={Home}
          initialParams={{ icon: 'home' }}
          options={{ unmountOnBlur: true }}
        />
        <Tab.Screen
          name={t('common:menu_bottom.trade')}
          component={Home}
          initialParams={{ icon: 'trending-up' }}
          options={{ unmountOnBlur: true }}
        />
        <Tab.Screen
          name={t('common:menu_bottom.portfolio')}
          component={Settings}
          initialParams={{ icon: 'pie-chart' }}
          options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
    ),
    [t, tabBarBottom],
  )

  return (
    <ThemeProvider theme={themeProps.theme}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: themeProps.background,
        }}>
        <NavigationContainer>
          <StatusBar barStyle={themeProps.barContent as StatusBarStyle} backgroundColor="#312e38" />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={routesTab} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default AppRoute
