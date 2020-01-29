import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import BookCard from "./BookCard";
import {Typography} from "@material-ui/core";


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  spacing: {
    marginTop: 50,
  },
  typography: {
    textDecoration: 'underline',
    marginLeft: 20
  }
}));

const Shelf = ({books, onBookmarkUpdate}) => {
  const classes = useStyles();
  let reading = [], wantToRead= [], read = [];

  books.filter((book) => {
    if (book.shelf === 'currentlyReading') reading.push(book);
    if (book.shelf === 'wantToRead') wantToRead.push(book);
    if (book.shelf === 'read') read.push(book);
    return true;
  });

  return (
    <div className={classes.root}>
      <Grid container className={classes.spacing}>
        <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
          Currently Reading
        </Typography>
      </Grid>
      <Grid container justify="space-around" className={classes.spacing}>
        <Grid container item xs={12} spacing={5}>
          {
            reading.map((book, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} lg={3}>
                  <BookCard bookmark={book.shelf} book={book} onBookmarkUpdate={onBookmarkUpdate}/>
                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
      <Grid container className={classes.spacing}>
        <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
          Want to read
        </Typography>
      </Grid>
      <Grid container justify="space-around" className={classes.spacing}>
        <Grid container item xs={12} spacing={5}>
          {
            wantToRead.map((book, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} lg={3}>
                  <BookCard bookmark={book.shelf} book={book} onBookmarkUpdate={onBookmarkUpdate}/>
                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
      <Grid container className={classes.spacing}>
        <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
          Read
        </Typography>
      </Grid>
      <Grid container justify="space-around" className={classes.spacing}>
        <Grid container item xs={12} spacing={5}>
          {
            read.map((book, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} lg={3}>
                  <BookCard bookmark={book.shelf} book={book} onBookmarkUpdate={onBookmarkUpdate}/>
                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
    </div>
  )
};

export default Shelf;
