import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({formControl: {margin: theme.spacing(3)}}));

const Bookmark = ({book, bookmark, onBookmarkUpdate, toggleDrawer}) => {
  const classes = useStyles();
  const [value, setValue] = useState('none');
  const handleChange = event => {
    setValue(event.target.value);
    onBookmarkUpdate(book, event.target.value);
    toggleDrawer();
  };

  useEffect(() => setValue(bookmark), [bookmark]);

  return (
    <>
      <FormControl component="fieldset" className={classes.formControl}>
        <Typography paragraph>Move to:</Typography>
        <Divider />
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="currentlyReading" control={<Radio/>} label="Currently Reading"/>
          <Divider />
          <FormControlLabel value="wantToRead" control={<Radio/>} label="Want to read"/>
          <Divider />
          <FormControlLabel value="read" control={<Radio/>} label="Read"/>
          <Divider />
          <FormControlLabel value="none" control={<Radio/>} label="None"/>
          <Divider />
        </RadioGroup>
      </FormControl>
    </>
  )
};

export default Bookmark;
