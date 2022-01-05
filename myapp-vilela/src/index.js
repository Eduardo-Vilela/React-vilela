import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GetFireStoreApp } from './config/GetFireStoreApp';


GetFireStoreApp()


ReactDOM.render(
    <App />, document.getElementById('root')
);

