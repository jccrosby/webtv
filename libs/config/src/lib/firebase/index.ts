import { FirebaseConfig } from '@webtv/firebase';

const mlbNpdConfig = {
    apiKey: 'AIzaSyA8BTdOnkDerFvgHt-2bRQrODChvqetSL4',
    authDomain: 'mlb-commons-sbx-950d.firebaseapp.com',
    databaseURL: 'https://mlb-commons-sbx-950d-default-rtdb.firebaseio.com',
    projectId: 'mlb-commons-sbx-950d',
    storageBucket: 'mlb-commons-sbx-950d.appspot.com',
    messagingSenderId: '987042097957',
    appId: '1:987042097957:web:86cd5848cb407e1f0208cc',
};

const crosbyPublicConfig = {
    apiKey: 'AIzaSyCTSuebVy69ZjC4vXhzxmVIGgU_DQBPXec',
    authDomain: 'mlb-webtv-event-bus.firebaseapp.com',
    projectId: 'mlb-webtv-event-bus',
    storageBucket: 'mlb-webtv-event-bus.appspot.com',
    messagingSenderId: '117655883629',
    appId: '1:117655883629:web:17c363ffa4c5c0bcb9d464',
    measurementId: 'G-48SWJCRYZH',
};

export const firebaseConfig: FirebaseConfig = mlbNpdConfig;

export const defaultOktaId = '00u72ovoxWrd5FMSp356';

export function config(): string {
    return 'config';
}
