import React from 'react';
import styles from './styles';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import Logo from '../../assets/logo.png';
import Placeholder from '../../assets/placeholder.png';
import Notification from '../../assets/notification.png';
import Button from '../../components/Button';

interface IPermissionBox {
  title: string;
  key: string;
  child: IPermission[];
}

interface IPermission {
  img: any;
  style: any;
  title: string;
  desc: string;
}

const permissionList: IPermissionBox[] = [
  {
    title: '필수 접근 권한',
    key: 'necessary',
    child: [
      {
        img: Placeholder,
        style: 'placeholder',
        title: '위치',
        desc: '현재 위치한 지하철 역 안내',
      },
    ],
  },
  {
    title: '선택적 접근 권한',
    key: 'choice',
    child: [
      {
        img: Notification,
        style: 'notification',
        title: '알림',
        desc: '지하철 도착 안내',
      },
    ],
  },
];

function Permission() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.mainTitle}>보발꾼 접근권한 안내</Text>
          <Text style={styles.subTitle}>
            보발꾼 : 급한 공문을 전하는 일을 맡아 하던 사람
          </Text>
        </View>
        {permissionList.map((permission) => (
          <View style={styles.permissionBox} key={permission.key}>
            <Text style={styles.permissionTitle}>{permission.title}</Text>
            {permission.child.map((child) => (
              <View style={styles.permission} key={child.style}>
                <View style={styles.iconBox}>
                  <Image
                    source={child.img}
                    style={(styles as any)[child.style]}
                  />
                </View>
                <View>
                  <Text style={styles.innerTitle}>{child.title}</Text>
                  <Text style={styles.innerSubTitle}>{child.desc}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>
      <Button title="확인" onPress={() => {}} />
    </View>
  );
}

export default Permission;
