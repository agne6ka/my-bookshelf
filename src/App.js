import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import {Route} from 'react-router-dom';
import Navigation from "./Navigation";
import Search from "./Search";
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
  state = {data: []};

  componentDidMount() {
    const books = BooksAPI.getAll();

    books.then((data) => {
      this.setState({data})
    })
  }

  render() {
    return (
      <div className="app">
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Navigation/>
          <Route exact path={['/', '/my-bookshelf']} render={() => (
            <Shelf books={this.state.data}/>
          )}/>
          <Route path='/search' render={() => (
            <Search books={this.state.data}/>
          )}/>
        </ThemeProvider>
      </div>
    );
  }
}

export default BooksApp;
