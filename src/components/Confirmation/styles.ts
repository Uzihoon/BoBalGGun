import {StyleSheet} from 'react-native';
import {Color} from '../../styles/common';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  desc: {
    marginTop: 128,
    textAlign: 'center',
    fontSize: 20,
    color: 'rgb(180,180,180)',
  },
  confirmBox: {
    marginTop: 24,
    flex: 1,
    alignItems: 'center',
  },
  line: {
    height: 73,
    alignSelf: 'stretch',
    marginTop: 58,
    display: 'flex',
    flexDirection: 'row',
  },
  infoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  betweenStation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 73,
  },
  betweenText: {
    // fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  icon: {
    width: 32,
    height: 10,
    marginBottom: 8,
  },
  info: {
    width: 190,
    height: 190,
    borderRadius: 190 / 2,
    borderWidth: 9.7,
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  infoText: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
  },
  lineInfo: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  stationInfo: {
    marginTop: 3,
    fontWeight: 'bold',
  },
  confirm: {
    color: Color.theme,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  spinnerText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default styles;
