import React from "react";
import { Text } from "react-native";

const TableColumnTitle = (text: String, styles = {}) => {
  return (
    <Text style={{...styles, ...{fontWeight: 'bold', marginTop: 5, marginBottom: 5, color: 'black'}}}>
      {text}
    </Text>
  );
};

export default TableColumnTitle;
