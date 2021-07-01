import { combineReducers } from '@reduxjs/toolkit'
import cartSlice from './cartSlice';
import  basketSlice  from './productSlice';
import orderSlice from './orderSlice';

const rootReducer = combineReducers({
    products: basketSlice,
    cart: cartSlice,
    order: orderSlice,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;