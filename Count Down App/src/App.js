import React, { useRef, useState } from 'react';

const padTime = (time) => {
    return time.toString().padStart(2, 0);
};

const App = () => {
    const timer = 25 * 60;
    const [title, setTitle] = useState("Let the countdown begin!");
    const [timeLeft, setTimeLeft] = useState(timer);
    const [isRunning, setIsRunning] = useState(false);

    const minutes = padTime(Math.floor(timeLeft / 60));
    const seconds = padTime(timeLeft - minutes * 60);
    let intervalRef = useRef(null);

    const startTimer = () => {
        if(intervalRef.current !== null) return;
        
        setTitle("You're doing great!");
        setIsRunning(true);

        intervalRef.current = setInterval(() => {
            setTimeLeft(timeLeft => {
                return timeLeft >= 1 ? timeLeft - 1 : resetTimer(timer);
            });
        }, 1000);
    };

    const stopTimer = () => {
        if(intervalRef.current === null) return;

        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTitle("Keep it up!");
        setIsRunning(false);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTitle("Ready to go another round?");
        setTimeLeft(timer);
        setIsRunning(false);
    };

    return (
        <div className="app">
            <h2>{title}</h2>

            <div className="timer">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>

            <div className="buttons">
                {!isRunning && <button onClick={startTimer}>Start</button>}
                {isRunning && <button onClick={stopTimer}>Stop</button>}
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default App;
