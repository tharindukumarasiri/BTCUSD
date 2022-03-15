import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, ScrollView, View, Text} from 'react-native';
import TradeBookSocket from '../services/TradeBookSocket';
import {useSelector} from 'react-redux';
import {State} from '../redux/tradeBook';
import TradeBookRow from '../components/TradeBookRow';
import TradeBookRowStyles from '../styles/TradeBookRowStyles';
import {filterSort} from '../utils/commonUtils';

const TradeBook = () => {
  const {data} = useSelector((state: State) => state.TradeBook);

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

  const getTitleText = (text: String) => {
    return (
      <Text style={{fontWeight: 'bold', marginTop: 5, marginBottom: 5}}>
        {text}
      </Text>
    );
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

  if (data.length === 1) return <Text>Loading</Text>;

  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <View style={TradeBookRowStyles.row}>
          {getTitleText('Total')}
          {getTitleText('Price')}
        </View>
        <View style={TradeBookRowStyles.row}>
          {getTitleText('Price')}
          {getTitleText('Total')}
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
