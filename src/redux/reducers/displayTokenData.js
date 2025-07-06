import { createSlice } from "@reduxjs/toolkit";

const displayTokenData = createSlice({
  name: "displayTokenData",
  initialState: { selectedToken: null },
  reducers: {
    setSelectedToken: (state, action) => {
      state.selectedToken = action.payload;
    },
    clearSelectedToken: (state) => {
      state.selectedToken = null;
    },
  },
});

export const { setSelectedToken, clearSelectedToken } =
  displayTokenData.actions;
export default displayTokenData.reducer;
