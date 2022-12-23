import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Product as ItemProduct } from "../../features/api/product/Product";
import Box from "@mui/material/Box";

export default function Product({ name, image, id, price }: ItemProduct) {
  const navidate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: 345 }}
      onClick={() => {
        navidate(`${id}`);
      }}>
      <CardActionArea>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <CardHeader title={name} />
        </Box>
        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          height="400"
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography>precio ${price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
