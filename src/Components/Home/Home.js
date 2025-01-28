import { Button, CardMedia, Stack, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";

const Home = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        alignItems: "center", 
        justifyContent: "center", 
        padding: "20px",
      }}
    >
      <Grid
        container
        spacing={12} 
        alignItems="center"
        justifyContent="center"
        maxWidth="lg"
      >
        {/* image Section */}
        <Grid item xs={12} md={5}>
          <CardMedia
            className="image"
            component="img"
            src="/aru.jpg"
            alt="Profile"
            sx={{
              mb:"50px",
              width: { xs: "80%", sm: "70%", md: "100%" },
              maxWidth: "300px",
              borderRadius: "8px",
              border: "6px solid white",
              boxShadow: "5px 5px 0px 0px #000",
              margin: "auto", 
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} md={5}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "30px", sm: "40px", md: "50px" },
              fontStyle: "oblique",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Arundhathi T
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 550,
              fontSize: { xs: "14px", md: "16px" },
              fontStyle: "oblique",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            I'm a Frontend Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              fontFamily: "Inter",
              fontStyle: "italic",
              maxWidth: 600,
              margin: "20px auto",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            "React.js Frontend Developer with 2 years of experience crafting
            sleek, dynamic interfaces. Expert in React.js, I transform ideas
            into interactive, high-performance web applications, driving user
            engagement with clean, scalable code."
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#020617",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.08)",
                  backgroundColor: "#64748b",
                },
              }}
            >
              <a
                href="/Arundhathi Profile.pdf"
                download="Arundhathi T Profile.pdf"
                style={{ color: "white", textDecoration: "none" }}
              >
                Download CV
              </a>
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#020617",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.08)",
                  backgroundColor: "#64748b",
                },
              }}
            >
              <a
                href="/contact"
                style={{ color: "white", textDecoration: "none" }}
              >
                Contact Me
              </a>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
