import { configureStore } from '@reduxjs/toolkit';
import surah from './slices/SurahSlice/index';

export const store = configureStore({
  reducer: { surah },
});
