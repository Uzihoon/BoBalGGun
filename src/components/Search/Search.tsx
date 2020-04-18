import React from 'react';
import styles from './styles';
import {SafeAreaView, FlatList, View, TextInput, Image} from 'react-native';
import {useStationGet} from '../../hooks/lib';
import Item from './Item';
import SearchIcon from '../../assets/search.png';

function Search() {
  const colorList = useStationGet('lineList');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBox}>
        <Image style={styles.icon} source={SearchIcon} />
        <TextInput
          style={styles.search}
          placeholder="지하철역을 입력해 주세요"
          onChange={(text) => console.log(text)}
          clearButtonMode="always"
        />
      </View>
      <FlatList
        data={colorList.toJS()}
        renderItem={({item}) => <Item station={item} />}
        keyExtractor={(item) => item}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
}

export default Search;
