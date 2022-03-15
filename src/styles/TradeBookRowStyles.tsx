import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: width * 0.5,
    justifyContent: 'space-between',
    padding: 5,
    borderWidth: 1,
    marginBottom: 3,
  },
});
