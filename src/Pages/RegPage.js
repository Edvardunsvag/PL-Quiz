import React, { useState, useContext, useEffect } from 'react';
import Registration from '../Components/Registration';
import { DataContext } from '../Components/Context';
import firebase from 'firebase';

// Set the configuration for your app
// TODO: Replace with your project's config object
var firebaseConfig = {
    apiKey: 'AIzaSyD9k-ZrjokM2YwdpUH2Ng9Oj_pC0WwPg6E',
    authDomain: 'myawesomepremierleaguequiz2.firebaseapp.com',
    databaseURL: 'https://myawesomepremierleaguequiz2.firebaseio.com',
    projectId: 'myawesomepremierleaguequiz2',
    storageBucket: 'myawesomepremierleaguequiz2.appspot.com',
    messagingSenderId: '978935975021',
    appId: '1:978935975021:web:88ba28c845f57e4bf44364',
    measurementId: 'G-CDZ7Z696D2',
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

    const { count, setRedirect, setSubmitName, submitName } = context;

    useEffect(() => {
        const gotData = (data) => {
            let scores = data.val();
            if (scores != null) {
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
        console.log('Handle Click ute');
        if (submitName) {
            console.log('Handle Click Inne');

            setFireBaseCall(false);
            const data = {
                count: count,
                name: change,
            };
            ref.push(data);
            setLeaderboard([]);
            setRedirect(false);
        }

        setSubmitName(false);
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
