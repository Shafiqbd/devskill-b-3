import { SET_CATEGORY, SET_SINGLE_CATEGORY } from "../contants/action-type";

const initialState = {
    categoryList: [],
    category: null
}
export const categoryReducers = (state= initialState, {payload, type}) => {
    switch (type)
    {
        case SET_CATEGORY:
            return {...state, categoryList: payload};
            break;
        case SET_SINGLE_CATEGORY:
            return {...state, category: payload};
            break;
        default:
            return state;
    }
}