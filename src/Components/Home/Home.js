import { Button, CardMedia, Stack, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 6 }, 
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 8 }} 
        alignItems="center"
        justifyContent="center"
        maxWidth="lg"
      >
        {/* Image Section */}
        <Grid item xs={12} sm={6} md={5} display="flex" justifyContent="center">
          <CardMedia
            component="img"
            src="/aru.jpg"
            alt="Profile"
            sx={{
              width: { xs: "90%", sm: "80%", md: "100%" },
              maxWidth: 320,
              mt:4,
              borderRadius: "8px",
              border: "6px solid white",
              boxShadow: "5px 5px 0px 0px #000",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} sm={6} md={5}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "28px", sm: "36px", md: "44px" },
              fontStyle: "oblique",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Arundhathi T
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 550,
              fontSize: { xs: "16px", md: "18px" },
              fontStyle: "oblique",
              textAlign: { xs: "center", sm: "left" },
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
              mt: 2,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            "React.js Frontend Developer with 2 years of experience crafting sleek, dynamic interfaces. Expert in React.js, I transform ideas into interactive, high-performance web applications, driving user engagement with clean, scalable code."
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              justifyContent: { xs: "center", sm: "flex-start" },
              alignItems: "center",
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#020617",
                px: 3, py: 1.5, 
                fontSize: "14px",
                "&:hover": {
                  transform: "scale(1.08)",
                  backgroundColor: "#64748b",
                },
              }}
            >
              <a
                href="/Arundhathi Profile.pdf"
                download="Arundhathi T Profile.pdf"
                style={{ color: "white", textDecoration: "none", display: "block", width: "100%" }}
              >
                Download CV
              </a>
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#020617",
                px: 3, py: 1.5,
                fontSize: "14px",
                "&:hover": {
                  transform: "scale(1.08)",
                  backgroundColor: "#64748b",
                },
              }}
            >
              <a
                href="/contact"
                style={{ color: "white", textDecoration: "none", display: "block", width: "100%" }}
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
