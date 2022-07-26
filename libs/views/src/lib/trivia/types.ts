export interface ITriviaItem {
    triviaId: number;
    question: string;
    options: Array<string>;
    correctAnswer: string;
}

export interface ITriviaList {
    triviaData: Array<ITriviaItem>;
}
