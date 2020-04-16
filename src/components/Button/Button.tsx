import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

interface IButtonProps {
  title: string;
  onPress: () => void;
}

function Button({title, onPress}: IButtonProps) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
