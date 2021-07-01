import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, ProductItem } from '../components/types';

const initialState: CartState = {
    cartItems: []
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, {payload}: PayloadAction<ProductItem>) {
            return {
                    cartItems: [...state.cartItems, payload]
                }
            },

            removeFromCart(state, { payload }: PayloadAction<string>) {
                state.cartItems = state.cartItems.filter((item) => item.id !== payload)
            }
        },
});

export const { addToCart,
    removeFromCart 
    } = cart.actions;
export default cart.reducer;