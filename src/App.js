import React, { useState, useEffect, useRef } from 'react';
import Input from './Components/Input';
import Counter from './Components/Counter';
import AnswerList from './Components/AnswerList';
import Start from './Components/Start';

import './App.css';

function App() {
    const [teamsList, setTeamsList] = useState([
        'liverpool',
        'west ham',
        'leeds',
        'manchester city',
        'manchester united',
        'chelsea',
        'leicester',
        'tottenham',
        'wolverhampton',
        'arsenal',
        'sheffield united',
        'burnley',
        'southhampton',
        'everton',
        'newcastle',
        'crystal palace',
        'brighton',
        'aston villa',
        'west bromwich',
        'brentford',
    ]);
    const refContainer = useRef(null);

    const [change, setChange] = useState('');

    const [count, setCount] = useState(0);

    const [answerList, setAnswerList] = useState([]);

    const [timer, setTimer] = useState(45);

    const [start, setStart] = useState(false);

    const [timerState, setTimerState] = useState();

    useEffect(() => {
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
        if (start) {
            const timerVariable =
                timer > 0 &&
                setTimeout(() => {
                    setTimer(timer - 1);
                }, 1000);
            setTimerState(timerVariable);
            return () => clearTimeout(timer);
        }
        if (timer === 0) {
            setStart(false);
        }
    }, [timer, start, answerList, change, teamsList]);

    const handleChange = (e) => {
        if (start === true) {
            let value = e.target.value;
            let res = value.toLowerCase();

            setChange(res);
        }
    };

    const startGame = () => {
        refContainer.current.focus();
        setStart(true);
    };

    const newGame = () => {
        clearTimeout(timerState);
        setCount(0);
        setAnswerList([]);
        setTimer(45);
    };

    return (
        <>
            <div className='jumbotron'>
                <div className='column'>
                    <Input
                        focusing={refContainer}
                        change={change}
                        handleChange={handleChange}></Input>
                    <Start
                        timer={timer}
                        startGame={startGame}
                        newGame={newGame}></Start>
                </div>
                <div className='column'>
                    <Counter count={count}></Counter>
                </div>
                <div className='column'>
                    <AnswerList answerList={answerList}></AnswerList>
                </div>
            </div>
        </>
    );
}

export default App;
