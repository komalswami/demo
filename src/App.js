import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import '/home/komal/demo/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Doccard from './Component/CardDoc';

import home from './home.jpg';
import Docdata from './Docdata'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function ncard(val){
  return(

    <Doccard
            name={val.name}
            time={val.time}
            address={val.address}
            pno={val.pno}
          />
  );
}

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <>
    
    <div className={classes.root}>
      <Grid container spacing={3}  direction="row"
  justify="center"
  alignItems="stretch">
        <Grid item xs={12}>
          <Paper className={classes.paper}>

         <h3 textAlign="center">
         
  
         Feeling Alone : Depressed : There is someone to listen to you
        <br/> Taking the first step towards seeking help can be difficult.<br/> But here are some people who can understand you.
          </h3></Paper>
        </Grid>
        <Grid item xs={12}>
         

             
          <img src={home} alt="Logo" width="100%"/>
          <br/><br/> 
       
          
        </Grid>

           { Docdata.map(ncard)}


   
        <Grid item xs={12}>
          <Paper className={classes.paper}>

         <h1 textAlign="center">
         PEACE : LOVE : LIFE
         </h1>
         

          </Paper>
        </Grid>

      </Grid>
    </div>
   
    </>


  );
}