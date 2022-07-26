import { useBookmarks } from './use-bookmarks';
import { FirebaseConfig, useFirestore } from './use-firebase';

const firebaseConfig: FirebaseConfig = {
    apiKey: 'AIzaSyA8BTdOnkDerFvgHt-2bRQrODChvqetSL4',
    authDomain: 'mlb-commons-sbx-950d.firebaseapp.com',
    databaseURL: 'https://mlb-commons-sbx-950d-default-rtdb.firebaseio.com',
    projectId: 'mlb-commons-sbx-950d',
    storageBucket: 'mlb-commons-sbx-950d.appspot.com',
    messagingSenderId: '987042097957',
    appId: '1:987042097957:web:86cd5848cb407e1f0208cc',
};
const userId = 'TEST_OKTA_ID';

describe('use-bookmarks', () => {
    it('should have api methods', () => {
        const db = useFirestore(firebaseConfig);
        const {
            addGameBookmark,
            deleteGameBookmark,
            deleteSvodBookmark,
            deleteVodBookmark,
            getBookmarks,
            getGameBookmark,
            getSvodBookmark,
            getVodBookmark,
            updateBookmarks,
            useBookmarkCollection,
        } = useBookmarks(db, userId);
        expect(addGameBookmark).not.toBe(null);
        expect(addGameBookmark).toBeInstanceOf(Function);
        expect(deleteGameBookmark).not.toBe(null);
        expect(deleteGameBookmark).toBeInstanceOf(Function);
        expect(deleteSvodBookmark).not.toBe(null);
        expect(deleteSvodBookmark).toBeInstanceOf(Function);
        expect(deleteVodBookmark).not.toBe(null);
        expect(deleteVodBookmark).toBeInstanceOf(Function);
        expect(getBookmarks).not.toBe(null);
        expect(getBookmarks).toBeInstanceOf(Function);
        expect(getGameBookmark).not.toBe(null);
        expect(getGameBookmark).toBeInstanceOf(Function);
        expect(getSvodBookmark).not.toBe(null);
        expect(getSvodBookmark).toBeInstanceOf(Function);
        expect(getVodBookmark).not.toBe(null);
        expect(getVodBookmark).toBeInstanceOf(Function);
        expect(updateBookmarks).not.toBe(null);
        expect(updateBookmarks).toBeInstanceOf(Function);
        expect(useBookmarkCollection).not.toBe(null);
        expect(useBookmarkCollection).toBeInstanceOf(Function);
    });
});
