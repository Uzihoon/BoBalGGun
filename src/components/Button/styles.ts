import {StyleSheet} from 'react-native';
import {Color} from '../../styles/common';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    // marginBottom: 36,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: Color.theme,
    flex: 1,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default styles;
