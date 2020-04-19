import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from './styles';
import Button from '../Button';
import Arrow from '../../assets/arrow.png';
import Loading from '../Loading';
import {useStatusGet} from '../../hooks/lib';
import useStatusActions from '../../hooks/status/useStatusActions';
import Empty from '../Empty';
import {GeolocationResponse} from '@react-native-community/geolocation';
import {getPosition} from '../../lib';

function Confirmation() {
  const [error, setError] = useState(false);

  const target = useStatusGet('target');
  const statusActions = useStatusActions();
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

  const getLocation = async () => {
    try {
      const location = (await getPosition()) as GeolocationResponse;
      statusActions.onGetStation(location);
    } catch (erro) {
      setError(true);
    }
  };

  useEffect(() => {
    console.log(new Date());
    if (!target) getLocation();
  }, []);

  if (!target) return <Loading />;
  if (error || (target && !target.state)) return <Empty />;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.desc}>현재 알고 싶은 역은...</Text>
      <View style={styles.confirmBox}>
        <View style={[styles.line, {backgroundColor: target.color}]}>
          {target.prev.stationNm !== '' ? (
            <View style={[styles.betweenStation, {marginRight: 95}]}>
              <Image source={Arrow} style={styles.icon} />
              <Text
                style={[
                  styles.betweenText,
                  {
                    fontSize: target.prev.stationNm.length > 7 ? 12 : 18,
                  },
                ]}>
                {target.prev.stationNm}
              </Text>
            </View>
          ) : (
            <View style={[styles.betweenStation, {marginRight: 95}]} />
          )}
          {target.next.stationNm !== '' ? (
            <View style={[styles.betweenStation, {marginLeft: 95}]}>
              <Image
                source={Arrow}
                style={[styles.icon, {transform: [{rotateY: '180deg'}]}]}
              />
              <Text
                style={[
                  styles.betweenText,
                  {
                    fontSize: target.next.stationNm.length > 7 ? 14 : 18,
                  },
                ]}>
                {target.next.stationNm}
              </Text>
            </View>
          ) : (
            <View style={[styles.betweenStation, {marginLeft: 95}]} />
          )}
        </View>
        <View style={styles.infoBox}>
          <View style={[styles.info, {borderColor: target.color}]}>
            <View style={styles.infoText}>
              <Text style={[styles.lineInfo, {color: target.color}]}>
                {target.line}
              </Text>
              <Text
                style={[
                  styles.stationInfo,
                  {
                    color: target.color,
                    fontSize: target.current.stationNm.length > 7 ? 20 : 31,
                  },
                ]}>
                {target.current.stationNm}
              </Text>
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
