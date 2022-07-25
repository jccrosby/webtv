# firebase

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test firebase` to execute the unit tests via [Jest](https://jestjs.io).


## API

#### `useBookmarks(db, userId)` -> Bookmarks API

exposes API for game, vod, and svod "bookmarks"

- db: firebase database
- userId: the user's oktaId

##### Example Usage

```tsx
const firebaseConfig = {...}; // firebase config
const userId = 'abcdefgh'; // User's oktaId
const db = useFirestore(firebaseConfig);
const { sendEvent, deleteEvent } = useEventsApi(db, userId);
const {
    getBookmarks,
    getGameBookmark,
    getVodBookmark
    getSvodBookmark
    updateBookmarks,
    addGameBookmark,
    deleteGameBookmark,
    deleteSvodBookmark,
    deleteVodBookmark,
} = useBookmarks(db, userId);
```

##### Object shapes

```typescript
export interface GameContentBookmark {
    [key: string]: number;
}

export interface GameBookmarks {
    [key: string]: GameContentBookmark;
}

export interface VodBookmarks {
    [key: string]: number;
}

export interface SvodBookmarks {
    [key: string]: number;
}

export interface Bookmarks extends DocumentData {
    games: GameBookmarks;
    vod: VodBookmarks;
    svod: SvodBookmarks;
}
```

**Sample Data**

```json
{
    games: {
        '662996': {
            'd15618cb-fcb9-4ece-8339-5370d66296ac': 1234,
        },
        '662998': {
            'XXXX18cb-fcb9-4ece-8339-5370d66296ac': 5678,
        },
    },
    vod: { 'aaron-nola-in-play-no-out-to-albert-pujols': 7 },
    svod: { 'all-rise-for-baseball-zen': 73 },
}
```

**Data Descriptions**

```
{
    games: {
        {gamePk}: {
            {contentId}: {currentTimeInSeconds},
        },
        {gamePk}: {
            {contentId}: {currentTimeInSeconds},
        },
    },
    vod: {
        {svod-slug}': {currentTimeInSeconds},
        {svod-slug}': {currentTimeInSeconds}
    },
    svod: {
        {vod-slug}: {currentTimeInSeconds},
        {svod-slug}': {currentTimeInSeconds}
    },
}
```

##### getBookmarks()

Returns the collection of bookmarks.

```json
{
    games: {
        '662996': {
            'd15618cb-fcb9-4ece-8339-5370d66296ac': 1234,
        },
        '662998': {
            'XXXX18cb-fcb9-4ece-8339-5370d66296ac': 5678,
        },
    },
    vod: { 'aaron-nola-in-play-no-out-to-albert-pujols': 7 },
    svod: { 'all-rise-for-baseball-zen': 73 },
}
```

##### updateBookmarks(bookmarks: Bookmarks)

Updated the bookmarks object.

```tsx
const bookmarks = {
    games: {
        '662996': {
            'd15618cb-fcb9-4ece-8339-5370d66296ac': 1234,
        },
        '662998': {
            'XXXX18cb-fcb9-4ece-8339-5370d66296ac': 5678,
        },
    },
    vod: { 'aaron-nola-in-play-no-out-to-albert-pujols': 7 },
    svod: { 'all-rise-for-baseball-zen': 73 },
}
await updateBookmarks(bookmarks);
```

##### getGameBookmark(gamePk: string)

Retrieve a bookmark for a specific gamePk

```tsx
const gameBookmark = await getGameBookmark('662998');
/* gameBookmark = {
    'd15618cb-fcb9-4ece-8339-5370d66296ac': 1234,
} */
```

##### addGameBookmark(gamePk: string, contentBookmark: GameContentBookmark)

Adds a bookmark for the specified gamePk

```tsx
addGameBookmark('662996', {
    'd15618cb-fcb9-4ece-8339-5370d66296ac': 1234,
});
```

##### deleteGameBookmark(gamePk: string)

Removed the bookmark for the specified gamePk

```tsx
deleteGameBookmark('662998');
```

##### getVodBookmark(slug: string)

Retrieves a vod bookmark for the user

```tsx
const vodBookmark = getVodBookmark('aaron-nola-in-play-no-out-to-albert-pujols');
/* vodBookmark = {
    'aaron-nola-in-play-no-out-to-albert-pujols': 7
} */
```

##### deleteVodBookmark(slug: string)

Deletes the bookmark for the user

```tsx
deleteVodBookmark('aaron-nola-in-play-no-out-to-albert-pujols');
```

##### getSvodBookmark(slug: string)


Retrieves an svod bookmark for the user

```tsx
const svodBookmark = getVodBookmark('all-rise-for-baseball-zen');
/* svodBookmark = {
    'all-rise-for-baseball-zen': 7
} */
```

##### deleteSvodBookmark(slug: string)

Deletes the bookmark for the user

```tsx
deleteVodBookmark('all-rise-for-baseball-zen');
```

#### `useEvents(db, userId)` -> Events API

Exposes an event API

- db: firebase database
- userId: the user's oktaId


##### sendEvent(eventType: string, eventData: any)

Send an arbitrary event

```tsx
sendEvent('commercialBreak', { value: 'start' });
sendEvent('commercialBreak', { value: 'stop' });
```

##### deleteEvent(eventType: string)

Delete a specific event type

```tsx
deleteEvent('commercialBreak');
```

##### onSnapshotUpdate(db, userId)

Listen for and handle event updates

```tsx
const firebaseConfig = {...}; // firebase config
const userId = 'abcdefgh'; // User's oktaId
const db = useFirestore(firebaseConfig);

useEffect(() => {
    const subscriptions: Unsubscribe[] = [];
    // Handle subscription updates
    subscriptions.push(
        onSnapshotUpdate(db, `${userId}/events/commercialBreak`, (doc: any) => {
            const data = doc.data();
            console.log(`data`, data);
        }),
    );
    // Clean up subscriptions
    return () => subscriptions.forEach((unsubscribe) => unsubscribe());
}, []);

```
