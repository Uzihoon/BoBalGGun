import React from 'react';
import {View, Text} from 'react-native';

interface IItemProps {
  station: string;
  color: string;
}

function Item({station, color}: IItemProps) {
  return (
    <View style={}>
      <Text>{station}</Text>
    </View>
  );
}
export default Item;
