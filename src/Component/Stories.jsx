import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      
      <CardMedia
        className={classes.media}
        image="https://adaa.org/sites/default/files/Brittany%20Cissell_0.jpg"
        title="Otis the Aussiedoodle - My Anxiety Story"
      />
      
      
      
        <CardContent>
          <Typography paragraph>Otis the Aussiedoodle - My Anxiety Story by Brittany Cissell</Typography>
          <Typography paragraph>
          
          </Typography>
          <Typography paragraph>
          My name is Brittany Cissell. I am a Pre-K teacher in Springdale Arkansas, and I am the author and illustrator of Otis the Aussiedoodle. Otis is my 3-year-old Australian Shepard/Poodle mix. He joined our family in February 2020, after being re-homed. Otis was originally saved from a suspected puppy mill and was in pretty bad condition when he was adopted. He had an open wound, ear mites, and awful, matted fur. His previous owner immediately took him to the vet and got him healthy. Although he is happy and healed, Otis struggles with anxiety.
          </Typography>
          <Typography paragraph>
          I suppose it was fate that Otis entered my life. I have battled my own anxiety for as long as I can remember. In 2009, during my freshman year of college, I was diagnosed with Generalized Anxiety Disorder. Thankfully, I was able to find a wonderful doctor who helped me with medication and coping skills. While I am so much better today, my anxiety is still a huge hurdle for me. G.A.D. is so much more than just worrying and it’s difficult to understand unless you’ve experienced it. People always tell me, “don’t stress”, “calm down”, or “it’s not a big deal”. Oh, how I wish it were that simple! My brain literally never stops and idle time is my worst enemy
          </Typography>
          <Typography>
          I find myself constantly cycling through all the possible worst-case scenarios and how they could happen at any given time. G.A.D. makes me believe that if I don’t worry about or plan for all the things that could go wrong, then they will happen. Not only will these scenarios actually happen, but then I won’t be prepared if they do. I need constant order and structure in my environment to maintain control, which makes me feel safe. My routine is so important and disruptions to it can cause panic and at times, actual physical illness. To people who don’t understand G.A.D., I come off as a control freak, germophobe, hypochondriac, worrywart, or a flake. 
          </Typography>
        </CardContent>
      
    </Card>
  );
}