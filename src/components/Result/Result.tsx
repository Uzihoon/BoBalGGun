import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import {useStationGet} from 'src/hooks/lib';
import {IStation} from 'src/store/redux/station';

interface IResultProps {
  station: IStation;
}

function Result({station}: IResultProps) {
  const lineInfo = useStationGet('lineInfo');

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.lineIcon,
          {backgroundColor: lineInfo.getIn([station.line_num, 'color'])},
        ]}>
        <Text style={styles.lineText}>
          {lineInfo.getIn([station.line_num, 'title'])}
        </Text>
      </View>
      <View>
        <Text style={styles.station}>{station.station_nm}</Text>
      </View>
    </View>
  );
}

export default Result;
