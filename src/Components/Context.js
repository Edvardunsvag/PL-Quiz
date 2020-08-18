import React, { useState, useRef, useEffect } from 'react';

const DataContext = React.createContext();
export default function RoomProvider(props) {
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

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        let tempAnswer = teamsList.filter((item) => item === change);

        if (timer === 0) {
            setRedirect(true);
            setStart(false);
        }

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
    }, [timer, start, answerList, change, teamsList, count]);

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
        setAnswerList([]);
        setTimer(45);
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
            }}>
            {props.children}
        </DataContext.Provider>
    );
}

const RoomConsumer = DataContext.Consumer;

export { RoomConsumer, RoomProvider, DataContext };
