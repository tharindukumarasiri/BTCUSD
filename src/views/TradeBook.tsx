import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import TradeBookSocket from '../services/TradeBookSocket';

const TradeBook = () => {

  useEffect(() => {
    TradeBookSocket().connect()

    return () => {
      TradeBookSocket().disconnect()
    };
  }, []);

  return <SafeAreaView></SafeAreaView>;
};
data: '[1942,[38817,2,0.28829127]]';
export default TradeBook;
