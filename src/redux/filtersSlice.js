import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFilterContacts(state, action) {
      return (state.filter = action.payload);
    },
  },
});

export const { setFilterContacts } = filtersSlice.actions;
export const filterContacts = filtersSlice.reducer;
