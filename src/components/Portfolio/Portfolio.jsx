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
        name: "Modified Twitter Web App",
        details: 'A dummy playful re-imagining of twitter with some small new features: Note - Not mobile responsive',
        link: "https://twitter-api-d8f20.web.app/",
        stack: ['React', 'Javascript', 'Firebase', 'Material UI'],
        gitLink: 'https://github.com/kelvinbe/twitter'
      },
    },
    {
      proj: {
        name: "Victor's wedding webapp",
        details: "A simple web app to help client victor raise funds for his upcoming wedding by showcasing their journey.",
        link: "https://vicshawed.web.app/",
        stack: ['React', 'Javascript', 'Firebase', 'Material UI'],
        gitLink: 'https://github.com/kelvinbe/vicswedding'
      },
    },
    {
      proj: {
        name: "New Proj",
        details: "A dummy playful re-imagining of twitter with some small new features: Note - Not mobile responsive",
        link: "",
        stack: ['React', 'Javascript', 'Firebase', 'Material UI'],
        gitLink: ''
      },
    },
    {
      proj: {
        name: "New Proj",
        details: "A dummy playful re-imagining of twitter with some small new features: Note - Not mobile responsive",
        link: "",
        stack: ['React', 'Javascript', 'Firebase', 'Material UI'],
        gitLink: ''
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
