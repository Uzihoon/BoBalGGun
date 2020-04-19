import React from 'react';
import styles from './styles';
import Logo from '../../assets/logo.png';
import {View, Image, Text} from 'react-native';

function Loading() {
  return (
    <View style={styles.wrapper}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>근처 역을 찾는 중...</Text>
    </View>
  );
}

export default Loading;
