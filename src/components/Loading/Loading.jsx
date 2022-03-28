import React from 'react'
import Grid from '@mui/material/Grid';
import beno from '../../assets/beno.jpg'
import './Loading.css'
import CircularProgress from '@mui/material/CircularProgress';




export default function Loading() {
  return (
    <div className="load">
            <Grid item xs ={12} xl={12} l={12} sm={12} className="img-loading">
           <img style={{width: '277px'}} src={beno} alt="" srcset="" className="gif" />
           <Grid style={{display: 'flex', justifyContent: 'center'}}>
           <CircularProgress  color="secondary"/>
           </Grid>
            </Grid>
        </div>
    );
  
}
