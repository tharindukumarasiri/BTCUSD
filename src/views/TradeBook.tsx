import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, ScrollView, View, Text} from 'react-native';
import TradeBookSocket from '../services/TradeBookSocket';
import {useSelector} from 'react-redux';
import {TradeBookRow, TableColumnTitle} from '../components';
import TradeBookRowStyles from '../styles/TradeBookRowStyles';
import {filterSort} from '../utils/commonUtils';

const TradeBook = () => {
  const {data} = useSelector((state: any) => state.TradeBook);

  useEffect(() => {
    TradeBookSocket().connect();

    return () => {
      TradeBookSocket().disconnect();
    };
  }, []);

  const {bids, offers} = filterSort(data);

  const renderItem = ({item}: {item: number[]}) => <TradeBookRow data={item} />;

  const exrtactKey = (item: number[]) => {
    if (item.length == 3) {
      let pp = item[0].toString();
      let tot = item[2].toString();
      let res = pp.concat(tot);
      return res;
    } else {
      return '0';
    }
  };

  const getList = (data: number[][]) => {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => exrtactKey(item)}
        scrollEnabled={false}
      />
    );
  };

  if (data.length === 1) return <Text style={TradeBookRowStyles.text}>Loading</Text>;

  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <View style={TradeBookRowStyles.row}>
          {TableColumnTitle('Total')}
          {TableColumnTitle('Price')}
        </View>
        <View style={TradeBookRowStyles.row}>
          {TableColumnTitle('Price')}
          {TableColumnTitle('Total')}
        </View>
      </View>
      <ScrollView nestedScrollEnabled={true} style={{width: '100%'}}>
        <View>
          <ScrollView horizontal={true} style={{width: '100%'}}>
            <View style={{flexDirection: 'row'}}>
              {getList(bids)}
              {getList(offers)}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TradeBook;
