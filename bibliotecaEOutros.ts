/*
https://onesignal.com/

passo a passo do OneSignal para android

https://documentation.onesignal.com/docs/generate-firebase-credentials

3b6baef0-8267-4e15-a210-5c8c1db89c71

npm install react-native-onesignal@4.5.1

https://documentation.onesignal.com/docs/react-native-expo-sdk-setup

observa q o Plugins no App.json esta diferente

no App.json colocar
"ios": {
      "supportsTablet": true,
      "bundleIdentifier": "alvitre.igniteshoes" => nome da empresa e do aplicativo

npx expo prebuild

para usar o android ----------------------------------------

npx expo run:android

Utilizando o Expo Dev Client-----------------------------------

para usar codigo nativo no Expo

https://docs.expo.dev/develop/development-builds/create-a-build/#install-expo-dev-client

npx expo install expo-dev-client

ou 

npm start

voce tambem pode abrir o aplicativo direto no celular, porem precisa fazer o 

npx expo start --dev-client

ou 

npm start

pra fazer ele funcionar, depois voce

npx expo install expo-build-properties

Prioridades e canais de notificação--------------------------

https://documentation.onesignal.com/docs/android-notification-categories#notification-priority

https://developer.android.com/reference/android/app/NotificationChannel#setBypassDnd(boolean)

Adicionando e listando schemes------------------------------------------------

https://reactnavigation.org/docs/deep-linking/

colocar no app.json

{
  "expo": {
    "scheme": "nome da aplicação"
  }
}

npx expo prebuild

npx uri-scheme list

npx expo run:android

Executando Deep Linking------------------------

npx uri-scheme list

› Android: Schemes for config: ./android\app\src\main\AndroidManifest.xml
› alvitre.igniteshoes://
› igniteshoesapp://
› exp+igniteshoesapp://

npx uri-scheme open igniteshoesapp://ip da maquina : onde esta rodando --android

fica assim no ambiente de desenvolvimento

npx uri-scheme open igniteshoesapp://192.168.0.8:8081 --android

OBS: Tem que esta com "npm start" ou "npx expo start" ativado

PAssando parametro no Deep Linking---------------------------------

https://docs.expo.dev/versions/latest/sdk/linking/

npx expo install expo-linking

igniteshoesapp://details?productId=7

npx uri-schema open igniteshoesapp://details?productId=7

o certo sera

npx uri-scheme open igniteshoesapp://details/7 --android


*/