import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import BookCard from "./BookCard";
import { Typography} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  spacing: {
    marginTop: 50,
  },
  typography: {
    textAlign: 'left',
    textDecoration: 'underline',
    marginLeft: 20
  }
}));

const Shelf = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.spacing}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
            Currently Reading
          </Typography>
      </Grid>
      <Grid container justify="space-around" className={classes.spacing}>
        <Grid container item xs={12} spacing={5}>
          <Grid item xs={12} sm={6} lg={3}>
            <BookCard/>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BookCard/>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BookCard/>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BookCard/>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BookCard/>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BookCard/>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BookCard/>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BookCard/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};

export default Shelf;
