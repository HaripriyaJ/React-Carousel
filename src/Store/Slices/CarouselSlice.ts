import { createSlice } from '@reduxjs/toolkit'
import { carouselData } from '../../Carousel/Mock/Carousel';

export const carouselSlice = createSlice({
    name: 'carousel',
    initialState: {
        data: carouselData,
    },
    reducers: {
        showNext: () => {
            console.log("Next");
        },
        showPrevious: () => {
            console.log("Previous");
        },
        sliderNavigate: () => {
            console.log("Slider");
        }
    },
})

// Action creators are generated for each case reducer function
export const { showNext, showPrevious, sliderNavigate } = carouselSlice.actions;

export default carouselSlice.reducer;
