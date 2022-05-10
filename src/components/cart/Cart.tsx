import React, { FC } from 'react';
import { Product} from '../../types/types';
import s from "./Cart.module.scss";
import Counter from './Counter';

const Cart: FC = () => {

  const KEY_NAME:string = 'Products';
  const getListFromLocalStorage = () => {
    const productLocalStorage = localStorage.getItem(KEY_NAME);
    if (productLocalStorage) {
      return JSON.parse(productLocalStorage);
    }
    return [];
  }
  const cardListLocalStorage: Product[] = getListFromLocalStorage();
  
  return (
    <div>{cardListLocalStorage.map((cart, i) => {
      return (
        <div className={s.cartProduct} key={i}>
          <img src={cart.img_url} alt='product' />
          <div className={s.productInfo}>
            <h3>{cart.name}</h3>
            <h3>{cart.price}$</h3>
            <p>{cart.description}</p>
          </div>
          <Counter key={cart.id}/>
        </div>
      )
    })}</div>
  );
};

export default Cart;
