import {StyleSheet} from 'react-native';
import {Color} from 'src/styles/common';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomWidth: 1,
    borderColor: '#f4f4f4',
  },
  lineIcon: {
    padding: 8,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28 / 2,
    minWidth: 60,
    marginRight: 20,
  },
  lineText: {
    color: '#ffffff',
    fontSize: 13,
  },
  station: {
    color: Color.darkGray,
    fontSize: 14,
  },
});

export default styles;
