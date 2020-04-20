import React from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
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
          <TouchableHighlight
            style={styles.button}
            onPress={button.onPress}
            key={button.title}
            underlayColor="#2a1b00">
            <Text style={styles.text}>{button.title}</Text>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
}

export default Button;
