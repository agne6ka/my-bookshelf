import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  Fab,
  IconButton
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    textAlign: 'left',
    margin: 'auto',

  },
  cardContent: {
    backgroundColor: 'rgba(33,33,33,0.9)'
  },
  media: {
    maxHeight: 350,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    backgroundColor: '#80CBC4',
    "&:hover": { backgroundColor: "#598e89" },
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    backgroundColor: '#80CBC4',
    "&:hover": { backgroundColor: "#598e89" }
  },
}));

const BookCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=10&source=gbs_api"
        title="The Linux Command Line"
      >
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            The Linux Command Line
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            William E. Shotts, Jr.
          </Typography>
        </CardContent>
        <CardActions className={classes.cardContent} disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon/>
          </IconButton>
        </CardActions>
      </CardMedia>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BookCard;
