import React from "react";
import { Grid, Container, Box, Typography } from "@mui/material";
import FlipCard from "./FlipCard";
import "./Skills.scss";

const Skills = () => {
  const programmingLang = [
    { skill: "JavaScript(ES6)", level: "Experienced" },
    { skill: "Java", level: "Intermediate" },
  ];

  const webTechnologies = [
    { skill: "HTML5", level: "Experienced" },
    { skill: "CSS3", level: "Experienced" },
    { skill: "Bootstrap", level: "Experienced" },
    { skill: "Material UI", level: "Intermediate" },
  ];

  const frameworks = [
    { skill: "ReactJs", level: "Experienced" },
    { skill: "Spring Boot", level: "Intermediate" },
  ];

  const stateManagement = [
    { skill: "ContextAPI", level: "Intermediate" },
    { skill: "React-Redux", level: "Intermediate" },
  ];

  const tools = [
    { skill: "Visual Studio Code", level: "Experienced" },
    { skill: "Eclipse", level: "Intermediate" },
    { skill: "Git", level: "Experienced" },
  ];

  return (
    <Container>
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="body1" fontStyle={"oblique"}>
          The Skills I Have
        </Typography>
        <Typography variant="h4" fontStyle={"oblique"}>
          My Experience
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <FlipCard title="Programming Languages" data={programmingLang} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FlipCard title="Web Technologies" data={webTechnologies} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FlipCard title="Frameworks" data={frameworks} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FlipCard title="State Management" data={stateManagement} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FlipCard title="Tools" data={tools} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
