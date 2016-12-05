import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import App from './App';
import CustomerList from './components/CustomerList';
import './index.css';

ReactDOM.render((
 <div>
  <CustomerList customers="CUSTOMERDATA" />
 </div>
), document.getElementById('root'));
