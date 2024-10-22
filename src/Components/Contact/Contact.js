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
      [name]: value, // Update the field based on the "name" attribute
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
                name= 'email'
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
                name='description'
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
    </Container>
  );
};

export default Contact;
