import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { RoomProvider } from './Components/Context';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <RoomProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RoomProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
