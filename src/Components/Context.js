import React, { useState, useRef, useEffect } from 'react';

const DataContext = React.createContext();
export default function RoomProvider(props) {
    const levenshtein = require('js-levenshtein');
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

    const [timer, setTimer] = useState(5);

    const [start, setStart] = useState(false);

    const [timerState, setTimerState] = useState();

    const [redirect, setRedirect] = useState(false);

    const [levenshteinScore, setLevenshteinScore] = useState(false);

    const [answer, setAnswer] = useState('');

    //Reg Page
    const [submitName, setSubmitName] = useState(false);

    useEffect(() => {
        for (let i = 0; i < teamsList.length; i++) {
            let result = levenshtein(change, teamsList[i]);
            if (result < 2.5 && teamsList[i].length === change.length) {
                setLevenshteinScore(true);
                setAnswer(teamsList[i]);
            }
        }

        if (timer === 0) {
            setSubmitName(true);
            setRedirect(true);
            setStart(false);
        }

        if (levenshteinScore) {
            setCount((prevstate) => {
                return prevstate + 1;
            });
            let newTeams = teamsList.filter((item) => item !== answer);
            setTeamsList(newTeams);
            setAnswerList([...answerList, answer]);
            setChange('');
            setLevenshteinScore(false);
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
    }, [
        timer,
        start,
        answerList,
        change,
        teamsList,
        count,
        levenshteinScore,
        levenshtein,
        answer,
    ]);

    const handleChange = (e) => {
        if (start === true) {
            let value = e.target.value;
            let res = value.toLowerCase();

            setChange(res);
        }
    };

    const startGame = (event) => {
        refContainer.current.focus();
        setStart(true);
    };

    const newGame = (event) => {
        clearTimeout(timerState);
        setCount(0);
        setSubmitName(true);
        setAnswerList([]);
        setTimer(90);
    };

    return (
        <DataContext.Provider
            value={{
                count,
                refContainer,
                change,
                handleChange: handleChange,
                startGame: startGame,
                newGame: newGame,
                timer,
                redirect,
                setRedirect,
                answerList,
                timerState,
                submitName,
                setSubmitName,
            }}>
            {props.children}
        </DataContext.Provider>
    );
}

const RoomConsumer = DataContext.Consumer;

export { RoomConsumer, RoomProvider, DataContext };
