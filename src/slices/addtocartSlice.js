import { createSlice } from '@reduxjs/toolkit'

export const addtocartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addtocart: (state,action) => {

        
       let alldata=state.cartItem.find(item=>item.title===action.payload.title)

       if(alldata){
        alldata.quantity+=1
       }else{
        state.cartItem.push({...action.payload,quantity:1})

       }
    
    },
    increment:(state,action)=>{
     state.cartItem.map(item=>{
      if(item.title==action.payload.title){
        item.quantity+=1
      }
     })
      
    },
    decrement:(state,action)=>{

     state.cartItem.map(item=>{
      if(item.title==action.payload.title){
       if(item.quantity>1){
         item.quantity-=1
       }
      }
     })
      
      
    }
  },
})

export const { addtocart,increment,decrement } = addtocartSlice.actions

export default addtocartSlice.reducer