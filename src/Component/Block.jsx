import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();


  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
       
        <Typography variant="h5" component="h2">
        Help is available
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Speak with a counsellor today
        </Typography>
        <Typography variant="body2" component="p">
        Jeevan Aastha Helpline 
          <br />
          Toll Free : 1800 233 3330  ( Verified )
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}