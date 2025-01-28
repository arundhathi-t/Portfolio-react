import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  Container,
  Box,
  Grid,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const About = () => {
  const educationData = [
    {
      year: "2023 - 2025",
      degree: "MASTER OF COMPUTER APPLICATION",
      school: "Kalasalingam University",
      cgpa: "7.5",
    },
    {
      year: "2019 - 2022",
      degree: "BACHELOR OF COMPUTER SCIENCE",
      school: "Nehru Arts and Science College",
      cgpa: "8.7",
    },
    {
      year: "2017 - 2019",
      degree: "HIGHER SECONDARY EDUCATION",
      school: "Nachiar Vidhyalayam",
      cgpa: "7.6",
    },
  ];

  const experienceData = [
    {
      year: "2022 - Current",
      role: "FRONTEND DEVELOPER",
      company: "CAPGEMINI - Bengaluru, Karnataka",
      tasks: [
        "Developed responsive, interactive UIs with React.js, JavaScript, HTML5, and CSS.",
        "Collaborated with cross-functional teams for cohesive development.",
        "Refactored code for efficiency, performance optimization, and feature implementation.",
        "Worked with senior developers on debugging and issue resolution.",
        "Maintained documentation for frontend components and best practices.",
      ],
    },
  ];

  return (
    <Container>
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="body1" fontStyle="oblique">
          Get to know
        </Typography>
        <Typography variant="h4" fontStyle="oblique">
          About Me
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Education Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontStyle: "oblique", mb: 2 }}>
            Education
          </Typography>
          <Box sx={{ position: "relative", pl: 4 }}>
            <Box
              sx={{
                position: "absolute",
                top: 20,
                bottom: 0,
                left: "22px",
                width: "2px",
                backgroundColor: "black",
              }}
            />
            {educationData.map((edu, index) => (
              <Box key={index} sx={{ display: "flex", mb: 3 }}>
                <Box sx={{ textAlign: "center", mr: 2, ml: -2.3, mt: 1 }}>
                  <CircleIcon sx={{ fontSize: 20 }} />
                </Box>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    backgroundColor: "#f5f5f5",
                    width: "100%",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      backgroundColor: "#64748b",
                    },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#020617",
                      color: "white",
                      px: 4,
                      py: 0.5,
                      borderRadius: "20px 0 40px 20px",
                      display: "inline-block",
                      mb: 1,
                    }}
                  >
                    {edu.year}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", fontStyle: "oblique", mb: 1 }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography variant="body1">{edu.school}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    CGPA : {edu.cgpa}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Experience Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontStyle: "oblique", mb: 2 }}>
            Experience
          </Typography>
          <Box sx={{ position: "relative", pl: 4 }}>
            <Box
              sx={{
                position: "absolute",
                top: 20,
                bottom: 0,
                left: "22px",
                width: "2px",
                backgroundColor: "black",
              }}
            />
            {experienceData.map((exp, index) => (
              <Box key={index} sx={{ display: "flex", mb: 3 }}>
                <Box sx={{ textAlign: "center", mr: 2, ml: -2.3, mt: 1 }}>
                  <CircleIcon sx={{ fontSize: 20 }} />
                </Box>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    backgroundColor: "#f5f5f5",
                    width: "100%",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      backgroundColor: "#64748b",
                    },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#020617",
                      color: "white",
                      px: 4,
                      py: 0.5,
                      borderRadius: "20px 0 40px 20px",
                      display: "inline-block",
                      mb: 1,
                    }}
                  >
                    {exp.year}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", fontStyle: "oblique", mb: 1 }}
                  >
                    {exp.role}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {exp.company}
                  </Typography>
                  <List>
                    {exp.tasks.map((task, idx) => (
                      <ListItem key={idx} disableGutters>
                        <ListItemIcon>
                          <CircleIcon sx={{ fontSize: 10 }} />
                        </ListItemIcon>
                        <ListItemText primary={task} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;

