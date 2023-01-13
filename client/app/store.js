import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allProductsSlice from '../features/allProducts/allProductsSlice';
import singleProductSlice from '../features/singleproduct/singleProductSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: allProductsSlice,
    product: singleProductSlice
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
