import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BookCard from "./BookCard";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  spacing: {
    marginTop: 50,
  }
}));

const SearchResults = ({books, bookmarks, onBookmarkUpdate}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="space-around" className={classes.spacing}>
        <Grid container item xs={12} spacing={5}>
          {
            books.map((book, index) => {
              const checkBookmark = bookmarks.filter((i) =>{ return i.id === book.id});
              const currentBookmark = checkBookmark.length !== 0 ? checkBookmark[0].shelf : 'none';
              return (
                <Grid key={index} item xs={12} sm={6} lg={3}>
                  <BookCard book={book} bookmark={currentBookmark} onBookmarkUpdate={onBookmarkUpdate}/>
                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
    </div>
  )
};

export default SearchResults;
