import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { lookAtStatus } from "../redux/categories/categories";

function Categories(){
const dispatch = useDispatch();
const state = useSelector(state => state.categoriesReducer)

  return(
    <div>
      <h2>{state}</h2>
    <button className="status" onClick={() => dispatch(lookAtStatus())}>Check Status</button>
    </div>
  )
}

export default Categories;