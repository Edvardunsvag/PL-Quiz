import React, { useState, useEffect } from 'react';
import Input from './Components/Input';
import Counter from './Components/Counter';
import AnswerList from './Components/AnswerList';
import Start from './Components/Start';

import './App.css';

function App() {
    const levenshtein = require('js-levenshtein');

    const [teamsList, setTeamsList] = useState([
        'Liverpool',
        'West Ham',
        'Leeds',
        'Manchester City',
        'Manchester United',
        'Chelsea',
        'Leicester',
        'Tottenham',
        'Wolverhampton',
        'Arsenal',
        'Sheffield United',
        'Burnley',
        'Southhampton',
        'Everton',
        'Newcastle',
        'Crystal Palace',
        'Brighton',
        'Aston Villa',
        'West Bromwich',
        'Brentford',
    ]);

    const [change, setChange] = useState('');

    const [count, setCount] = useState(0);

    const [answerList, setAnswerList] = useState([]);

    const [timer, setTimer] = useState(45);

    const [start, setStart] = useState(false);

    useEffect(() => {
        checkAnswer();
        if (start) {
            let counter =
                timer > 0 &&
                setTimeout(() => {
                    setTimer(timer - 1);
                }, 1000);
        }
        if (timer === 0) {
            setStart(false);
        }
    }, [timer, start]);

    const handleChange = (e) => {
        if (start === true) {
            let value = e.target.value;

            setChange(value);
        }
    };

    const startGame = () => {
        setStart(true);
    };

    const newGame = () => {
        setCount(0);
        setAnswerList([]);
        setTimer(45);
        clearTimeout(timer);
    };

    const checkAnswer = () => {
        let tempAnswer = teamsList.filter((item) => item === change);

        if (tempAnswer.length !== 0 && tempAnswer[0] === change) {
            setCount((prevstate) => {
                return prevstate + 1;
            });
            let newTeams = teamsList.filter((item) => item !== change);
            setTeamsList(newTeams);
            setAnswerList([...answerList, change]);
            setChange('');
        }
    };

    return (
        <>
            <div className='jumbotron'>
                <div className='column'>
                    <Input change={change} handleChange={handleChange}></Input>
                    <Start
                        timer={timer}
                        startGame={startGame}
                        newGame={newGame}></Start>
                </div>
                <div className='column'>
                    <AnswerList answerList={answerList}></AnswerList>
                    <Counter count={count}></Counter>
                </div>
            </div>
        </>
    );
}

export default App;
