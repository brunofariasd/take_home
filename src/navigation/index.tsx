import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useCallback, useEffect, useState } from 'react';
import Tab from '../components/TabBar';
import { ContainerTabNavigation, TabContainer } from './style';

interface RouteParams {
  icon: string;
}

const TabNavigation: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const [selected, setSelected] = useState('Inicio');
  const { routes } = state;

  const handlePress = useCallback(
    (activeTab, index) => {
      if (state.index !== index) {
        navigation.navigate(activeTab);
      }
    },
    [navigation, state.index],
  );

  useEffect(() => {
    setSelected(routes[state.index].name);
  }, [routes, state.index]);

  return (
    <ContainerTabNavigation>
      <TabContainer>
        {routes.map((route, index) => {
          const { icon } = route.params as RouteParams;

          return (
            <Tab
              tab={route}
              icon={icon}
              onPress={() => handlePress(route.name, index)}
              key={route.key}
              isFocused={route.name === selected}
            />
          );
        })}
      </TabContainer>
    </ContainerTabNavigation>
  );
};

export default TabNavigation;
