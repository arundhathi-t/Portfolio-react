import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button, CardMedia, Paper, TextField, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Container, Grid } from "@mui/system";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "Arundhathi",
    email: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_5ecrfnd";
    const templateID = "template_d0n31h7";
    const userID = "r9H2dxVfxfJVWm2jj";

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        setSuccessMessage("Message sent successfully!");
        setFormData({
          from_name: "",
          to_name: "Arundhathi",
          email: "",
          description: "",
        });
        setIsSubmitting(false);
      },
      (err) => {
        console.error("Failed to send message. Error:", err);
        setSuccessMessage("Failed to send message. Try again later.");
        setIsSubmitting(false);
      }
    );
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

      <Grid
        container
        spacing={4}
        sx={{
          alignItems: "center",
        }}
      >
        {/* Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            src="/womencode.jpg"
            alt="Profile"
            sx={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "8px",
              border: "6px solid white",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Grid>

        {/* Form Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            sx={{
              padding: "20px",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              <TextField
                label="Your Name"
                fullWidth
                required
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
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
                multiline
                rows={4}
                sx={{ backgroundColor: "#e0e0e0" }}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={!isFormValid || isSubmitting}
                sx={{
                  backgroundColor: "#e0e0e0",
                  color: "#000",
                  marginTop: "10px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            {successMessage && (
              <Typography
                sx={{ color: "green", marginTop: "10px", textAlign: "center" }}
              >
                {successMessage}
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
      <Box
        sx={{
          backgroundColor: "#64748b",
          padding: "2rem 0",
          marginTop: "2rem",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  color: "#fff",
                  ml: { xs: 0, sm: 10 },
                }}
              >
                Let's Get Started
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  mt: -2,
                  ml: { xs: 0, sm: 20 },
                }}
              >
                Connect With Me!
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  marginBottom: "10px",
                }}
              >
                <PhoneIcon sx={{ marginRight: "10px", color: "#fff" }} />
                <Typography
                  variant="body1"
                  fontWeight={"bold"}
                  sx={{ color: "#fff" }}
                >
                  9360661701
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  marginBottom: "10px",
                }}
              >
                <EmailIcon sx={{ marginRight: "10px", color: "#fff" }} />
                <Typography
                  variant="body1"
                  fontWeight={"bold"}
                  sx={{ color: "#fff" }}
                >
                  arundhathtiofficial@gmail.com
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <LocationOnIcon sx={{ marginRight: "10px", color: "#fff" }} />
                <Typography
                  variant="body1"
                  fontWeight={"bold"}
                  sx={{ color: "#fff" }}
                >
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
