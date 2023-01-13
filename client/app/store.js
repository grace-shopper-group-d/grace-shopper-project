import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allProductsSlice from '../features/allProducts/allProductsSlice';
import singleProductSlice from '../features/singleproduct/singleProductSlice';
import allUsersSlice from '../features/allUsers/allUsersSlice';
import userSlice from '../features/user/userSlice';
import singleUserSlice from '../features/singleuser/singleUserSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: allProductsSlice,
    product: singleProductSlice,
    users: allUsersSlice,
    user: userSlice,
    singleUser: singleUserSlice
    
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
