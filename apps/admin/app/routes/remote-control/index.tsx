import styled from '@emotion/styled';
import { defaultOktaId, firebaseConfig } from '@webtv/config';
import { useBookmarks, useEventsApi, useFirestore } from '@webtv/firebase';
import { ChangeEvent, useEffect, useState } from 'react';
import { StyledLabel } from '~/components/forms/styles';
import debounce from 'lodash.debounce';

const StyledWrapper = styled.div`
    border: 1px solid #333333;
`;

const StyledControlsContainer = styled.div`
    margin: 15px;
    padding: 15px;
`;

export default function Index() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const db = useFirestore(firebaseConfig);
    const { sendEvent } = useEventsApi(db, defaultOktaId);

    const handleClickPlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    const handleClickMute = () => {
        setIsMuted(!isMuted);
    };
    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setVolume(parseFloat(event?.target.value));
    };
    const debouncedVolumeChange = debounce(handleVolumeChange, 500);

    useEffect(() => {
        // We should get the state from the player, this is just for testing
        sendEvent('playerRemoteControl', { pause: !isPlaying, volume, mute: isMuted });
    }, []);

    useEffect(() => {
        sendEvent('playerRemoteControl', { pause: !isPlaying, volume, mute: isMuted });
    }, [isMuted, volume, isPlaying]);

    return (
        <StyledWrapper>
            Remote Control Events
            <h2>To do</h2>
            <ul>
                <li>✅ Event: Player remote: pause/pause</li>
                <li>✅ Event: Player remote: mute/unmute</li>
                <li>✅ Event: Player remote: set volume</li>
            </ul>
            <StyledControlsContainer>
                <button name="playPause" onClick={handleClickPlayPause}>
                    {isPlaying ? 'PAUSE' : 'PLAY'}
                </button>
                <StyledLabel htmlFor="volume">
                    Volume:
                    <input
                        name="volume"
                        type="range"
                        onChange={debouncedVolumeChange}
                        defaultValue={volume}
                        min={0}
                        max={1}
                        step={0.1}></input>
                </StyledLabel>
                <button name="mute" onClick={handleClickMute}>
                    {isMuted ? 'UNMUTE' : 'MUTE'}
                </button>
            </StyledControlsContainer>
        </StyledWrapper>
    );
}
