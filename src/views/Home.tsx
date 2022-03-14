import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {NAVIGATION_PAGES} from '../utils/enum';

const Home = ({navigation}: any) => {
  const navigateToPage = (pageName: String) => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView>
      <Button
        title="Trade book"
        onPress={() => navigateToPage(NAVIGATION_PAGES.TradeBook)}
      />
      <Button
        title="Trades"
        onPress={() => navigateToPage(NAVIGATION_PAGES.Trades)}
      />
    </SafeAreaView>
  );
};

export default Home;
