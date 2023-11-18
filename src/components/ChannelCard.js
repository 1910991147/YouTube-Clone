import { Box, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ChannelDetail from "./ChannelDetail";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = () => (
  <Box sx={{ boxShadow: "none", borderRadius: "20px" }}>
    <Link to={`/channel/${ChannelDetail?.id?.ChannelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <CardMedia
          image={
            ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={ChannelDetail?.snippet?.title}
          sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
        />
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
