import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import TradesSocket from '../services/TradesSocket';
import {TradesRow, TableColumnTitle} from '../components';
import TradesRowStyle from '../styles/TradesRowStyle';

const Trades = () => {
  const {data} = useSelector((state: any) => state.Trades);

  useEffect(() => {
    TradesSocket().connect();

    return () => {
      TradesSocket().disconnect();
    };
  }, []);

  const renderItem = ({item}: {item: number[]}) => <TradesRow data={item} />;

  const exrtactKey = (item: number[]) => {
    let aa = item[1].toString();
    let tt = item[1].toString();
    let tot = item[2].toString();
    let pp = item[2].toString();
    let res = pp.concat(tot, tt, aa);
    return res;
  };

  if (data.length === 1) {
    return <Text style={TradesRowStyle.text}>Loading</Text>;
  } else {
    let sortedData = data.slice().sort(function (a: number[], b: number[]) {
      return b[1] - a[1];
    });

    return (
      <SafeAreaView>
        <View style={TradesRowStyle.row}>
          {TableColumnTitle('Time', TradesRowStyle.timeText)}
          <View style={TradesRowStyle.priceContainer}>
            {TableColumnTitle('Price')}
          </View>
          {TableColumnTitle('Amount', TradesRowStyle.amountText)}
        </View>
        <FlatList
          data={sortedData}
          renderItem={renderItem}
          keyExtractor={item => exrtactKey(item)}
        />
      </SafeAreaView>
    );
  }
};

export default Trades;
