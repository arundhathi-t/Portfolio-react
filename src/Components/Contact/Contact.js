import { Button, CardMedia, Paper, TextField, Typography } from "@mui/material";
import { Box, Container, Grid } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      description: "",
    });
  };
  return (
    <Container>
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="body1" fontStyle={"oblique"}>
          Get In Touch
        </Typography>
        <Typography variant="h4" fontStyle={"oblique"}>
          Contact Me
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <CardMedia
            className="image"
            component="img"
            src="/womencode.jpg"
            alt="Profile"
            sx={{
              width: "100%",
              maxWidth: "70%",
              borderRadius: "8px",
              border: "6px solid white",
              marginLeft: "auto",
              marginRight: "73%",
              marginTop: "2px",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper
            className="form"
            sx={{
              padding: "10px",
              width: "50%",
            }}
          >
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              <TextField
                label="Your Name"
                fullWidth
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                color="black"
                sx={{ backgroundColor: "#e0e0e0" }}
              />
              <TextField
                label="Your Email"
                fullWidth
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                type="email"
                variant="outlined"
                color="black"
                sx={{ backgroundColor: "#e0e0e0" }}
              />
              <TextField
                label="Your Message"
                fullWidth
                required
                name="description"
                value={formData.description}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                color="black"
                multiline
                rows={4}
                sx={{ backgroundColor: "#e0e0e0" }}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#e0e0e0",
                  color: "#000",
                  marginTop: "10px",
                  ml: "220px",
                }}
              >
                send message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Box
        sx={{
          backgroundColor: "#64748b",
          padding: "1rem 0",
          // marginTop: "2rem",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" gutterBottom sx={{ ml: 10, mr: 20 }}>
                Let's Get Started
              </Typography>
              <Typography variant="h5" sx={{ ml: 20, mr: 25, mt: -2 }}>
                Connect With Me!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <PhoneIcon sx={{ marginRight: "10px", color: "black" }} />
                <Typography variant="body1" fontWeight={"bold"}>
                  9360661701
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <EmailIcon sx={{ marginRight: "10px", color: "black" }} />
                <Typography variant="body1" fontWeight={"bold"}>
                  arundhathtiofficial@gmail.com
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <LocationOnIcon sx={{ marginRight: "10px", color: "black" }} />
                <Typography variant="body1" fontWeight={"bold"}>
                  Bengaluru, Karnataka - 560037
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

export default Contact;
