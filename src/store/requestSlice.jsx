import { createSlice } from '@reduxjs/toolkit';

const requestSlice = createSlice({
  name: 'requests',
  initialState: {
    list: [],
    filter: 'all',
    selectedRequest: null,
  },
  reducers: {
    addRequest: (state, action) => {
      state.list.push(action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSelectedRequest: (state, action) => {
      state.selectedRequest = action.payload;
    },
  },
});

export const { addRequest, setFilter, setSelectedRequest } = requestSlice.actions;
export default requestSlice.reducer;
