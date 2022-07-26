import { Firestore } from 'firebase/firestore';
import { useEventsApi } from './use-events';
import { FirebaseConfig, useFirestore } from './use-firebase';

const firebaseConfig: FirebaseConfig = {
    apiKey: 'test-api-key',
    authDomain: 'mlb-commons-sbx-950d.firebaseapp.com',
    databaseURL: 'https://mlb-commons-sbx-950d-default-rtdb.firebaseio.com',
    projectId: 'mlb-commons-sbx-950d',
    storageBucket: 'mlb-commons-sbx-950d.appspot.com',
    messagingSenderId: 'test-sender-id',
    appId: 'test-app-id',
};

describe('use-firebase', () => {
    it('should have api methods', () => {
        const db = useFirestore(firebaseConfig);
        expect(db).toBeInstanceOf(Firestore);
    });
});
