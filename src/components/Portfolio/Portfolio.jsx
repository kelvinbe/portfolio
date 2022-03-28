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

export default function Portfolio() {
  const projects = [
    {
      proj: {
        name: "Modified Twitter Web App",
        stack: `React JS ${"  "} Firebase ${" "} MaterialUI HTML5 ${" "} CSS3 ${" "} Javascript`,
        link: "https://twitter-api-d8f20.web.app/",
      },
    },
    {
      proj: {
        name: "Portfolio Site",
        stack: "React JS Firebase HTML5 CSS3",
        link: "",
      },
    },
    {
      proj: {
        name: "New Proj",
        stack: "React JS Firebase HTML5 CSS3",
        link: "",
      },
    },
    {
      proj: {
        name: "New Proj",
        stack: "React JS Firebase HTML5 CSS3",
        link: "",
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
                      <GitHubIcon className="iconColor" />

                      <IosShareOutlinedIcon className="iconColor" />
                    </div>
                  </CardContent>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {project.proj.name}
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                    <Typography variant="body2">
                      <ul className="stackDisplay">
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Python</li>
                      </ul>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      href={project.proj.link}
                      target="_blank"
                    >
                      Learn More
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
