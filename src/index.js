import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BlogList from './contents/BlogList/BlogList';
// import MyCard from './components/MyCard'
// import CardTeam from './contents/CardTeam'
// import CounterProducts from './contents/CounterProducts';

ReactDOM.render(
	// <CounterProducts />, document.getElementById('root')
	<BlogList />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
