import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import './Portfolio.css'
import Tilt from 'react-vanilla-tilt'


export default function Portfolio() {


      
  return (
      <Grid xs={12} xl={12} lg={12} md={12} className='container'>
          <Grid item xs={12} md={6} lg={6}>
          <Tilt className='tiltStyles'>
         <Card sx={{ minWidth: 275 }}>
      <CardContent className='cardIcons'>

       <FolderOutlinedIcon />
        <IosShareOutlinedIcon />
      </CardContent>
      <CardContent>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          A web app that utilizes the gaming api to display data on various games that are coming out
          A web app that utilizes the gaming api to display data on various games that are coming out

        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Typography variant="body2">
          <ul className='stackDisplay'>
              <li>React</li>
              <li>Javascript</li>
              <li>Python</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
    </Tilt>
    </Grid>

      </Grid>
  )
}
