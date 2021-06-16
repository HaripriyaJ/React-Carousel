import { createSlice } from '@reduxjs/toolkit'
import { ISlide } from '../../Carousel/Interfaces/Slide';
import { carouselData } from '../../Carousel/Mock/Carousel';

const findSelectedSlide = (slides: ISlide[]):number => {
    return slides.indexOf(slides.find(slide => slide?.selected === true) || slides[0]);
}

const removeSelection = (slides: ISlide[], index:number): ISlide[] => {
    delete slides[index].selected;
    return slides;
}

const updateSelection = (slides:ISlide[], index:number): ISlide[] => {
    slides[index] = {...slides[index], selected: true};
    return slides;
}

const updateCarouselData = (slides:ISlide[], action:{type:string, payload:any} ,index:number): {data:ISlide[], selectedSlide:number} => {
    let result:{data:ISlide[], selectedSlide:number} = {data:slides, selectedSlide: index};
    result.data = removeSelection(slides,  index);
    switch(action.type) {
        case "carousel/sliderNavigate":
            result.selectedSlide = action.payload;
            break;
        case "carousel/showPrevious":
            result.selectedSlide - 1 <= 0 ? (result.selectedSlide = result.data.length - 1) : (result.selectedSlide -= 1);
            break;
        case "carousel/showNext":
            result.selectedSlide + 1 >= result.data.length ? (result.selectedSlide = 0) : (result.selectedSlide += 1);
            break;
        default: break;
    }
    result.data = updateSelection(slides,  result.selectedSlide);
    return result;
}

export const carouselSlice = createSlice({
    name: 'carousel',
    initialState: {
        data: carouselData,
        selectedSlide: findSelectedSlide(carouselData)
    },
    reducers: {
        showNext: (state, action) => {
            ({data:state.data, selectedSlide: state.selectedSlide} = updateCarouselData(state.data, action, state.selectedSlide));
        },
        showPrevious: (state, action) => {
            ({data:state.data, selectedSlide: state.selectedSlide} = updateCarouselData(state.data, action, state.selectedSlide));
        },
        sliderNavigate: (state, action) => {
            ({data:state.data, selectedSlide: state.selectedSlide} = updateCarouselData(state.data, action, state.selectedSlide));
        }
    },
})

// Action creators are generated for each case reducer function
export const { showNext, showPrevious, sliderNavigate } = carouselSlice.actions;

export default carouselSlice.reducer;
