import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import {Route} from 'react-router-dom';
import SearchResults from "./SearchResults";
import SearchInput from "./SearchInput";
import Navigation from "./Navigation";
import Shelf from "./Shelf";
import './App.css';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#212121',
      contrastText: '#fff',
    },
    secondary: {
      main: '#009688',
      contrastText: '#fff',
    }
  }
});

class BooksApp extends Component {
  render() {
    console.log(BooksAPI.getAll());
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Navigation/>
          <Route exact path='/' render={() => (
            <Shelf/>
          )}/>
          <Route exact path='/search' render={() => (
            <>
              <SearchInput/>
              <SearchResults/>
            </>
          )}/>
        </ThemeProvider>
      </div>
    );
  }
}

export default BooksApp;
