import { configureStore } from '@reduxjs/toolkit'
import counterSlice from  './slices/counterSlice'
import  breadcrumb  from './slices/breadcrumb'
import  categorySlice  from './slices/categorySlice'

export default configureStore({
  reducer: {
    counter:counterSlice,
    active:breadcrumb,
    category:categorySlice,
  },
})