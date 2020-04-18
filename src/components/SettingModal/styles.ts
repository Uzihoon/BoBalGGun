import {StyleSheet} from 'react-native';
import {Color} from '../../styles/common';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modal: {
    width: '80%',
    minHeight: 200,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  setting: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  info: {
    fontSize: 20,
    color: Color.darkGray,
    textAlign: 'center',
    marginBottom: 15,
  },
  desc: {
    fontSize: 15,
    color: Color.lightGray,
  },
  button: {
    height: 50,
    backgroundColor: Color.theme,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default styles;
