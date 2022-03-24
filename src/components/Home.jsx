import React from "react";
import tail from "../assets/tail.svg";
import head from "../assets/head.svg";
import "./styles/Home.css";
import Typewriter from "typewriter-effect";
import Grid from '@mui/material/Grid';


export default function Home() {
  return (
    <Grid>


      
    <Grid item xs={12} xl={12} className="container">
      <Grid item xs={12} xl={12} className="typewriter">
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

      <Grid item xs={12} xl={12} >
        <div>
          <img src={head} alt="" className="tie" />
        </div>
        <div>
          <img src={tail} alt="" className="tie" />
        </div>
      </Grid>
      <Grid item xs={12} xl={12}>
      <div>
        <p className="title">ABOUT ME</p>
      </div>
      </Grid>
     
    </Grid>
    <Grid item xs={12} xl={12} className="aboutText">
        <p className="title">PORTFOLIO</p>
    </Grid>
    
    </Grid>
  );
}
