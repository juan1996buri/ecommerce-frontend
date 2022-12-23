import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import { useGetProductQuery } from "../../features/api/product/productApi";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const productId = useLocation().pathname.split("/")[1];
  const {
    data: product,
    isSuccess,
    isLoading,
    error,
    isError,
  } = useGetProductQuery(Number(productId));
  if (isLoading) {
    return <h2>...cargando...</h2>;
  }
  if (isSuccess) {
    return (
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ paddingTop: "2rem" }}>
        <Grid item xs={12} sm={6}>
          <CardActionArea>
            <CardMedia
              sx={{ objectFit: "contain" }}
              component="img"
              height="300"
              image={product?.image}
              alt="Paella dish"
            />
          </CardActionArea>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}>
            <Typography>{product?.name}</Typography>
          </Box>

          <Typography>{product?.description}</Typography>
          <Button variant="contained">Contained</Button>
        </Grid>
      </Grid>
    );
  }
};

export default ProductDetails;
