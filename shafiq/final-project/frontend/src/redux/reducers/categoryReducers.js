import { ADD_CATEGORY, CHANGE_CATEGORY_INPUT, EDIT_CATEGORY, REMOVE_CATEGORY, SET_CATEGORY, SET_CATEGORY_DETAILS, SET_SINGLE_CATEGORY } from "../contants/action-type";

const initialState = {
    categoryList: [],
    category: null,
    categoryModel: {
        name: "",
        description: ""
    }
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
        case SET_CATEGORY_DETAILS:
            return {...state, categoryModel: payload};
            break;
        case ADD_CATEGORY:
            return {
                ...state,
                categoryModel: {
                    name: "",
                    description: ""
                }
            };
        case EDIT_CATEGORY:
            return {
                ...state,
                categoryModel: {
                    name: "",
                    description: ""
                }
            };
            break;
        case REMOVE_CATEGORY:
                return {
                    ...state,
                    categoryModel: {
                        name: "",
                        description: ""
                    }
                };
                break;
        case CHANGE_CATEGORY_INPUT:
            let categoryModel = { ...state.categoryModel };
            categoryModel[payload.name] = payload.value;

            return { ...state, categoryModel };
            break;
        default:
            return state;
    }
}