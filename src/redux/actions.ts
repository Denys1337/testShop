import { CountReducer, Product } from "../types/types";
import { ADD_TO_CART } from "./reducers/cartReducer";
import { DECREMENT, INCREMENT } from "./reducers/countReducer";

export const addToCart = (payload:Product) => ({type:ADD_TO_CART,payload});
export const countIncrement = (count:CountReducer,id:Product) => ({type:INCREMENT,payload:{id:id,count:count}});
export const countDecrement = (count:CountReducer,id:Product) => ({type:DECREMENT,payload:{id:id,count:count}});