import {StyleSheet} from 'react-native';
import {Color} from '../../styles/common';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 105,
    height: 107,
  },
  title: {
    color: Color.theme,
    fontSize: 15,
    marginTop: 20,
  },
});

export default styles;
