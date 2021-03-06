import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import {
     userReducer,newProductReducer,productsReducer,productDetailsReducer,cartReducer
} from './reducre'



const reducer = combineReducers({
    user:userReducer,
    newProduct:newProductReducer,
    products:productsReducer,
    singleProduct:productDetailsReducer,
    adminProduct:productsReducer,
    cart:cartReducer
})

let initialState = {
    cart: {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    },
  };

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store