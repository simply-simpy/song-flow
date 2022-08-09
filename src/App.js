import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { Button } from 'reactstrap';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Button color="danger">Danger!</Button>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
