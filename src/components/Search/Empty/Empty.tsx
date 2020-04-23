import React from 'react';
import styles from './styles';
import empty from 'src/assets/empty.png';
import {Image, View, Text} from 'react-native';

function Empty() {
  return (
    <View>
      <Image source={empty} />
      <Text>찾으시는 역이 존재하지 않아요.</Text>
    </View>
  );
}
export default Empty;
