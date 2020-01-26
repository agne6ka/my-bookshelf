import React, {Component} from 'react';
import SearchResults from "./SearchResults";
import SearchInput from "./SearchInput";
import * as BooksAPI from "./BooksAPI";


class Search extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    const books = BooksAPI.search('Design');

    books.then((books)=>{this.setState({books})});
  }

  render() {
    return (
      <>
        <SearchInput/>
        <SearchResults books={this.state.books}/>
      </>
    );
  }
}

export default Search;
