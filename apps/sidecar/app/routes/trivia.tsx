import { Trivia } from '@webtv/views';
import triviaData from '@webtv/config/trivia.json';

console.log(triviaData[0]);

export default function TriviaRoute() {
    return (
        <>
            <Trivia triviaData={triviaData}></Trivia>
        </>
    );
}
