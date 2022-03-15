import React from 'react';
import {View, Text} from 'react-native';
import TradeBookRowStyles from '../styles/TradeBookRowStyles';

const TradeBookRow = ({data}: {data: number[]}) => {
  if (data[2] > 0) {
    return (
      <View style={TradeBookRowStyles.row}>
        <Text style={TradeBookRowStyles.text}>{Math.abs(data[2])}</Text>
        <Text style={TradeBookRowStyles.text}>{data[0]}</Text>
      </View>
    );
  } else {
    return (
      <View style={TradeBookRowStyles.row}>
        <Text style={TradeBookRowStyles.text}>{data[0]}</Text>
        <Text style={TradeBookRowStyles.text}>{Math.abs(data[2])}</Text>
      </View>
    );
  }
};

export default TradeBookRow;
