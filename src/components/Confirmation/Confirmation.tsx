import React, {useState, useEffect} from 'react';
import {View, Text, Image, SafeAreaView, StatusBar} from 'react-native';
import styles from './styles';
import Button from 'src/components/Button';
import Arrow from 'src/assets/arrow.png';
import Loading from 'src/components/Loading';
import {useStatusGet, useAnalysisGet} from 'src/hooks/lib';
import {pushAnalysis, pushSearch, pushFail} from 'src/navigation';
import Spinner from 'react-native-loading-spinner-overlay';
import useAnalysisActions from 'src/hooks/analysis/useAnalysisActions';

function Confirmation() {
  const [spinner, setSpinner] = useState(false);
  const target = useStatusGet('target');
  const analysisActions = useAnalysisActions();
  const analysis = useAnalysisGet('analysis');
  const buttonList = [
    {
      title: '네 맞아요',
      onPress: () => {
        if (!target) return;
        setSpinner(true);
        analysisActions.onAnalysisStation(target);
      },
    },
    {
      title: '아니요 검색할래요',
      onPress: () => {
        pushSearch();
      },
    },
  ];

  useEffect(() => {
    if (!analysis.get('analysised')) return;
    pushAnalysis();
  }, [analysis]);

  useEffect(() => {
    if (target && !target.state) {
      pushFail();
    }
  }, [target]);
  if (!target || !target.state) return <Loading />;
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle={'dark-content'} />
      <Spinner
        visible={spinner}
        textContent={'혼잡도 분석하는 중...'}
        textStyle={styles.spinnerText}
      />
      <Text style={styles.desc}>현재 알고 싶은 역은...</Text>
      <View style={styles.confirmBox}>
        <View style={[styles.line, {backgroundColor: target.color}]}>
          {target.prev.stationNm !== '' ? (
            <View style={[styles.betweenStation, {marginRight: 95}]}>
              <Image source={Arrow} style={styles.icon} />
              <Text
                style={[
                  styles.betweenText,
                  {
                    fontSize: target.prev.stationNm.length > 7 ? 12 : 18,
                  },
                ]}>
                {target.prev.stationNm}
              </Text>
            </View>
          ) : (
            <View style={[styles.betweenStation, {marginRight: 95}]} />
          )}
          {target.next.stationNm !== '' ? (
            <View style={[styles.betweenStation, {marginLeft: 95}]}>
              <Image
                source={Arrow}
                style={[styles.icon, {transform: [{rotateY: '180deg'}]}]}
              />
              <Text
                style={[
                  styles.betweenText,
                  {
                    fontSize: target.next.stationNm.length > 7 ? 14 : 18,
                  },
                ]}>
                {target.next.stationNm}
              </Text>
            </View>
          ) : (
            <View style={[styles.betweenStation, {marginLeft: 95}]} />
          )}
        </View>
        <View style={styles.infoBox}>
          <View style={[styles.info, {borderColor: target.color}]}>
            <View style={styles.infoText}>
              <Text style={[styles.lineInfo, {color: target.color}]}>
                {target.line}
              </Text>
              <Text
                style={[
                  styles.stationInfo,
                  {
                    color: target.color,
                    fontSize: target.current.stationNm.length > 7 ? 20 : 31,
                  },
                ]}>
                {target.current.stationNm}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.confirm}>해당 역이 맞나요?</Text>
      <Button buttonList={buttonList} />
    </SafeAreaView>
  );
}

export default Confirmation;
