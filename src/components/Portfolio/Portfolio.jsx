import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import "./Portfolio.css";
import Tilt from "react-vanilla-tilt";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from '@mui/material/IconButton';


export default function Portfolio() {

  
  const projects = [
    {
      proj: {
        name: "Gamingzoneke",
        details: 'A web app gives you the latest information on up and coming games as well as their platforms such as playstaion and xbox',
        link: "https://gamezoneke.netlify.app/",
        stack: ['React', 'Javascript', 'Netlify', 'Material UI', 'rawg api'],
        gitLink: 'https://github.com/kelvinbe/GamingZone'
      },
    },
    {
      proj: {
        name: "Victor's wedding webapp",
        details: "A simple web app to help client victor raise funds for his upcoming wedding by showcasing their journey together preparing for marriage.",
        link: "https://vicweds.web.app/",
        stack: ['React', 'Javascript', 'Firebase', 'Material UI'],
        gitLink: 'https://github.com/kelvinbe/vicswedding'
      },
    },
    {
      proj: {
        name: "Jipange",
        details: "A react native mobile app that helps users in managing their time for maximum productivity. Taking from the famous pomodoro technique used by many working",
        link: "https://play.google.com/store/apps/details?id=my.jipange.app",
        stack: ['React Native', 'Javascript', 'Expo'],
        gitLink: 'https://github.com/kelvinbe/react-native-pomodoro'
      },
    },
    {
      proj: {
        name: "Portfolio Site",
        details: "A personal portfolio site showcasing personal projects i have worked on and also information on my journey from schooling to work experience",
        link: "https://kbeno.com",
        stack: ['React', 'Javascript', 'netlify', 'Material UI', 'CSS3'],
        gitLink: 'https://github.com/kelvinbe/portfolio'
      },
    }
  ];


  return (
     

      <Grid container className="containerProjects">
      <Grid item xs={4}>
        {" "}
        <p className="titlePort">Projects</p>
      </Grid>
        <Grid item   className="cardDisplay">
          {projects.map((project) => {
            return (
              <Tilt className="tiltStyles">
                <Card sx={{ minWidth: 275 }}>
                  <CardContent className="cardIcons">
                    <FolderOutlinedIcon className="iconColor" />
                    <div>
            <IconButton href={project.proj.gitLink} target="_blank" style={{marginTop: -13}}>
            <GitHubIcon className="iconColor" />
              </IconButton>     

                      <IosShareOutlinedIcon className="iconColor" />
                    </div>
                  </CardContent>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {project.proj.name}
                    </Typography>
                    <Typography variant="body2">
                      {project.proj.details}
                    </Typography>
                    <Typography variant="body2">
                      <ul className="stackDisplay">
                      {project.proj.stack.map((i) => {
                       return <li>{i}</li>
                      })}
                      </ul>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                    style={{color: 'blue'}}
                      size="small"
                      href={project.proj.link}
                      target="_blank"
                    >
                      Visit
                    </Button>
                  </CardActions>
                </Card>
              </Tilt>
            );
          })}
        </Grid>
      </Grid>
  );
}
