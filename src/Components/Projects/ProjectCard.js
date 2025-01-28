import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

const ProjectCard = ({ image, title, description, githubLink }) => {
  return (
    <Card
      sx={{
        maxWidth: 360,
        height: 350,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <CardMedia component="img" height="160" src={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          href={githubLink}
          target="_blank"
          variant="outlined"
          sx={{
            ml: 15,
            color: "white",
            backgroundColor: "#020617",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.08)",
              backgroundColor: "#64748b",
              color: "white",
            },
          }}
        >
          Github
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
