import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = { 
  faqQues:[]
}

export const faqsSlice = createSlice({
  name: 'faqsReducer',
  initialState: initialState,
  reducers: {
        setFaqQuesName: (state, action) => void(state.faqQues.push(action.payload)),
        // Special reducer for hydrating the state
        extraReducers: {
          [HYDRATE]: (state, action) => {
            return {
              ...state,
              ...action.payload.faqsReducer,
            };
          },
        },
  }
})


export const { setFaqQuesName } = faqsSlice.actions;
export const  selectFaqsReducer = (state) => state?.faqsReducer?.faqQues;
export default faqsSlice.reducer