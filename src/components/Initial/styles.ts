import {StyleSheet} from 'react-native';
import {Color} from 'src/styles/common';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9DCA7',
  },
  logo: {
    width: 105,
    height: 107,
    marginBottom: 15,
  },
  text: {
    fontSize: 14,
    color: Color.theme,
  },
});

export default styles;
