import { ADD_PRODUCT, CHANGE_PRODUCT_INPUT, EDIT_PRODUCT, REMOVE_PRODUCT_MODEL, SET_DETAILS_PRODUCTS, SET_PRODUCTS, SET_PRODUCT_MODEL } from "../contants/action-type";

const initialState = {
    productList: [],
    details:{},
    productModel: {
        _id: "",
        title: "",
        price: 0,
        description: "",
        image: "",
        stock: 0,
        category: {
            _id: "",
        },
    }
}
export const productReducers = (state= initialState, {payload, type}) => {
    switch (type)
    {
        case SET_PRODUCTS:
            return {...state, productList: payload};
            break;
        case SET_DETAILS_PRODUCTS:
            return {...state, details: payload};
            break;
        case SET_PRODUCT_MODEL:
            return {...state, productModel: payload};
            break;
        case ADD_PRODUCT:
            return {
                ...state, 
                productModel: {
                    _id: "",
                    title: "",
                    price: 0,
                    description: "",
                    image: "",
                    stock: 0,
                    category: {
                        _id: "",
                    },
                }
            };
            break;
        case EDIT_PRODUCT:
            return {
                ...state, 
                productModel: {
                    _id: "",
                    title: "",
                    price: 0,
                    description: "",
                    image: "",
                    stock: 0,
                    category: {
                        _id: "",
                    },
                }
            };
            break;
        case REMOVE_PRODUCT_MODEL:
                return {
                    ...state, 
                    productModel: {
                        _id: "",
                        title: "",
                        price: 0,
                        description: "",
                        image: "",
                        stock: 0,
                        category: {
                            _id: "",
                        },
                    }
                };
                break;
        case CHANGE_PRODUCT_INPUT:
            let productModel = { ...state.productModel };
            switch (payload.name) {
                case "_id":
                    productModel.category[payload.name] = payload.value;
                    return { ...state, productModel };
                    break;
                default:
                    productModel[payload.name] = payload.value;
                    return { ...state, productModel };
                    break;
            }
            break;
        default:
            return state;
    }
}