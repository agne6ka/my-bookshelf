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

const SearchResults = ({books}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="space-around" className={classes.spacing}>
        <Grid container item xs={12} spacing={5}>
          {
            books.map((book, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} lg={3}>
                  <BookCard book={book}/>
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
