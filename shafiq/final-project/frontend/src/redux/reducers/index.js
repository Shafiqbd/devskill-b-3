import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import { cartReducers } from "./cartReducers";
import { categoryReducers } from "./categoryReducers";
import { messageReducers } from './messageReducers';
import { orderReducers } from './orderReducers';
import { productReducers } from "./productReducers";
import { storageReducers } from "./storageReducers";
import { userReducers } from "./userReducer";

const persistConfig = {
    key: "root",
    storage
}
const persistedReducer = persistReducer(persistConfig, storageReducers);

const reducers = combineReducers({
    storageStore: persistedReducer,
    userStore: userReducers,
    productStore: productReducers,
    categoryStore: categoryReducers,
    cartStore: cartReducers,
    toastr: toastrReducer,
    messageStore: messageReducers ,
    orderStore: orderReducers
})
export default reducers