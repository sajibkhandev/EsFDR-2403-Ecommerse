import { createSlice } from '@reduxjs/toolkit'

export const addtocartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : null,
  },
  reducers: {
    addtocart: (state,action) => {

        
       let alldata=state.cartItem.find(item=>item.title===action.payload.title)

       if(alldata){
        alldata.quantity+=1
       }else{
        state.cartItem.push({...action.payload,quantity:1})

       }

       localStorage.setItem("cart",JSON.stringify(state.cartItem))
    
    },
    increment:(state,action)=>{
     state.cartItem.map(item=>{
      if(item.title==action.payload.title){
        item.quantity+=1
      }
     })

      localStorage.setItem("cart",JSON.stringify(state.cartItem))
      
    },
    decrement:(state,action)=>{
     state.cartItem.map(item=>{
      if(item.title==action.payload.title){
       if(item.quantity>1){
         item.quantity-=1
       }
      }
     })
      localStorage.setItem("cart",JSON.stringify(state.cartItem))
    },
    removeitem:(state,action)=>{
     state.cartItem.map((item,index)=>{
      if(item.title==action.payload.title){
        state.cartItem.splice(index,1)
       
      }
     })
      localStorage.setItem("cart",JSON.stringify(state.cartItem))
    },
  },
})

export const { addtocart,increment,decrement,removeitem } = addtocartSlice.actions

export default addtocartSlice.reducer