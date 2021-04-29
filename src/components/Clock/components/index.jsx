import React, {useState, useEffect} from 'react';

function formatDate(date) {
    if(!date) return '';

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth()}`.slice(-2);
    const year = `0${date.getFullYear()}`.slice(-2);
    return `${hours}:${minutes}:${seconds} - 
            ${day}/${month}/${year}
    `;
}

function useClock() {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);
            
            setTimeString(newTimeString);
        },1000);
        return () => {
            console.log('Clock cleanup')
            clearInterval(clockInterval)
        }
    }, []);
    return {timeString};
}

function Clock() {
    const {timeString} = useClock();
    return (
        <div>{timeString}</div>
    )
}

function ShowClock() {
    const [showClock, setShowClock] = useState(true);
    return (
        <div>
            {showClock && <Clock/>}
            <button onClick={() => setShowClock(false)}>    
                Hide clock
            </button>
            <button onClick={() => setShowClock(true)}>
                Show clock
            </button>
            
            <div style={{color: 'pink'}}><Clock/></div>
        </div>
        
    )
}

export default ShowClock;