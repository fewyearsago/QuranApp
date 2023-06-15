import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSurahData = createAsyncThunk(
  'surah/fetchSurahStatus',
  async () => {
    const { data } = await axios.get(
      `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/ru/index.json`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  status: '',
};

export const SurahSlice = createSlice({
  name: 'Surah',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchSurahData.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchSurahData.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchSurahData.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { increment } = SurahSlice.actions;

export default SurahSlice.reducer;
