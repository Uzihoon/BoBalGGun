import React, {useEffect, useState} from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import {useStationGet, useAnalysisGet} from 'src/hooks/lib';
import {IStation} from 'src/store/redux/station';
import useStatusActions from 'src/hooks/status/useStatusActions';
import Spinner from 'react-native-loading-spinner-overlay';
import {pushAnalysis} from 'src/navigation';

interface IResultProps {
  station: IStation;
}

function Result({station}: IResultProps) {
  const [loading, setLoading] = useState(false);
  const lineInfo = useStationGet('lineInfo');
  const statusActions = useStatusActions();
  const analysis = useAnalysisGet('analysis');

  const handleClick = () => {
    setLoading(true);
    statusActions.onSetTargetStation({
      station: station.station_cd,
      analysis: true,
    });
  };

  useEffect(() => {
    if (!analysis.get('analysised')) return;

    if (loading) {
      setLoading(false);
      pushAnalysis();
    }
  }, [analysis]);

  return (
    <TouchableOpacity style={styles.wrapper} onPress={handleClick}>
      <Spinner
        visible={loading}
        textContent={'혼잡도 분석하는 중...'}
        textStyle={styles.spinnerText}
      />
      <View
        style={[
          styles.lineIcon,
          {backgroundColor: lineInfo.getIn([station.line_num, 'color'])},
        ]}>
        <Text style={styles.lineText}>
          {lineInfo.getIn([station.line_num, 'title'])}
        </Text>
      </View>
      <View>
        <Text style={styles.station}>{station.station_nm}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Result;
