import React from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import {useStationGet} from 'src/hooks/lib';
import {openSearchModal} from 'src/navigation/Navigation';
import useStationActions from 'src/hooks/station/useStationActions';

interface IItemProps {
  station: string;
}

function Item({station}: IItemProps) {
  const lineInfo = useStationGet('lineInfo');
  const stationActions = useStationActions();
  const handleModal = (line: string) => {
    openSearchModal(line);
    stationActions.onSetData({key: 'modalLine', value: line});
  };
  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.lineIcon,
          {backgroundColor: lineInfo.getIn([station, 'color'])},
        ]}>
        <Text style={styles.lineText}>
          {lineInfo.getIn([station, 'title'])}
        </Text>
      </View>
      <TouchableOpacity onPress={() => handleModal(station)}>
        <Text style={styles.touchText}>지하철역 전체보기</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Item;
