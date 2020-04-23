import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import {useStationGet} from 'src/hooks/lib';

interface IStation {
  line_num: string;
  station_cd: string;
  station_nm_eng: string;
  station_nm: string;
  fr_code: string;
}

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
        <Text>{station.station_nm}</Text>
      </View>
    </View>
  );
}

export default Result;
