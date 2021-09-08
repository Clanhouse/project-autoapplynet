import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppDispatch, IJSON, RootState } from "./App.types";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8001/" }),
  endpoints: (build) => ({
    getData: build.mutation<IJSON[], void>({
      query: () => "/data",
    }),
  }),
});

export const { useGetDataMutation } = dataApi;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
