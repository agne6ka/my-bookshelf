import React, {Component} from 'react';
import Navigation from "./Navigation";
import SearchResults from "./SearchResults";
import SearchInput from "./SearchInput";


class Search extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <SearchInput/>
        <SearchResults/>
      </>
    );
  }
}

export default Search;
