import { FirebaseConfig } from '@webtv/firebase';
import { defaultOktaId, firebaseConfig } from '.';

describe('firebase-config', () => {
    const expectedFirebaseConfig: FirebaseConfig = {
        apiKey: 'AIzaSyA8BTdOnkDerFvgHt-2bRQrODChvqetSL4',
        authDomain: 'mlb-commons-sbx-950d.firebaseapp.com',
        databaseURL: 'https://mlb-commons-sbx-950d-default-rtdb.firebaseio.com',
        projectId: 'mlb-commons-sbx-950d',
        storageBucket: 'mlb-commons-sbx-950d.appspot.com',
        messagingSenderId: '987042097957',
        appId: '1:987042097957:web:86cd5848cb407e1f0208cc',
    };
    const expectedOktaId = '0oap7wa857jcvPlZ5355';

    it('should have a firebase config object', () => {
        expect(firebaseConfig).toEqual(expectedFirebaseConfig);
    });
    it('should have a defautl okta id', () => {
        expect(defaultOktaId).toEqual(expectedOktaId);
    });
});
