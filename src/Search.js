import React, {Component} from 'react';
import SearchResults from "./SearchResults";
import SearchInput from "./SearchInput";
import * as BooksAPI from "./BooksAPI";


class Search extends Component {
  state = {
    resp: [],
    value: ''
  };

  onSearch = (value) => {
    this.setState({value});
    (value.length > 0) ? this.showBooks(value) : this.setState({resp: []});
  };

  showBooks = (value) => {
    const booksSearch = BooksAPI.search(value);

    booksSearch
      .then((resp) => {
        if(resp === undefined) return null;
        resp.error ? this.setState({resp: []}) : this.setState({resp})
      })
  };

  render() {
    return (
      <>
        <SearchInput query={this.state.value} onSearch={this.onSearch}/>
        {
          <SearchResults books={this.state.resp}/>
        }
      </>
    );
  }
}

export default Search;
