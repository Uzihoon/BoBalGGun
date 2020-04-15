import {StyleSheet} from 'react-native';
import {Color} from '../../styles/common';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    padding: 27,
  },
  logo: {
    width: 64,
    height: 66,
    marginBottom: 15,
  },
  mainTitle: {
    fontSize: 23,
    color: Color.theme,
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 12,
    color: Color.lightGray,
  },
  permissionBox: {
    marginTop: 37,
  },
  permissionTitle: {
    fontSize: 15.5,
    color: Color.darkGray,
    marginBottom: 27,
  },
  placeholder: {
    width: 20,
    height: 30,
  },
  notification: {
    width: 22,
    height: 27,
  },
  iconBox: {
    marginRight: 23,
  },
  permission: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  innerTitle: {
    fontSize: 15.5,
    color: Color.darkGray,
    marginBottom: 11,
  },
  innerSubTitle: {
    fontSize: 15.5,
    color: Color.lightGray,
  },
});

export default styles;
