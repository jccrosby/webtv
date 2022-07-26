import styled from '@emotion/styled';
import { InningBreakVideo as InningBreakVideoComponent } from '@webtv/views';

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    max-width: 420px;
    margin: 0 auto;
`;

const StyledContent = styled.div`
    padding: 20px;
`;

export default function InningBreakVideo() {
    return (
        <StyledWrapper>
            <StyledContent>
                <h1>Inning Break</h1>
                <InningBreakVideoComponent src="/assets/subway-race.mp4" />
            </StyledContent>
        </StyledWrapper>
    );
}
