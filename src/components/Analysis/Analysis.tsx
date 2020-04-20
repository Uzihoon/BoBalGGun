import React from 'react';
import {TouchableOpacity, ScrollView, View, Text, Image} from 'react-native';
import Arrow from 'src/assets/arrow.png';
import styles from './styles';
import Good from 'src/assets/good.png';
import {pushSearch} from 'src/navigation';

function Analysis() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.wrapper}>
      <View style={styles.confirmBox}>
        <View style={styles.line}>
          <View style={{...styles.betweenStation, marginRight: 55}}>
            <Image source={Arrow} style={styles.icon} />
            <Text style={styles.betweenText}>서울대입구</Text>
          </View>
          <View style={{...styles.betweenStation, marginLeft: 55}}>
            <Image
              source={Arrow}
              style={{...styles.icon, transform: [{rotateY: '180deg'}]}}
            />
            <Text style={styles.betweenText}>사당</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.info}>
            <View style={styles.infoText}>
              <Text style={styles.lineInfo}>2호선</Text>
              <Text style={styles.stationInfo}>낙성대</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.comingBox}>
        <Text style={styles.coming}>
          열차가 <Text style={styles.point}>15:00</Text> 분 후 도착할 예정
          입니다.
        </Text>
      </View>
      <View style={styles.analysis}>
        <Text style={styles.title}>낙성대역에서 사당 방면으로 앉아갈 확률</Text>
        <View style={styles.faceBox}>
          <Image style={styles.face} source={Good} />
        </View>
        <Text style={styles.percent}>52%</Text>
        <Text style={styles.comment}>아마도.. 앉아서 갈수 있을꺼에요</Text>
      </View>
      <View style={styles.analysis}>
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
      </View>
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
