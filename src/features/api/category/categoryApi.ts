import { apiSlice } from "../api";
import { Category } from "./Category";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/category`,
    }),
    potCategory: builder.mutation({}),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
