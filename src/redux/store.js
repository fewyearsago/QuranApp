import { configureStore } from '@reduxjs/toolkit';
import getSurah from './slices/getSurahItem/index.js';
import surah from './slices/SurahSlice/index';

export const store = configureStore({
  reducer: { surah, getSurah },
});
