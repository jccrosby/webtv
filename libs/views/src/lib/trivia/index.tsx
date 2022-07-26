import React, { FC } from 'react';
import { ITriviaList } from './types';
import {
    StyledTriviaContainer,
    StyledTriviaAnswerMulti,
    StyledTriviaAnswerTF,
    StyledTriviaQ,
} from './style';

export const Trivia: FC<ITriviaList> = ({ triviaData = [] }: ITriviaList) => {
    console.log(triviaData);
    return (
        <StyledTriviaContainer>
            <h1>Trivia Time!</h1>
        </StyledTriviaContainer>
    );
};

export default Trivia;
