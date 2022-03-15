import React from 'react';
import {View, Text} from 'react-native';
import TradesRowStyle from '../styles/TradesRowStyle';
import {roundOff} from '../utils/commonUtils';

const TradesRow = ({data}: {data: number[]}) => {
  const getTime = () => {
    const date = new Date(data[1]);
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    const seconds = date.getSeconds().toString();

    return hours.concat(':', minutes, ':', seconds);
  };

  return (
    <View style={TradesRowStyle.row}>
      <Text style={{...TradesRowStyle.timeText, ...TradesRowStyle.text}}>{getTime()}</Text>
      <View style={TradesRowStyle.priceContainer}>
        <Text style={TradesRowStyle.text}>{roundOff(data[3])}</Text>
      </View>
      <Text style={{...TradesRowStyle.amountText, ...TradesRowStyle.text}}>{roundOff(data[2], 4)}</Text>
    </View>
  );
};

export default TradesRow;
