import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import {ScreenArchers} from './components/ScreenArchers'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScreenArchers />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

