import React, { FC } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom';
import s from './Header.module.scss';

const Header:FC = () => {

  const router:NavigateFunction = useNavigate();

  return (
    <div className={s.header}>
      <button onClick={() => router("/cart")}>CART</button>
    </div>
  );
};

export default Header;