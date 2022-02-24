import { StrictMode } from 'react';
import { render } from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
