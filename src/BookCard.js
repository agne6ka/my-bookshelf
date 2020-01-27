import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Card, CardMedia, CardContent, Typography, CardActions, IconButton} from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import Bookmark from "./Bookmark";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: 'auto',

  },
  cardContent: {
    backgroundColor: 'rgba(33,33,33,0.9)',
    minHeight: 70
  },
  media: {
    maxHeight: 350,
    paddingTop: '56.25%', // 16:9
    position: 'relative'
  },
  expand: {
    transform: 'rotate(0deg)',
    zIndex: 10,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#80CBC4',
    "&:hover": { backgroundColor: "#598e89" },
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    zIndex: 10,
    position: 'absolute',
    bottom: 10,
    right: 10,
    transform: 'rotate(180deg)',
    backgroundColor: '#80CBC4',
    "&:hover": { backgroundColor: "#598e89" }
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawer: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 5
  },
}));

const BookCard = ({book, bookmark, onBookmarkUpdate}) => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const image =  book.imageLinks ? `${book.imageLinks.smallThumbnail.split('zoom=')[0]}zoom=3` : '';

  const toggleDrawer = () => {
    open ? setOpen(false) : setOpen(true);
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={image}
        title={book.title}
      >
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {book.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {book.authors && book.authors.map((author) => ` ${author}`)}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardContent} disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
             [classes.expandOpen]: expanded,
            })}
            onClick={toggleDrawer}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon/>
          </IconButton>
        </CardActions>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Bookmark book={book} bookmark={bookmark} onBookmarkUpdate={onBookmarkUpdate} toggleDrawer={toggleDrawer}/>
        </Drawer>
      </CardMedia>
    </Card>
  );
};

export default BookCard;
