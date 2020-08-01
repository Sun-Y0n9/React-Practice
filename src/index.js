import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/Reset.css';
import './static/css/Common.less';
// import Admin from './admin';
import Router from './router';
// import Home from './pages/router-demo/route1/home';
// import Router from './pages/router-demo/route3/route';

ReactDOM.render(
    <Router />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA