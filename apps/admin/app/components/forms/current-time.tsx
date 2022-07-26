import styled from '@emotion/styled';
import { GameContentBookmark } from '@webtv/firebase';
import { FC, useState } from 'react';
import { StyledForm, StyledLabel } from './styles';

export interface CurrentTimeFormProps {
    addGameBookmark: (gamePk: string, contentBookmark: GameContentBookmark) => void;
}

const CurrentTimeForm: FC<CurrentTimeFormProps> = ({ addGameBookmark }) => {
    const [gamePk, setGamePk] = useState('662996');
    const [contentId, setContentId] = useState('d15618cb-fcb9-4ece-8339-5370d66296ac');
    const [currentTime, setCurrentTime] = useState(0);
    return (
        <StyledForm>
            <h1>Current Time</h1>
            <StyledLabel htmlFor="gamePk">
                gamePk:{' '}
                <input
                    name="gamePk"
                    type="text"
                    defaultValue={gamePk}
                    onChange={(event) => setGamePk(event?.target.value)}></input>
            </StyledLabel>
            <StyledLabel htmlFor="gamePk">
                contentId:{' '}
                <input
                    name="contentId"
                    type="text"
                    defaultValue={contentId}
                    onChange={(event) => setContentId(event?.target.value)}></input>
            </StyledLabel>
            <StyledLabel htmlFor="currentTime">
                Current Time:{' '}
                <input
                    name="currentTime"
                    type="number"
                    defaultValue={currentTime}
                    onChange={(event) => setCurrentTime(parseFloat(event?.target.value))}></input>
            </StyledLabel>
            <button
                onClick={(event) => {
                    event.preventDefault();
                    const contentBookmark: GameContentBookmark = {
                        [contentId]: currentTime,
                    };
                    addGameBookmark(gamePk, contentBookmark);
                }}>
                SEND
            </button>
        </StyledForm>
    );
};

export default CurrentTimeForm;
