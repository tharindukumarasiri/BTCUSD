import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 5,
    borderWidth: 1,
    marginBottom: 3,
  },

  timeText: {
    width: width * 0.34,
  },

  priceContainer: {
    width: width * 0.5,
  },

  amountText: {
    justifyContent: 'flex-end',
  },

  text: {
    color: 'black'
  }

});
