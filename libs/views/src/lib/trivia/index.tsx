import React, { FC } from 'react';
import { ITriviaProps } from './types';
import {
    StyledTriviaContainer,
    StyledTriviaAnswerMulti,
    StyledTriviaAnswerTF,
    StyledTriviaQ,
} from './style';

export const Trivia: FC<ITriviaProps> = ({}: ITriviaProps) => {
    return (
        <StyledTriviaContainer>
            <h1>Trivia Time!</h1>
        </StyledTriviaContainer>
    );
};

export default Trivia;
