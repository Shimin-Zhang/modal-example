import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './Container';

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  // The WP version with shortcode
  // document.getElementById('calculator-root')
  // The development version with root
  document.getElementById('root')
);
