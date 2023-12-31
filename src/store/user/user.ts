import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { TLoginSlice } from '../../types/state';
import { login, loginAction, logout } from '../api-actions';

const initialState: TLoginSlice = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  postError: false,
  userDataLoadingStatus: false,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      })
      .addCase(loginAction.pending, (state) => {
        state.userDataLoadingStatus = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
        state.userDataLoadingStatus = false;
        state.postError = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.postError = true;
      });
  }
});
