import React from 'react';
import styles from './styles';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import Logo from '../../assets/logo.png';
import Placeholder from '../../assets/placeholder.png';
import Notification from '../../assets/notification.png';

function Permission() {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.wrapper}>
          <View>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.mainTitle}>보발꾼 접근권한 안내</Text>
            <Text style={styles.subTitle}>
              보발꾼 : 급한 공문을 전하는 일을 맡아 하던 사람
            </Text>
          </View>
          <View style={styles.permissionBox}>
            <Text style={styles.permissionTitle}>필수 접근 권한</Text>
            <View style={styles.permission}>
              <View style={styles.iconBox}>
                <Image source={Placeholder} style={styles.placeholder} />
              </View>
              <View>
                <Text style={styles.innerTitle}>위치</Text>
                <Text style={styles.innerSubTitle}>
                  현재 위치한 지하철 역 안내
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.permissionBox}>
            <Text style={styles.permissionTitle}>선택적 접근 권한</Text>
            <View style={styles.permission}>
              <View style={styles.iconBox}>
                <Image source={Notification} style={styles.notification} />
              </View>
              <View>
                <Text style={styles.innerTitle}>알림</Text>
                <Text style={styles.innerSubTitle}>지하철 도착 안내</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Permission;
