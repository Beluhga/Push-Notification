import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate(){
    OneSignal.sendTags({
        'user_name': 'Michael',
        'user_email': 'michaelfernando@hotmail.com'
    });

}

export function tagCartUpdate(itemsCount: string){ 
    OneSignal.sendTag('card_items_count', itemsCount);
}