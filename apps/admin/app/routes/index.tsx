import styled from '@emotion/styled';

const StyledWrapper = styled.div`
    border: 1px solid #333333;
`;

export default function Index() {
    return (
        <StyledWrapper>
            Admin app
            <h2>To do</h2>
            <ul>
                <li>
                    ✅ <a href="/player-events">Player Events</a>
                </li>
                <li>
                    ✅ <a href="/remote-control">Remote Control Events</a>
                </li>
            </ul>
        </StyledWrapper>
    );
}
