import React, {Component} from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: 'auto',
    maxWidth: 600,
    height: 55,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(8),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '80%',
    height: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create('width')
  },
}));

const SearchInput = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon/>
      </div>
      <InputBase
        placeholder="Search books..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{'aria-label': 'search'}}
      />
    </div>
  )
};

export default SearchInput;
