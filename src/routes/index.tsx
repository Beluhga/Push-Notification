import { useTheme } from 'native-base';
import { useEffect, useState } from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { Notification } from '../components/Notification';
import OneSignal, { NotificationReceivedEvent, OSNotification } from 'react-native-onesignal';


const linking = { 
  prefixes: ['alvitre.igniteshoes://', 'igniteshoesapp://', 'exp+igniteshoesapp://'],
  config: {
    screens: {
      details: { // o linking que vai esta o produto
        path: 'details/:productId',
        parse: {
          productId: (productId: string) => productId
        }
      }
    }
  }
}

export function Routes() {
  const [notification, setNotification] = useState<OSNotification>()
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];


  useEffect(() => {
    const unsubscribe =  OneSignal.setNotificationWillShowInForegroundHandler((notificationReceivedEvent: NotificationReceivedEvent) => { // definir notificação será exibida no app de primeiro plano
      const response = notificationReceivedEvent.getNotification();

      setNotification(response)
    }) 

    return () => unsubscribe
  }, [])

  return (
    <NavigationContainer theme={theme} linking={linking}>
      <AppRoutes />

      {
        notification?.title && 
      <Notification data={notification}
      onClose={() =>  setNotification(undefined)} />
      }
    </NavigationContainer>
  );
}