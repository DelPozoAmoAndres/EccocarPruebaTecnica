import React, { useState } from 'react';
import { Home } from './views/Home';

import { LightTheme,DarkTheme } from './components/Theme';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detail } from './views/Detail';
import { TouchableHighlightBase,useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

export const App = () => {

  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
