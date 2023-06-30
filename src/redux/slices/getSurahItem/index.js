import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSurahItem = createAsyncThunk('item/fetchItemStatus', async (params) => {
  const id = params;
  const { data } = await axios.get(
    `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/ru/${id}.json`,
  );
  return data;
});

const initialState = {
  items: [],
  status: 'loading',
};

export const getSurah = createSlice({
  name: 'Item',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchSurahItem.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchSurahItem.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchSurahItem.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = getSurah.actions;

export default getSurah.reducer;
