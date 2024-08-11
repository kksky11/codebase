import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  reportStatus:{},
  activeBureau:"",
  selectedMenu:""
}

export const myAccountSlice = createSlice({
  name: 'myAccountReducer',
  initialState: initialState,
  reducers: {
    setReportStatus: (state, action) => {state.reportStatus = action.payload},
    updateActiveCreditBureau: (state, action) => {state.activeBureau = action.payload},
    setSelectedMenu: (state, action) => {state.selectedMenu = action.payload}
       // setReportStatus: (state, action) => void({...state,...action.payload}),
  }
})


export const { setReportStatus,updateActiveCreditBureau,setSelectedMenu } = myAccountSlice.actions;
export const  selectMyAccountReducer = (state) => state?.myAccountReducer;
export const  selectReportStatus = (state) => state?.myAccountReducer?.reportStatus;
export const  selectActiveBureau = (state) => state?.myAccountReducer?.activeBureau;
export const  selectSelectedMenu = (state) => state?.myAccountReducer?.selectedMenu;
export default myAccountSlice.reducer