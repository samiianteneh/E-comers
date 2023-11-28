import React from "react";
import { useSelector } from "react-redux";

function Number() {
  // Use useSelector to get the current value of 'no' from the Redux store
  const currentNo = useSelector((state) => state.cart.no);
  // console.log(numbers);
  return <div>{currentNo === 0 ? <></> : <p>{currentNo}</p>}</div>;
}

export default Number;
