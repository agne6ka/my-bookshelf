import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BookCard from "./BookCard";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const Shelf = () => {
  const classes = useStyles();

    const FormRow = () => {
      return (
        <React.Fragment>
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
        </React.Fragment>
      )
    };

    return (
      <div className={classes.root}>
        <Grid container spacing={5} justify="space-around">
          <Grid container item xs={12} spacing={5}>
            <FormRow/>
          </Grid>
          <Grid container item xs={12} spacing={5}>
            <FormRow/>
          </Grid>
          <Grid container item xs={12} spacing={5}>
            <FormRow/>
          </Grid>
        </Grid>
      </div>
    )
};

export default Shelf;
