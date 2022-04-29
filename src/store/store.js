import { combineReducers, configureStore } from '@reduxjs/toolkit'
import auth from './slices/authSlice';

const rootReducer = combineReducers({
  auth
});

export const store = configureStore({
  reducer: rootReducer
})