import { createStore } from "redux";
import rootReducer from "./redux/reducer/index";
const existingCartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : [];
const initialstate = {cartitem : existingCartItems } 

const store = createStore(rootReducer, initialstate , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());{

}
export default store;
