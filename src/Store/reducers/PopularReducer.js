import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { api, key, topRated, lang, page } from "./config";
const popularMoviesUrl = `${api}${topRated}?api_key=${key}&language=${lang}&page=${page}`;
export const fetchPopularMovies = createAsyncThunk(
  "popular/GetPopularMovie",
  async () => {
    const result = await axios.get(popularMoviesUrl).then((res) => res.data);
    return result;
  }
);
export const PopularMovieSlic = createSlice({
  name: "popular",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {
    getMovie(state, action) {
      console.log(action, state, "action");
    },
  },
  extraReducers: {
    [fetchPopularMovies.pending](state) {
      state.status = "loading";
    },
    [fetchPopularMovies.fulfilled](state, action) {
      state.data = action.payload.results[1];
      state.status = "idle";
    },
  },
});
export const { getMovie } = PopularMovieSlic.actions;
export default PopularMovieSlic.reducer;
