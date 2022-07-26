import styled from '@emotion/styled';
import { useFirestore, useEventsApi, useBookmarks } from '@webtv/firebase';
import { firebaseConfig, defaultOktaId } from '@webtv/config';
import CurrentTimeForm from '~/components/forms/current-time';
import CommercialBreakForm from '~/components/forms/commercial-break';
import InningBreakForm from '~/components/forms/inning-break';

const StyledWrapper = styled.div`
    border: 1px solid #333333;
`;

export default function Index() {
    const db = useFirestore(firebaseConfig);
    const { addGameBookmark } = useBookmarks(db, defaultOktaId);
    const { sendEvent } = useEventsApi(db, defaultOktaId);
    return (
        <StyledWrapper>
            <ul>
                <li>✅ Event: Current time</li>
                <li>✅ Event: Commercial break: start &amp; stop</li>
                <li>✅ Event: Inning break: start &amp; stop</li>
            </ul>
            <CurrentTimeForm addGameBookmark={addGameBookmark} />
            <CommercialBreakForm sendEvent={sendEvent} />
            <InningBreakForm sendEvent={sendEvent} />
        </StyledWrapper>
    );
}
