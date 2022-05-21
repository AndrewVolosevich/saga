import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Peoples = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)

  console.log('peoples from state', state)
  return (
    <div>
      Counter

      <br />
      <button onClick={() => {
        dispatch({type: 'FETCH_DATA'})
      }}>Click</button>
    </div>
  );
};

export default Peoples;