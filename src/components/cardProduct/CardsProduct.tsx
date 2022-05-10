import React, { FC } from 'react'
import { data } from '../../dataBase/database';
import { Product } from '../../types/types';
import OneCardProduct from './OneCardProduct';
import s from "./CardsProduct.module.scss";

const CardsProduct: FC = () => {

  return (
    <div className={s.allCards}>

      {data
        ?
        data.map((product: Product,i:number) => (<OneCardProduct product={product} key={i}/>))
        :
        <>No</>
      }
    </div>
  )
}

export default CardsProduct