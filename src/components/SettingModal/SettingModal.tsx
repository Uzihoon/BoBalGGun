import React from 'react';
import styles from './styles';
import {Modal, Text, View, TouchableHighlight} from 'react-native';

function SettingModal() {
  return (
    <Modal
      onRequestClose={() => {
        console.log('a');
      }}
      transparent={true}
      animationType="slide"
      visible={true}>
      <View style={styles.wrapper}>
        <View style={styles.modal}>
          <View style={styles.setting}>
            <Text style={styles.info}>
              보발꾼을 이용하시려면 위치 권한이 필요해요.
            </Text>
            <Text style={styles.desc}>휴대폰 설정 > 보발꾼</Text>
          </View>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>지금 설정</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}

export default SettingModal;
