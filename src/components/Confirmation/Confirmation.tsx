import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function Confirmation() {
  return (
    <View style={styles.wrapper}>
      <Text>현재 알고 싶은 역은...</Text>
      <View style={styles.confirmBox}>
        <View></View>
      </View>
    </View>
  );
}

export default Confirmation;
