const CurrentTimeForm = ({ sendEvent }) => {
    return (
        <form>
            <h1>Current Time</h1>
            <label htmlFor="eventTitle">Event Title:</label>
            <br />
            <input name="eventTitle" type="text"></input>
            <br />
            <label htmlFor="eventData">Event Data:</label>
            <br />
            <input name="eventData" type="text"></input>
            <br />
            <button
                onClick={(event) => {
                    event.preventDefault();
                    sendEvent('commercialBreak', { value: 'start' });
                }}>
                SEND
            </button>
        </form>
    );
};

export default CurrentTimeForm;
