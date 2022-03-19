import { CLEAR_ERROR, SET_ERROR, TOGGLE_LOADING } from "../actions/type";

const initialState = {

    error: '',
    loading: false,
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_ERROR:
            return { ...state, error: action.payload.message };
        case CLEAR_ERROR:
            return { ...state, error: "" };
        case TOGGLE_LOADING:
            return { ...state, loading: !state.loading };
        default:
            return state;
    }
};

export default uiReducer;