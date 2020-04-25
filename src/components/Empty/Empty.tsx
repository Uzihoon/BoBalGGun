import React from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';
import styles from './styles';
import EmptyIcon from '../../assets/empty.png';
import {pushSearch} from 'src/navigation';

function Empty() {
  return (
    <View style={styles.wrapper}>
      <Image source={EmptyIcon} style={styles.icon} />
      <Text style={styles.desc}>
        선택된 지하철이 없어요. 지하철역을 선택해주세요
      </Text>
      <TouchableHighlight onPress={pushSearch} style={styles.button}>
        <Text style={styles.text}>지하철역 검색</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Empty;
