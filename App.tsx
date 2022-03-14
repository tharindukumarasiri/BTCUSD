import React from 'react';
import {Home, TradeBook, Trades} from './src/views';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SCREENS = {
  Home: {
    title: 'BTCUSD', 
    component: Home
  },
  TradeBook: {
    title: 'Trade Book',
    component: TradeBook,
  },
  Trades: {
    title: 'Trades',
    component: Trades,
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {(Object.keys(SCREENS) as (keyof typeof SCREENS)[]).map((name) => (
            <Stack.Screen
              key={name}
              name={name}
              getComponent={() => SCREENS[name].component}
              options={{ title: SCREENS[name].title }}
            />
          ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
