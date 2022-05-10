import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT, INCREMENT } from '../../redux/reducers/countReducer';
import { CountReducer, Product } from '../../types/types';

const Counter = () => {
 
  const count = useSelector((state:any) => state.countReducer.count )
  console.log(count);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({type:INCREMENT});
  }
  const decrement = () => {
    dispatch({type:DECREMENT});
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button  onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
