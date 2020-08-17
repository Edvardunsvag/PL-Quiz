import React, { useContext } from 'react';
import Input from '../Components/Input';
import Counter from '../Components/Counter';
import AnswerList from '../Components/AnswerList';
import { DataContext } from '../Components/Context';
import Start from '../Components/Start';

import '../App.css';

function App() {
    const context = useContext(DataContext);

    const {
        refContainer,
        change,
        handleChange,
        timer,
        startGame,
        newGame,
        count,
        answerList,
    } = context;

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
