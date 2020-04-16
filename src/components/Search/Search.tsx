import React from 'react';
import styles from './styles';
import {FlatList, View, TextInput} from 'react-native';
import {useStationGet} from '../../hooks/lib';
import Item from './Item';

function Search() {
  const colorList = useStationGet('colorList');

  return (
    <>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.search}
          placeholder="지하철역을 입력해 주세요"
          onChange={(text) => console.log(text)}
        />
      </View>
      <FlatList
        data={Object.keys(colorList.toJS())}
        renderItem={({item}) => (
          <Item station={item} color={colorList.get(item)!} />
        )}
        keyExtractor={(item) => item}
      />
    </>
  );
}

export default Search;
