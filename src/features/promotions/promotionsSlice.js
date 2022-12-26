import { PROMOTIONS } from '../../app/shared/PROMOTIONS';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    promotionsArray: PROMOTIONS
};

const promotionsSlice = createSlice({
    name: 'promtions',
    initialState
});

export const promotionsReducer = promotionsSlice.reducer;



export const SelectFeaturedPromotion = (state) => {
    return state.promotions.promotionsArray.find((promotion) => promotion.featured);
};

