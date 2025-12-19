import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/products/productsApi";
import CartReducer from "./features/cart/cartSlice";
import WishlistSlice from "./features/wishlist/wishlistSlice";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: CartReducer,
        wishlist: WishlistSlice
    },

    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(productsApi.middleware)
})