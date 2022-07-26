import styled from '@emotion/styled';

const StyledWrapper = styled.div`
    padding: 20px;
    background-color: #696969;
`;

const StyledUl = styled.ul`
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
`;

const StyledLi = styled.li`
    background-color: #fff;
    border: 1px solid #888;
    border-radius: 5px;
    display: inline-block;
    padding: 0 25px;
    margin: 15px;
`;

const StyledAnchor = styled.a`
    text-decoration: none;
    display: block;
    transition: 0.3s background-color;
`;

export default function Navigation() {
    return (
        <StyledWrapper>
            <StyledUl>
                <StyledLi>
                    <StyledAnchor href="/">Home</StyledAnchor>
                </StyledLi>
                <StyledLi>
                    <StyledAnchor href="/playback-events">Playback Events</StyledAnchor>
                </StyledLi>
                <StyledLi>
                    <StyledAnchor href="/remote-control">Remote Control Events</StyledAnchor>
                </StyledLi>
            </StyledUl>
        </StyledWrapper>
    );
}
