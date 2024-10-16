import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import CircleIcon from "@mui/icons-material/Circle";
import "./Skills.scss";

const Skills = () => {
  const programmingLang = [
    {
      skill: "JavaScript(ES6)",
      level: "Experienced",
    },
    {
      skill: "Java",
      level: "Intermediate",
    },
  ];
  const webTechnologies = [
    {
      skill: "HTML5",
      level: "Experienced",
    },
    {
      skill: "CSS3",
      level: "Experienced",
    },
    {
      skill: "Bootstrap",
      level: "Experienced",
    },
    {
      skill: "Material UI",
      level: "Intermediate",
    },
  ];
  const frameworks = [
    {
      skill: "ReactJs",
      level: "Experinced",
    },
    {
      skill: "Spring Boot",
      level: "Intermediate",
    },
  ];
  const stateManagemnt = [
    {
      skill: "ContextAPI",
      level: "Intermediate",
    },
    {
      skill: "React-Redux",
      level: "Intermediate",
    },
  ];
  const tools = [
    {
      skill: "Visual Studio Code",
      level: "Experienced",
    },
    {
      skill: "Eclipse",
      level: "Intermediate",
    },
    {
      skill: "Git",
      level: "Experienced",
    },
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
        {/* Programming Languages */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className="card1"
            sx={{
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
              height: 350,
              display: "flex",
              flexDirection: "row",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.10)",
                backgroundColor: "#64748b",
              },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  fontStyle: "oblique",
                  fontSize: "20px",
                  mt: 2,
                  mb: 1,
                  px: 4,
                  py: 0.5,
                  bgcolor: "#020617",
                  color: "white",
                  borderRadius: "20px 0 40px 20px",
                  display: "inline-block",
                }}
              >
                Programming Languages
              </Box>
              <List>
                {programmingLang.map((pl, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CircleIcon sx={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <Box>
                      <Typography variant="body1" sx={{ fontStyle: "oblique" }}>
                        {pl.skill}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        {pl.level}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Web Technologies */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
              height: 350,
              display: "flex",
              flexDirection: "row",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.10)",
                backgroundColor: "#64748b",
              },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  fontStyle: "oblique",
                  fontSize: "20px",
                  mt: 2,
                  mb: 1,
                  px: 4,
                  py: 0.5,
                  bgcolor: "#020617",
                  color: "white",
                  borderRadius: "20px 0 40px 20px",
                  display: "inline-block",
                }}
              >
                Web Technologies
              </Box>
              <List>
                {webTechnologies.map((wt, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CircleIcon sx={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <Box>
                      <Typography variant="body1" sx={{ fontStyle: "oblique" }}>
                        {wt.skill}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        {wt.level}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Frameworks */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
              height: 350,
              display: "flex",
              flexDirection: "row",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.10)",
                backgroundColor: "#64748b",
              },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  fontStyle: "oblique",
                  fontSize: "20px",
                  mt: 2,
                  mb: 1,
                  px: 4,
                  py: 0.5,
                  bgcolor: "#020617",
                  color: "white",
                  borderRadius: "20px 0 40px 20px",
                  display: "inline-block",
                }}
              >
                Frameworks
              </Box>
              <List>
                {frameworks.map((fw, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CircleIcon sx={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <Box>
                      <Typography variant="body1" sx={{ fontStyle: "oblique" }}>
                        {fw.skill}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        {fw.level}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* State Management */}
        <Grid item xs={12} sm={6} md={4} sx={{ ml: 25, mb: 2 }}>
          <Card
            sx={{
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
              height: 350,
              display: "flex",
              flexDirection: "row",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.10)",
                backgroundColor: "#64748b",
              },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  fontStyle: "oblique",
                  fontSize: "20px",
                  mt: 2,
                  mb: 1,
                  px: 4,
                  py: 0.5,
                  bgcolor: "#020617",
                  color: "white",
                  borderRadius: "20px 0 40px 20px",
                  display: "inline-block",
                }}
              >
                State Management
              </Box>
              <List>
                {stateManagemnt.map((sm, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CircleIcon sx={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <Box>
                      <Typography variant="body1" sx={{ fontStyle: "oblique" }}>
                        {sm.skill}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        {sm.level}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Tools */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
              height: 350,
              display: "flex",
              flexDirection: "row",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.10)",
                backgroundColor: "#64748b",
              },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  fontStyle: "oblique",
                  fontSize: "20px",
                  ml: 6,
                  mt: 2,
                  mb: 1,
                  px: 4,
                  py: 0.5,
                  bgcolor: "#020617",
                  color: "white",
                  borderRadius: "20px 0 40px 20px",
                  display: "inline-block",
                }}
              >
                Tools
              </Box>
              <List>
                {tools.map((tool, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CircleIcon sx={{ fontSize: 10 }} />
                    </ListItemIcon>
                    <Box>
                      <Typography variant="body1" sx={{ fontStyle: "oblique" }}>
                        {tool.skill}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        {tool.level}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Skills;
