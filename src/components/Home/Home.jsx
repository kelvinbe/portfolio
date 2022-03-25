import React from "react";
import tail from "../../assets/tail.svg";
import head from "../../assets/head.svg";
import "./styles/Home.css";
import Typewriter from "typewriter-effect";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";



export default function Home() {
  return (

    <Grid container className="containerHome">
      <Grid item xs={4} xl={12}>
        <p className="title">
          <Typewriter
            options={{
              strings: ["Hello", "Welcome", "My Name is Kelvin", " A React", "React Native", "Developer"],
              autoStart: true,
              loop: true,
              cursor: "$",
            }}
          />
        </p>
      </Grid>

      <Grid item xs={4} xl={12} >
        <div>
          <img src={head} alt="" className="tie" />
        </div>
        <div>
          <img src={tail} alt="" className="tie" />
        </div>
      </Grid>
      <Grid item xs={3} xl={12}>
      <Link to="aboutme">
        <p className="title">ABOUT ME</p>
      </Link>
      </Grid>
      <Grid item xs={12} xl={12} className='portfo'>
      <Link to="portfolio" >
        <p className="title">PORTFOLIO</p>
        </Link>
    </Grid>
     
    </Grid>
    
    
  );
}
