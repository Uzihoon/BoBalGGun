import React, {useEffect} from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';
import Logo from 'src/assets/logo.png';
import {displayName} from '../../../app.json';
import useStatusActions from 'src/hooks/status/useStatusActions';
import {useStatusGet} from 'hooks/lib';

function Initial() {
  const statusActions = useStatusActions();
  const permission = useStatusGet('permission');

  useEffect(() => {
    statusActions.onInitialCheck();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Image source={Logo} style={styles.logo} />
      <View>
        <Text style={styles.text}>{displayName}</Text>
      </View>
    </View>
  );
}

export default Initial;
