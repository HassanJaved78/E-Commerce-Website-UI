import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: { products: [] },

    reducers: {
        addToWishlist: (state, action) => {
            const item = state.products.find(product => product.id === action.payload.id );
            if(!item) {
                state.products.push(action.payload);
            }
        },

        removeFromWishlist: (state, action) => {
            const item = state.products.find(product => product.id === action.payload.id );
            if(item) {
                state.products = state.products.filter(product => product.id !== action.payload.id );
            }
        }
    }
}) 

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;