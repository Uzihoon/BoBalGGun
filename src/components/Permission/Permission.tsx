import React, {useState, useEffect} from 'react';
import styles from './styles';
import {RESULTS, check, PERMISSIONS} from 'react-native-permissions';

// Hooks
import {useStatusGet} from 'src/hooks/lib';

// Components
import {Text, View, Image, AppState, SafeAreaView} from 'react-native';
import Button from 'src/components/Button';
import SettingModal from '../SettingModal';

// Assets
import Logo from 'src/assets/logo.png';
import Placeholder from 'src/assets/placeholder.png';
import Notification from 'src/assets/notification.png';
import {pushLoading} from 'src/navigation';

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
  const [visible, setVisible] = useState(false);
  const permission = useStatusGet('permission');

  const buttonList = [
    {
      title: '확인',
      onPress: async () => {
        const result = await getPermission();
        // if (result !== RESULTS.GRANTED) {
        //   setVisible(true);
        //   return;
        // }
        pushLoading();
      },
    },
  ];

  const getPermission = async () => {
    const result = await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
    return result;
  };

  const handlePermisison = async () => {
    const result = await getPermission();
    setVisible(result === RESULTS.BLOCKED);
  };

  useEffect(() => {
    setVisible(permission === RESULTS.BLOCKED);
  }, [permission]);

  useEffect(() => {
    AppState.addEventListener('change', handlePermisison);

    return () => {
      AppState.removeEventListener('change', handlePermisison);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
      <Button buttonList={buttonList} />
      <SettingModal visible={visible} />
    </SafeAreaView>
  );
}

export default Permission;
