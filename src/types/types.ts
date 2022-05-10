import { ADD_TO_CART } from "../redux/reducers/cartReducer"

export type Product ={
  id:number,
  name:string,
  price:number,
  img_url:string,
  description:string,
}

export type OneCardProductProps = {
  product: Product,
}

export type CardReducer = {
  Cart: Array<Product>,
}

export type CountReducer ={
  count: number,
}

export type Store = {
  shopReducer: CardReducer,
}

interface ICardsAll  {
  type: typeof ADD_TO_CART,
  payload: Product,
}

export type ActionType = ICardsAll