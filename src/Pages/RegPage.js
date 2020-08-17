import React, { useState, useContext, useEffect } from 'react';
import Registration from '../Components/Registration';
import { DataContext } from '../Components/Context';
import firebase from 'firebase';

// Set the configuration for your app
// TODO: Replace with your project's config object
var firebaseConfig = {
    apiKey: 'AIzaSyBrNabd729PA99ZfiYQZrszwd-81CAKtQA',
    authDomain: 'myawesomepremierleaguequiz.firebaseapp.com',
    databaseURL: 'https://myawesomepremierleaguequiz.firebaseio.com',
    projectId: 'myawesomepremierleaguequiz',
    storageBucket: 'myawesomepremierleaguequiz.appspot.com',
    messagingSenderId: '860445190494',
    appId: '1:860445190494:web:c94b18cc0ad7f9d2b687cf',
    measurementId: 'G-MQC5G5DSCL',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database();
let ref = database.ref('scores');

export default function RegPage() {
    const [change, setChange] = useState('');

    const [leaderboard, setLeaderboard] = useState([]);

    const [fireBaseCall, setFireBaseCall] = useState(false);

    const context = useContext(DataContext);

    const { count } = context;

    useEffect(() => {
        const gotData = (data) => {
            let scores = data.val();
            let keys = Object.keys(scores);
            for (let i = 0; i < keys.length; i++) {
                let k = keys[i];
                let initials = scores[k].name;
                let score = scores[k].count;

                const newScoreElement = {
                    name: initials,
                    count: score,
                };

                setLeaderboard((leaderboard) => [
                    ...leaderboard,
                    newScoreElement,
                ]);
            }
        };

        if (fireBaseCall === false) {
            ref.on('value', gotData);
        }
        setFireBaseCall(true);

        return () => {};
    }, [fireBaseCall, leaderboard]);

    const regHandleChange = (e) => {
        let value = e.target.value;
        setChange(value);
    };

    const regHandleClick = () => {
        setFireBaseCall(false);
        const data = {
            count: count,
            name: change,
        };
        ref.push(data);
        setLeaderboard([]);
    };

    return (
        <>
            <div>
                {setFireBaseCall && (
                    <Registration
                        leaderboard={leaderboard}
                        change={change}
                        regHandleChange={regHandleChange}
                        regHandleClick={regHandleClick}></Registration>
                )}
            </div>
        </>
    );
}
