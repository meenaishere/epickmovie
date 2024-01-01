import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../../../config/config";

const getUserName = localStorage.getItem("user-info");
const token = JSON.parse(getUserName)?.token;

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/json");
      headers.set("X-API-KEY", "dtmgNfrv6AJDXV3nPEhkaQ");
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Cache-Control", "public, max-age=86000");
      return headers;
    },
  }),
  tagTypes: ["EpicMovies"],
  endpoints: () => ({}),
});

export default apiSlice;
