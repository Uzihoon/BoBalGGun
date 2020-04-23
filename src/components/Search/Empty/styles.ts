import {StyleSheet} from 'react-native';
import {Color} from 'src/styles/common';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 160,
    marginBottom: 50,
    opacity: 0.1,
  },
  comment: {
    color: Color.lightGray,
    fontSize: 15,
    marginBottom: 20,
  },
});

export default styles;
