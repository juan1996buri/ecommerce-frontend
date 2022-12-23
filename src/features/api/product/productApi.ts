import { apiSlice } from "../api";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category: string) => {
        let url = "";
        if (!category.trim()) url = `/product?category=comida`;
        return url;
      },
    }),
    getProduct: builder.query({
      query: (id: number) => `/product/${id}`,
      transformResponse: (response: any) => {
        return response.product;
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = categoryApi;
