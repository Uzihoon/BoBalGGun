import React, {useState, useEffect} from 'react';
import styles from './styles';
import {FlatList} from 'react-native';
import Result from 'src/components/Result';
import stationList from 'src/store/redux/station/station.json';
import {IStation} from 'src/store/redux/station';
import {useStationGet} from 'src/hooks/lib';
import useStationActions from 'src/hooks/station/useStationActions';

function Line() {
  const modalLine = useStationGet('modalLine');
  const stationActions = useStationActions();
  const [list, setList] = useState<IStation[]>([]);

  useEffect(() => {
    if (!modalLine) return;
    const _list = stationList.DATA.filter(
      (station: IStation) => station.line_num === modalLine,
    );
    setList(_list);

    return () => {
      stationActions.onSetData({key: 'modalLine', value: null});
    };
  }, [modalLine]);
  return (
    <FlatList
      data={list}
      renderItem={({item}) => <Result station={item} />}
      keyExtractor={(item) => item.station_cd}
      style={styles.wrapper}
    />
  );
}

export default Line;
