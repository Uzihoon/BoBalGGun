import {StyleSheet} from 'react-native';
import {Color} from '../../styles/common';

const todo = '#3cb44a';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 50,
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
    backgroundColor: todo,
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
    fontSize: 18,
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
    borderColor: todo,
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
    color: todo,
    fontWeight: 'bold',
  },
  stationInfo: {
    marginTop: 3,
    fontSize: 31,
    color: todo,
    fontWeight: 'bold',
  },
  confirm: {
    color: Color.theme,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
