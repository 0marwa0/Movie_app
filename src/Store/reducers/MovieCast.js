import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api, key, credits, lang } from "./config";

export const fetchMovieCast = createAsyncThunk(
  "movies/fetchCast",
  async (id) => {
    const movieCastUrl = `${api}movie/${id}/${credits}?api_key=${key}&language=${lang}`;
    const result = await axios.get(movieCastUrl).then((res) => res.data);

    return result;
  }
);
export const MovieCastSlic = createSlice({
  name: "movies",
  initialState: {
    data: [],
    status: "idle",
  },

  extraReducers: {
    [fetchMovieCast.pending](state) {
      state.status = "loading";
    },
    [fetchMovieCast.fulfilled](state, action) {
      state.data = action.payload.cast;
      state.status = "idle";
    },
  },
});
export default MovieCastSlic.reducer;
