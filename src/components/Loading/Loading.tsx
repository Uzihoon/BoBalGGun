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

function Loading() {
  const statusActions = useStatusActions();
  const [error, setError] = useState(false);
  const target = useStatusGet('target');

  const getLocation = async () => {
    try {
      const location = (await getPosition()) as GeolocationResponse;
      statusActions.onGetStation(location);
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
