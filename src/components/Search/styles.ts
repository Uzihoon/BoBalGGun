import {StyleSheet} from 'react-native';
import {Color} from '../../styles/common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchBox: {
    height: 61,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 21,
  },
  icon: {
    width: 21,
    height: 21,
    marginRight: 13,
  },
  search: {
    height: 61,
    flex: 1,
    color: Color.darkGray,
    fontSize: 18,
  },
  flatList: {
    flex: 1,
    borderColor: '#f2f3f9',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingRight: 15,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
  },
});

export default styles;
