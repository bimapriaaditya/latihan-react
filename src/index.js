import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HelloStatefull from './contents/HelloStatefull'
import HelloStateless from './components/HelloStateless'
import MyCard from './components/MyCard'
import CardTeam from './contents/CardTeam'

ReactDOM.render(
	<CardTeam />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
