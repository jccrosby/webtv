import styled from '@emotion/styled';
import { FC, useState } from 'react';
import { StyledForm, StyledLabel } from './styles';

export interface CommercialBreakFormProps {
    sendEvent: (eventType: string, eventData: any) => void;
}

const CommercialBreakForm: FC<CommercialBreakFormProps> = ({ sendEvent }) => {
    const [isStart, setIsStart] = useState(true);
    return (
        <StyledForm>
            <h1>Commercial Break</h1>
            <StyledLabel>
                Start:
                <input
                    name="commercialBreakValue"
                    value="start"
                    type="radio"
                    defaultChecked={isStart}
                    onChange={(event) => setIsStart(true)}></input>
            </StyledLabel>
            <StyledLabel>
                Stop:
                <input
                    name="commercialBreakValue"
                    value="stop"
                    type="radio"
                    defaultChecked={!isStart}
                    onChange={(event) => setIsStart(false)}
                />
            </StyledLabel>
            <button
                onClick={(event) => {
                    event.preventDefault();
                    sendEvent('commercialBreak', { value: `${isStart ? 'start' : 'stop'}` });
                }}>
                SEND
            </button>
        </StyledForm>
    );
};

export default CommercialBreakForm;
