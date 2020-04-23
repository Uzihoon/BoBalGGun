import {StyleSheet} from 'react-native';

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
    justifyContent: 'space-between',
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
  },
  lineText: {
    color: '#ffffff',
    fontSize: 13,
  },
  touchText: {
    color: 'rgb(186,186,186)',
  },
});

export default styles;
