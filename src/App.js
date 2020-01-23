import React, {Component} from 'react';
import logo from './logo.svg';
import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends Component {
  render() {
    console.log(BooksAPI.getAll());
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
}

export default BooksApp;
