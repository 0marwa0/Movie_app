import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api, key, topRated, lang, page } from "./config";

const topRatedMoviesUrl = `${api}${topRated}?api_key=${key}&language=${lang}&page=${page}`;

export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopopular",
  async () => {
    const result = await axios.get(topRatedMoviesUrl).then((res) => res.data);
    console.log(result, "top in reducer fetch");
    return result;
  }
);

export const TopRatedSlic = createSlice({
  name: "movie",
  initialState: {
    data: [],
    status: "idle",
  },

  extraReducers: {
    [fetchTopRatedMovies.pending](state) {
      state.status = "loading";
    },
    [fetchTopRatedMovies.fulfilled](state, action) {
      state.data = action.payload.results;
      state.status = "idle";
    },
  },
});

export default TopRatedSlic.reducer;
