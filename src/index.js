import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css'

// import {App} from './App';
import { CounterApp } from './components/01-useState/CounterApp';

ReactDOM.render(
    <CounterApp />
      ,
  document.getElementById('root')
);
