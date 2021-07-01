import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderType } from '../components/types';

const initialState:OrderType  = {
    username: '',
    email: '',
    address: '',
    cartItems: [],
    total: 0,
    id: '',
    createdAt: '',
    updatedAt: ''
}

const order = createSlice({
    name: 'order',
    initialState,
    reducers: {
        placeOrder(state, { payload }: PayloadAction<OrderType>) {
            return state = payload
        }
    }
})

export const { placeOrder } = order.actions;
export default order.reducer;