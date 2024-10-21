import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      image: process.env.PUBLIC_URL + "/images/todo.jpg",
      title: "To-do list",
      description: "HTML | CSS | JS | ReactJs",
      githubLink: "https://github.com/arundhathi-t/To-do-app-react",
    },
    {
      image: process.env.PUBLIC_URL + "/images/portfolio.jpg",
      title: "My Portfolio",
      description: "ReactJs | MUI",
      githubLink: "https://github.com/arundhathi-t/Portfolio-react",
    },
    {
      image: process.env.PUBLIC_URL + "/images/lenskart.jpg",
      title: "Lenskart",
      description: "ReactJs | Bootstrap",
      githubLink: "https://github.com/your-profile/lenskart",
    },
  ];

  return (
    <Container>
      <Box sx={{ textAlign: "center", my: 6 }}>
        <Typography variant="body1" fontStyle={"oblique"}>
          My Recent Works
        </Typography>
        <Typography variant="h4" fontStyle={"oblique"}>
          Projects
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {projectData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
