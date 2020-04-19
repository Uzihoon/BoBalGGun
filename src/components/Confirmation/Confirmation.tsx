import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Button from '../Button';
import Arrow from '../../assets/arrow.png';
import Loading from '../Loading';
import {useStatusGet, useStationGet} from '../../hooks/lib';
import useStatusActions from '../../hooks/status/useStatusActions';
import Empty from '../Empty';
import stationList from '../../store/redux/station/station.json';
import {GeolocationResponse} from '@react-native-community/geolocation';
import {getPosition} from '../../lib';

function Confirmation() {
  const [error, setError] = useState(false);

  const [info, setInfo] = useState({
    color: '#ffffff',
    station: '',
    line: '',
  });

  const target = useStatusGet('target');
  const lineInfo = useStationGet('lineInfo');
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
    if (!target) getLocation();
  }, []);

  useEffect(() => {
    if (!target || !target.state) return;
    const targetStation = stationList.DATA.find(
      (list: any) => list.station_cd === target.code,
    );
    if (!targetStation) {
      setError(true);
    } else {
      const lineNum = targetStation.line_num as keyof typeof lineInfo;
      const station = targetStation.station_nm;
      const color = lineInfo.getIn([lineNum, 'color']);
      const line = lineInfo.getIn([lineNum, 'title']);

      setInfo({station, color, line});
    }
  }, [target]);

  if (!target) return <Loading />;
  if (error || (target && !target.state)) return <Empty />;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.desc}>현재 알고 싶은 역은...</Text>
      <View style={styles.confirmBox}>
        <View style={{...styles.line, backgroundColor: info.color}}>
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
          <View style={{...styles.info, borderColor: info.color}}>
            <View style={styles.infoText}>
              <Text style={{...styles.lineInfo, color: info.color}}>
                {info.line}
              </Text>
              <Text style={{...styles.stationInfo, color: info.color}}>
                {info.station}
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
