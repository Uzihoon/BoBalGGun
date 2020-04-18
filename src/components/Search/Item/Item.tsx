import React from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import {useStationGet} from '../../../hooks/lib';

interface IItemProps {
  station: string;
}

function Item({station}: IItemProps) {
  const lineInfo = useStationGet('lineInfo');
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          ...styles.lineIcon,
          backgroundColor: lineInfo.getIn([station, 'color']),
        }}>
        <Text style={styles.lineText}>
          {lineInfo.getIn([station, 'title'])}
        </Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.touchText}>지하철역 전체보기</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Item;
