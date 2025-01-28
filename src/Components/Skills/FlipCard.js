import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import "./Skills.scss";
import CircleIcon from "@mui/icons-material/Circle";

const FlipCard = ({ title, data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  return (
    <Box
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box className="flip-card-inner">
        {/* Front Side */}
        <Card
          className="flip-card-front"
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: "50px 8px 8px 8px",
            width: { xs: "100%", sm: "90%", md: "100%" },
            height: "100%",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              textAlign="center"
              sx={{
                fontWeight: "bold",
                mt: { xs: 8, sm: 10, md: 12 },
                fontSize: { xs: "18px", sm: "24px", md: "30px" },
              }}
            >
              {title}
            </Typography>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card
          className="flip-card-back"
          sx={{
            backgroundColor: "#64748b",
            borderRadius: "50px 8px 8px 8px",
          }}
        >
          <CardContent>
            <List>
              {data.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CircleIcon sx={{ fontSize: 10 }} />
                  </ListItemIcon>
                  <Box sx={{ mt: 1.5 }}>
                    <Typography
                      variant="body1"
                      sx={{ fontStyle: "oblique", fontSize: "20px" }}
                    >
                      {item.skill}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      {item.level}
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default FlipCard;
