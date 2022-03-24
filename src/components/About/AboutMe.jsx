import React, {useState} from 'react'
import './styles/About.css'
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import code from '../../assets/test.webp'
import {Skills, Experience, Education} from './info';


export default function AboutMe() {
  const [value, setValue] = React.useState(0);



  function TabPanel(props) {

    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };






  return (
    <Grid  xs={12} lg={12} container className='container'>

      <Grid item xs={12} xl={12} className="title">
        <p className="title">About</p>
    </Grid>
   
      <Grid item xs={9} md={8} lg={6} className='imgContainer'>
        <img className='img' src={code} alt="" />
      </Grid>
      <Grid item xs={8} md={8} lg={6}>
      <Grid item xs={12} xl={12} className="title">
        <p className="title">About Me</p>
    </Grid>
      <Grid>
      <p className="title">I am a software developer. Love building and learning new things</p>
    </Grid>
       <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Skills" {...a11yProps(0)} />
          <Tab label="work" {...a11yProps(1)} />
          <Tab label="Education" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel  value={value} index={0}>
        <Skills />
      </TabPanel>
      <TabPanel  value={value} index={1}>
        <Experience />
      </TabPanel>
      <TabPanel  value={value} index={2}>
        <Education />
      </TabPanel>
    </Box>
    </Grid>
    </Grid>
  )
}
