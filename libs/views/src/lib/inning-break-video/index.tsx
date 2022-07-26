import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface InningBreakVideoProps {
    src: string;
}

const StyledInningBreakVideo = styled.div``;

const StyledVideo = styled.video`
    width: 100%;
`;

export function InningBreakVideo(props: InningBreakVideoProps) {
    const { src } = props;

    return (
        <StyledInningBreakVideo>
            <StyledVideo controls autoPlay>
                <source src={src} type="video/mp4" />
            </StyledVideo>
        </StyledInningBreakVideo>
    );
}

export default InningBreakVideo;
