import { Platform, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';
import OneSignal from 'react-native-onesignal';
import { tagUserInfoCreate } from './src/notifications/notificationsTags';
import { useEffect } from 'react';


const oneSignalAppId = Platform.OS === 'ios' ? 'chave da Apple' : '3b6baef0-8267-4e15-a210-5c8c1db89c71'
OneSignal.setAppId(oneSignalAppId);

OneSignal.setEmail('michaelfernando@live.com')

OneSignal.promptForPushNotificationsWithUserResponse();


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  
  tagUserInfoCreate();
  
  useEffect(() => {
    const unsubscribe = OneSignal.setNotificationOpenedHandler((response) => {

      const {actionId} = response.action as any;

      switch(actionId){
        case '1':
          return console.log('Ver todas');
        case '2':
          return console.log('Ver pedido');
        default: 
        return console.log('Não foi nada clicado')
        
      }
      
      //console.log(response)
    })
  
    return () => unsubscribe;
  }, [])
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>

  
    </NativeBaseProvider>
  );
}