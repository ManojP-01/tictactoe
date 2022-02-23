import React from 'react';
import Board from './components/Board';
import './styles/root.scss';

const App = () => (
  <div className="app">
    <h1>Welcome to React Vite Micro App!</h1>
    <p>Hard to get more minimal than this React app.</p>
    <Board />
  </div>
);
export default App;
