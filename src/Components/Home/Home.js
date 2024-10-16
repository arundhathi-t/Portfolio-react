import { Button, CardMedia, Stack, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import DownloadIcon from "@mui/icons-material/Download";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Box>
        <Grid
          container
          spacing={2}
          alignItems="center"
          style={{ padding: "20px" }}
        >
          <Grid xs={6} md={9}>
            <Typography
              variant="h1"
              sx={{
                marginTop: "40px",
                marginLeft: "700px",
                fontWeight: 500,
                fontSize: "50px",
                fontStyle: "oblique",
              }}
            >
              Arundhathi T
            </Typography>
            <Typography
              variant="h3"
              sx={{
                marginLeft: "750px",
                fontWeight: 550,
                fontSize: "16px",
                fontStyle: "oblique",
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
                paddingRight: "100px",
                maxWidth: 600,
                padding: 10,
                marginLeft: 68,
              }}
            >
              "React.js Frontend Developer with 2 years of experience crafting
              sleek, dynamic interfaces. Expert in React.js, I transform ideas
              into interactive, high-performance web applications, driving user
              engagement with clean, scalable code."
            </Typography>

            <Stack direction="row" spacing={2} marginLeft="680px">
              <Button
                variant="contained"
                //endIcon={<DownloadIcon />}
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
                //endIcon={<ContactMailIcon />}
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
            <Grid item xs={12} md={6}>
              <CardMedia
                className="image"
                component="img"
                src="/myimage.jpg"
                alt="Profile"
                sx={{
                  width: "100%",
                  maxWidth: "250px",
                  borderRadius: "8px",
                  border: "6px solid white",
                  boxShadow: "5px 5px 0px 0px #000",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "63%",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
