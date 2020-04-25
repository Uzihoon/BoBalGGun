import {StyleSheet} from 'react-native';
import {Color} from '../../styles/common';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  icon: {
    width: 112,
    height: 112,
    marginBottom: 48,
  },
  desc: {
    color: 'rgb(136, 136, 136)',
    fontSize: 14,
  },
  button: {
    height: 50,
    backgroundColor: Color.theme,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 68,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default styles;
