import Geolocation from '@react-native-community/geolocation';

export const getPosition = (option?: any) => {
  return new Promise(function (resolve, reject) {
    Geolocation.getCurrentPosition(resolve, reject, option);
  });
};
