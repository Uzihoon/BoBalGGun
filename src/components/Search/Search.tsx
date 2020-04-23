import React, {useState} from 'react';
import styles from './styles';
import {
  SafeAreaView,
  FlatList,
  View,
  TextInput,
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {useStationGet} from '../../hooks/lib';
import Item from './Item';
import Result from './Result';
import Empty from './Empty';
import SearchIcon from 'src/assets/search.png';
import stationList from 'src/store/redux/station/station.json';

interface IStation {
  line_num: string;
  station_cd: string;
  station_nm_eng: string;
  station_nm: string;
  fr_code: string;
}

let iv: any;

function Search() {
  const colorList = useStationGet('lineList');
  const [filterList, setFilterList] = useState<null | any[]>(null);

  const handleSearch = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const value = event.nativeEvent.text;
    if (iv) clearTimeout(iv);

    iv = setTimeout(() => handleFilter(value), 300);
  };

  const handleFilter = (val: string) => {
    if (val === '' || !val) {
      setFilterList(null);
      return;
    }
    const _filterList = stationList.DATA.filter(
      (station: IStation) =>
        station.station_nm.includes(val) ||
        station.station_nm_eng.includes(val) ||
        station.line_num.includes(val) ||
        station.fr_code.includes(val),
    );
    setFilterList(_filterList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBox}>
        <Image style={styles.icon} source={SearchIcon} />
        <TextInput
          style={styles.search}
          placeholder="지하철역을 입력해 주세요"
          onChange={handleSearch}
          clearButtonMode="always"
        />
      </View>
      {!filterList ? (
        <FlatList
          data={colorList.toJS()}
          renderItem={({item}) => <Item station={item} />}
          keyExtractor={(item) => item}
          style={styles.flatList}
        />
      ) : filterList.length <= 0 ? (
        <Empty />
      ) : (
        <FlatList
          data={filterList}
          renderItem={({item}) => <Result station={item} />}
          keyExtractor={(item) => item.station_cd}
          style={styles.flatList}
        />
      )}
    </SafeAreaView>
  );
}

export default Search;
