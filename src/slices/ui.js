import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: ''
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload.message;
        },

        clearError: (state) => {
            state.error = '';
        },

        toogleLoader: (state) => {
            state.loading = !state.loading;
        }
    }
});

export const { setError, clearError, toogleLoader } = uiSlice.actions;
export default uiSlice.reducer;
