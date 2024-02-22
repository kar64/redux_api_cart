import{configureStore}from'@reduxjs/toolkit';
import{cartReducer}from'./features/cart/cartSlice';
import{modalReducer}from'./features/madal/modalSlice';
import{cartApi}from'./api/cartApi';

export const store=configureStore({
    reducer:{
        cart:cartReducer,
        modal:modalReducer,
        [cartApi.reducerPath]:cartApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cartApi.middleware)

})
