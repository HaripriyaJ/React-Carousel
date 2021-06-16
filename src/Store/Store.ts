import { configureStore } from '@reduxjs/toolkit'
import carouselSlice from './Slices/CarouselSlice';

const store = configureStore({
    reducer: {
        carousel: carouselSlice
    }
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
