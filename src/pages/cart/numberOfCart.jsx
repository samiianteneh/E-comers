import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNo } from "../../components/layout/cartSlice";

function Reducer({ number }) {
  const dispatch = useDispatch();
  const currentNo = useSelector((state) => state.cart.no);
  useEffect(() => {
    dispatch(updateNo(number));
  }, [number, dispatch]);
}

export default Reducer;
