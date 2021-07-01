import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';

const basketSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    added: true
                }
            })
        },
    },
});

export const { add } = basketSlice.actions;
export default basketSlice.reducer;