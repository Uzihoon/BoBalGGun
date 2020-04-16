import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Button from '../Button';
import Arrow from '../../assets/arrow.png';

function Confirmation() {
  const buttonList = [
    {
      title: '네 맞아요',
      onPress: () => {},
    },
    {
      title: '아니요 검색할래요',
      onPress: () => {},
    },
  ];
  return (
    <View style={styles.wrapper}>
      <Text style={styles.desc}>현재 알고 싶은 역은...</Text>
      <View style={styles.confirmBox}>
        <View style={styles.line}>
          <View style={{...styles.betweenStation, marginRight: 95}}>
            <Image source={Arrow} style={styles.icon} />
            <Text style={styles.betweenText}>서울대입구</Text>
          </View>
          <View style={{...styles.betweenStation, marginLeft: 95}}>
            <Image
              source={Arrow}
              style={{...styles.icon, transform: [{rotateY: '180deg'}]}}
            />
            <Text style={styles.betweenText}>사당</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.info}>
            <View style={styles.infoText}>
              <Text style={styles.lineInfo}>2호선</Text>
              <Text style={styles.stationInfo}>낙성대</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.confirm}>해당 역이 맞나요?</Text>
      <Button buttonList={buttonList} />
    </View>
  );
}

export default Confirmation;
