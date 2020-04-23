import React, {useState, useEffect} from 'react';
import {
  TouchableHighlight,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import Arrow from 'src/assets/arrow.png';
import styles from './styles';
import {pushSearch} from 'src/navigation';

import bad from 'src/assets/bad.png';
import good from 'src/assets/good.png';
import hell from 'src/assets/hell.png';
import sad from 'src/assets/sad.png';
import empty from 'src/assets/empty.png';

import {useAnalysisGet, useStatusGet} from 'src/hooks/lib';
import Loading from '../Loading';

type IconKey = 'bad' | 'good' | 'hell' | 'sad' | 'empty';

const icon = {bad, good, hell, sad, empty};

const analysisType = {
  sad: {
    desc: '확률이 작아요. 서있는것 만으로도 운동이 된답니다.',
  },
  good: {
    desc: '쾌적해요! 앉을 준비 되셨나요?',
  },
  hell: {
    desc: '사람이 많아요. 마음의 준비를 하세요!',
  },
  bad: {
    desc: '아마도... 앉아서 갈 수 있어요',
  },
  empty: {
    desc: '분석에 필요한 데이터가 부족해요',
  },
};

function Analysis() {
  const [type, setType] = useState('up');
  const [source, setSource] = useState(empty);
  const [next, setNext] = useState('');
  const [persentage, setPersentage] = useState('');
  const [comment, setComment] = useState(analysisType.empty.desc);
  const analysis = useAnalysisGet('analysis');
  const target = useStatusGet('target');

  const handlePress = (event: GestureResponderEvent, type: string) => {
    event.preventDefault();
    setType(type);
  };

  useEffect(() => {
    if (!analysis.get('analysised') || !target) return;
    const iconKey = analysis.getIn([type, 'level']) as IconKey;
    const _comment = analysisType[iconKey].desc;
    const _source = icon[iconKey];
    const _next = type === 'up' ? target.prev.stationNm : target.next.stationNm;
    const _percentage =
      Math.max(100 - analysis.getIn([type, 'confusion']), 1) + '%';
    setSource(_source);
    setNext(_next);
    setPersentage(_percentage);
    setComment(_comment);
  }, [analysis, type]);

  if (!target) return <Loading />;
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.wrapper}>
      <View style={styles.confirmBox}>
        <View style={[styles.line, {backgroundColor: target.color}]}>
          <TouchableHighlight
            onPress={(e) => handlePress(e, 'up')}
            style={[
              type === 'up' ? styles.targetStation : styles.betweenStation,
              {marginRight: 55},
            ]}
            underlayColor={target.color}>
            <>
              <Image source={Arrow} style={styles.icon} />
              <Text style={styles.betweenText}>{target.prev.stationNm}</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={(e) => handlePress(e, 'down')}
            style={[
              type === 'down' ? styles.targetStation : styles.betweenStation,
              {marginLeft: 55},
            ]}
            underlayColor={target.color}>
            <>
              <Image
                source={Arrow}
                style={{...styles.icon, transform: [{rotateY: '180deg'}]}}
              />
              <Text style={styles.betweenText}>{target.next.stationNm}</Text>
            </>
          </TouchableHighlight>
        </View>
        <View style={styles.infoBox}>
          <View style={[styles.info, {borderColor: target.color}]}>
            <View style={styles.infoText}>
              <Text style={[styles.lineInfo, {color: target.color}]}>
                {target.line}
              </Text>
              <Text style={[styles.stationInfo, {color: target.color}]}>
                {target.current.stationNm}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.comingBox}>
        <Text style={styles.coming}>
          열차가 <Text style={{color: target.color}}>15:00</Text> 분 후 도착할
          예정 입니다.
        </Text>
      </View>
      <View style={styles.analysis}>
        <Text
          style={
            styles.title
          }>{`${target.current.stationNm}역에서 ${next} 방면으로 앉아갈 확률`}</Text>
        <View style={styles.faceBox}>
          <Image style={styles.face} source={source} />
        </View>
        <Text style={styles.percent}>{persentage}</Text>
        <Text style={styles.comment}>{comment}</Text>
      </View>
      {/* <View style={styles.analysis}>
        <View style={styles.container}>
          <View style={styles.statisticsBox}>
            <Text style={styles.label}>하차를 많이 하는 칸</Text>
            <Text style={styles.value}>6-2</Text>
          </View>
          <View style={styles.statisticsBox}>
            <Text style={styles.label}>승객이 가장 적은 칸</Text>
            <Text style={styles.value}>5호칸</Text>
          </View>
          <View style={styles.statisticsBox}>
            <Text style={styles.label}>승객이 가장 적은 시간</Text>
            <Text style={styles.value}>09:30</Text>
          </View>
          <View style={styles.statisticsBox}>
            <Text style={styles.label}>평균 혼잡도</Text>
            <Text style={styles.value}>혼잡</Text>
          </View>
        </View>
      </View> */}
      <Text style={styles.desc}>
        현재 시각에 따른 기준입니다. 날씨나 특정 이벤트 등에 따라 다를 수
        있습니다.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => pushSearch()}>
        <Text style={styles.buttonText}>다른 역 알아보기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Analysis;
