import {StyleSheet} from 'react-native';
import {Color} from '../../styles/common';

const todo = '#3cb44a';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f2f3f9',
    flex: 1,
  },
  confirmBox: {
    flex: 1,
    alignItems: 'center',
    marginTop: -50,
  },
  line: {
    height: 169,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
  },
  infoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 83,
  },
  betweenStation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 119,
    marginTop: 50,
    opacity: 0.5,
  },
  targetStation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 119,
    marginTop: 50,
    opacity: 1,
  },
  betweenText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  icon: {
    width: 32,
    height: 10,
    marginBottom: 8,
  },
  info: {
    width: 136,
    height: 136,
    borderRadius: 136 / 2,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  stationInfo: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  comingBox: {
    marginTop: 70,
    textAlign: 'center',
    marginBottom: 20,
  },

  coming: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    color: 'rgb(68,68,68)',
  },
  analysis: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 22,
    shadowColor: 'rgba(0, 0, 0, 0.35)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    margin: 22,
    marginBottom: 0,
  },
  title: {
    textAlign: 'center',
    color: 'rgb(180,180,180)',
    fontSize: 16,
  },
  faceBox: {
    flex: 1,
    alignItems: 'center',
    marginTop: 19,
    marginBottom: 19,
  },
  face: {
    width: 128,
    height: 128,
  },
  percent: {
    fontSize: 62,
    fontWeight: 'bold',
    color: 'rgb(66,66,66)',
    textAlign: 'center',
  },
  comment: {
    marginTop: 17,
    textAlign: 'center',
    fontSize: 18,
    color: 'rgb(180,180,180)',
  },
  desc: {
    marginLeft: 22,
    marginTop: 14,
    fontSize: 10,
    color: 'rgb(192,192,192)',
  },
  statisticsBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  label: {
    fontSize: 15,
    color: 'rgb(180,180,180)',
    marginBottom: 18,
  },
  value: {
    fontSize: 37,
    color: todo,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 48,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: Color.theme,
    fontWeight: 'bold',
  },
});

export default styles;
