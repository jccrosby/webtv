import styled from '@emotion/styled';
import { useFirestore, useEventsApi } from '@webtv/firebase';
import { firebaseConfig, defaultOktaId } from '@webtv/config';
import CurrentTimeForm from '~/components/forms/current-time';

const StyledWrapper = styled.div`
    border: 1px solid #333333;
`;

export default function Index() {
    console.log(defaultOktaId, firebaseConfig);
    const db = useFirestore(firebaseConfig);
    const { sendEvent } = useEventsApi(db, defaultOktaId);
    return (
        <StyledWrapper>
            Remote Control Events
            <h2>To do</h2>
            <ul>
                <li>❌ Event: Current time</li>
                <li>❌ Event: Commercial break:start</li>
                <li>❌ Event: Commercial break:stop</li>
                <li>❌ Event: Inning break:start</li>
                <li>❌ Event: Inning break:stop</li>
            </ul>
            <CurrentTimeForm sendEvent={sendEvent} />
        </StyledWrapper>
    );
}
