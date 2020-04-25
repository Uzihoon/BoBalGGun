import React, {useEffect, useState} from 'react';
import styles from './styles';
import Logo from 'src/assets/logo.png';
import {View, Image, Text} from 'react-native';
import {getPosition} from 'src/lib';
import {GeolocationResponse} from '@react-native-community/geolocation';
import useStatusActions from 'src/hooks/status/useStatusActions';
import {pushConfirmation} from 'src/navigation';
import {useStatusGet} from 'src/hooks/lib';
import {pushFail} from 'src/navigation';
import {getNearStation} from 'src/api';
import GeoKo from 'src/lib/GeoKo';
import GeoPoint from 'src/lib/GeoPoint';

const geoKo = new GeoKo();

function Loading() {
  const statusActions = useStatusActions();
  const [error, setError] = useState(false);
  const target = useStatusGet('target');

  const getLocation = async () => {
    try {
      const location = (await getPosition()) as GeolocationResponse;
      const x = location.coords.longitude;
      const y = location.coords.latitude;
      const point = new GeoPoint(x, y);
      const geoToTm = geoKo.convert(0, 2, point);
      const {data} = await getNearStation(geoToTm.x, geoToTm.y);
      console.log(data);
      if (data.errorMessage.status !== 200) {
        setError(true);
      } else {
        const id = data.stationList[0].statnId;
        const station = id.slice(id.length - 4, id.length);
        statusActions.onSetTargetStation({station, analysis: false});
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    if (!target) {
      getLocation();
    } else if (!target.state) {
      setError(true);
    } else {
      pushConfirmation();
    }
  }, []);

  useEffect(() => {
    if (!target) return;
    if (target.state) {
      pushConfirmation();
    } else if (!target.state) {
      setError(true);
    }
  }, [target]);

  useEffect(() => {
    if (error) pushFail();
  }, [error]);

  return (
    <View style={styles.wrapper}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>근처 역을 찾는 중...</Text>
    </View>
  );
}

export default Loading;
