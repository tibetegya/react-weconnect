import { createSlice } from '@reduxjs/toolkit'

export const AppShellSlice = createSlice({
  name: 'appShell',
  initialState: { default: true },
  reducers: {
    changeDefault: (state) => {
      state.default = !state.default
    }
  }
})