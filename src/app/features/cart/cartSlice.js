import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: { products: [] },

    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find(product => product.id === action.payload.id );
            if (item) {
                item.quantity += 1;
            }
            else {
                state.products.push({...action.payload, quantity: 1})
            }
        },

        removeFromCart : (state, action) => {
            state.products = state.products.filter(
                product => product.id !== action.payload.id
            );
        },

        clearCart : (state) => {
            state.products = [];
        },

        adjustQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            if (quantity <= 0) {
                state.products = state.products.filter(product => product.id !== id);
            } else {
                const item = state.products.find(product => product.id === id);
                if (item) {
                    item.quantity = quantity;
                }
            }
        }

    },
})

export const { addToCart, removeFromCart, clearCart, adjustQuantity } = cartSlice.actions;
export default cartSlice.reducer;