import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

interface IInfo {
  title: string;
  onPress: () => void;
}

interface IButtonProps {
  buttonList: IInfo[];
}

function Button({buttonList}: IButtonProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.box}>
        {buttonList.map((button) => (
          <TouchableOpacity
            style={styles.button}
            onPress={button.onPress}
            key={button.title}>
            <Text style={styles.text}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default Button;
