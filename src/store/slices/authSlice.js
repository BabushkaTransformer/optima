import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { post } from '../../utils/api';

const initialState = {
  user: null,
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (user, { dispatch }) => {
    try {
      const response = await post('/signIn', user);
      dispatch(setUser(response.data));
    } catch (e) {
      console.log(e);
    }
  }
);

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = auth.actions;

export default auth.reducer;
