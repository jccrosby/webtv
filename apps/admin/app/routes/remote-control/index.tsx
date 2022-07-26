import styled from '@emotion/styled';

const StyledWrapper = styled.div`
    border: 1px solid #333333;
`;

export default function Index() {
    return (
        <StyledWrapper>
            Remote Control Events
            <h2>To do</h2>
            <ul>
                <li>❌ Event: Player remote: pause</li>
                <li>❌ Event: Player remote: play</li>
            </ul>
        </StyledWrapper>
    );
}
