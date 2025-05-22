import { createSlice } from '@reduxjs/toolkit'

export const breadcrumb = createSlice({
  name: 'bread',
  initialState: {
    daybefore:null,
    prvevalue:null,
    currentvalue:null
  },
  reducers: {
    activebutton: (state,action) => {
    state.daybefore=state.prvevalue
    state.prvevalue=state.currentvalue
    state.currentvalue=action.payload
    
    
      
    },
  },
})

export const { activebutton } = breadcrumb.actions

export default breadcrumb.reducer