import { FirebaseConfig } from '@webtv/firebase';

export const firebaseConfig: FirebaseConfig = {
    apiKey: 'AIzaSyA8BTdOnkDerFvgHt-2bRQrODChvqetSL4',
    authDomain: 'mlb-commons-sbx-950d.firebaseapp.com',
    databaseURL: 'https://mlb-commons-sbx-950d-default-rtdb.firebaseio.com',
    projectId: 'mlb-commons-sbx-950d',
    storageBucket: 'mlb-commons-sbx-950d.appspot.com',
    messagingSenderId: '987042097957',
    appId: '1:987042097957:web:86cd5848cb407e1f0208cc',
};

export const defaultOktaId = '0oap7wa857jcvPlZ5355';

export function config(): string {
    return 'config';
}
