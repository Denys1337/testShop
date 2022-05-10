import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
import { OneCardProductProps, Product } from '../../types/types';
import s from "./CardsProduct.module.scss";

const OneCardProduct: FC<OneCardProductProps> = ({ product }) => {

  const { id, name, price, img_url }: Product = product;
  const dispatch = useDispatch();
  const KEY_NAME = 'Products';
  const addToCardLS = () => {
    dispatch(addToCart(product));
    let storageList: any = localStorage.getItem(KEY_NAME);
    if (storageList) {
      storageList = JSON.parse(storageList)
    } else {
      storageList = []
    }
    storageList.push(product)
    localStorage.setItem(KEY_NAME, JSON.stringify(storageList))
  }

  return (
    <div className={s.card} key={id}>
      <div className={s.card__cardImg}>
        <img src={img_url} alt='product' />
      </div>
      <div className={s.infoProduct}>
        <h3>{name}</h3>
        <h3>{price}$</h3>
      </div>
      <button onClick={() => addToCardLS()}>ADD TO CARD</button>

    </div>
  )
}

export default OneCardProduct;
