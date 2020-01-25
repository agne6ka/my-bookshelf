import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {makeStyles} from '@material-ui/core/styles';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '50px'
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Route exact path='/my-bookshelf' render={() => (
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              MY BOOKSHELF
            </Typography>
            <Link to="/search">
              <Fab color="secondary" aria-label="add">
                <AddIcon/>
              </Fab>
            </Link>
          </Toolbar>
        </AppBar>
      )}/>
      <Route exact path='/search' render={() => (
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              SEARCH RESULTS
            </Typography>
            <Link to="/my-bookshelf">
              <Fab color="secondary" aria-label="back">
                <ArrowBackIcon/>
              </Fab>
            </Link>
          </Toolbar>
        </AppBar>
      )}/>
    </div>
  )
};

export default Navigation;
  