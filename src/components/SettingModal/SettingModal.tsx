import React from 'react';
import styles from './styles';
import {Modal, Text, View, TouchableHighlight, Linking} from 'react-native';

interface ISettingModalProps {
  visible: boolean;
}

function SettingModal({visible}: ISettingModalProps) {
  const handlePress = () => {
    Linking.canOpenURL('app-settings:')
      .then((supported) => {
        // Linking.openURL('app-settings:');
        Linking.openSettings();
      })
      .catch((error) => {
        Linking.openSettings();
      });
  };

  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.wrapper}>
        <View style={styles.modal}>
          <View style={styles.setting}>
            <Text style={styles.info}>
              보발꾼을 이용하시려면 위치 권한이 필요해요.
            </Text>
            <Text style={styles.desc}>휴대폰 설정 > 보발꾼</Text>
          </View>
          <TouchableHighlight style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>지금 설정</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}

export default SettingModal;
