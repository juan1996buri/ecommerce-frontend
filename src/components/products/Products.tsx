import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Product from "./Product";
import { useGetProductsQuery } from "../../features/api/product/productApi";
import { Product as ItemProduct } from "../../features/api/product/Product";

const Products = () => {
  const {
    data: productsList,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery("");
  if (isLoading) {
    return <h2>cargando..</h2>;
  }
  if (isSuccess) {
    return (
      <div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {productsList?.products?.items.map(
            (product: ItemProduct, index: number) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <Product
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                  stock={product.stock}
                  image={product.image}
                  key={product.id}
                />
              </Grid>
            )
          )}
        </Grid>
      </div>
    );
  }
};

export default Products;
