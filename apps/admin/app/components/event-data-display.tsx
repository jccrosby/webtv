import styled from '@emotion/styled';
import { useEffect, useState, lazy, Suspense } from 'react';
import { Unsubscribe } from 'firebase/firestore';
import { defaultOktaId, firebaseConfig } from '@webtv/config';
import { onEventSnapshotUpdate, onBookmarkSnapshotUpdate, useFirestore } from '@webtv/firebase';

const StyledWrapper = styled.div`
    margin: 15px;
    padding: 15px;
`;

export const EventDataDisplay = () => {
    const [commercialBreak, setCommercialBreak] = useState({});
    const [inningBreak, setInningBreak] = useState({});
    const [playerControl, setPlayerControl] = useState({});
    const [gameBookmarks, setGameBookmarks] = useState({});
    const [currentGamePk, setCurrentGamePk] = useState('662996');
    const [currentContentId, setCurrentContentId] = useState(
        'd15618cb-fcb9-4ece-8339-5370d66296ac',
    );
    console.log('firebase config', firebaseConfig);
    const db = useFirestore(firebaseConfig);
    useEffect(() => {
        const subscriptions: Unsubscribe[] = [];
        subscriptions.push(
            onEventSnapshotUpdate(db, `${defaultOktaId}/events/commercialBreak`, (doc: any) => {
                const data = doc.data();
                console.log(`commercial break data`, data);
                setCommercialBreak(data);
            }),
        );
        subscriptions.push(
            onEventSnapshotUpdate(db, `${defaultOktaId}/events/inningBreak`, (doc: any) => {
                const data = doc.data();
                console.log(`inning break data`, data);
                setInningBreak(data);
            }),
        );
        subscriptions.push(
            onEventSnapshotUpdate(db, `${defaultOktaId}/events/playerRemoteControl`, (doc: any) => {
                const data = doc.data();
                console.log(`player remote control data`, data);
                setPlayerControl(data);
            }),
        );
        subscriptions.push(
            onBookmarkSnapshotUpdate(db, `${defaultOktaId}/games/${currentGamePk}`, (doc: any) => {
                const data = doc.data();
                console.log(`game bookmark data`, data);
                setGameBookmarks(data);
            }),
        );
        return () => subscriptions.forEach((unsubscribe) => unsubscribe());
    }, []);

    return (
        <StyledWrapper>
            <h2>Event Data Display</h2>
            <h3>Commercial Break Data</h3>
            <pre>{JSON.stringify(commercialBreak, null, 2)}</pre>
            <h3>Inning Break Data</h3>
            <pre>{JSON.stringify(inningBreak, null, 2)}</pre>
            <h3>Player Remote Control Data</h3>
            <pre>{JSON.stringify(playerControl, null, 2)}</pre>
            <h3>Game Bookmark Data</h3>
            <pre>{JSON.stringify(gameBookmarks, null, 2)}</pre>
        </StyledWrapper>
    );
};

export default EventDataDisplay;
