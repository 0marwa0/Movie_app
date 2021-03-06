import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api, key, video } from "./config";

export const fetchVideo = createAsyncThunk("movies/fetchVideo", async (id) => {
  const result = await axios
    .get(`${api}movie/${id}/${video}?api_key=${key}`)
    .then((res) => res.data);
  return result;
});
export const VideoSlic = createSlice({
  name: "movie",
  initialState: {
    data: [],
    status: true,
  },
  extraReducers: {
    [fetchVideo.pending](state) {
      state.status = false;
    },
    [fetchVideo.fulfilled](state, action) {
      state.data = action.payload.results;
      state.status = false;
    },
  },
});
export default VideoSlic.reducer;
