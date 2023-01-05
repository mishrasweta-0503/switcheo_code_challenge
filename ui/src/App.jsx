import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Recommender from './components/Recommender.jsx'

const elem = (
  <Recommender/>
);


ReactDOM.render(elem, document.getElementById('contents'));


