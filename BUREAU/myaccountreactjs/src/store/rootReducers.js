import { combineReducers } from 'redux';
import { faqsSlice } from './slices/faqsSlice';
import { myAccountSlice } from './slices/myAccountSlice';

const rootReducers = combineReducers({
    [faqsSlice.name]: faqsSlice.reducer,
    [myAccountSlice.name]: myAccountSlice.reducer,
});

export default rootReducers;
