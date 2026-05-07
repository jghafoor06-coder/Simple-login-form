import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginAPI } from '../../api/api';

const initialState = {
  userData: null,
  isLoading: false,
  isError: false,
};

export const Login = createAsyncThunk('login', async (params, thunkApi) => {
  try {
    const response = await LoginAPI(params);
    return response;
  } catch (error) {
    console.warn(error);
    return thunkApi.rejectWithValue(error);
  }
});

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(Login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(Login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    });
    builder.addCase(Login.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
