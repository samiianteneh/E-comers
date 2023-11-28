import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNo } from "../../components/layout/cartSlice";
import axios from "axios";
import { URLST } from "../../constants/urls";

function DisplayProduct() {
  const [cart, setCart] = useState([]);
  const userId = localStorage.getItem("userID");

  useEffect(() => {
    axios
      .get(`${URLST}/carts`)
      .then((response) => {
        setCart(response.data.cart);
        // console.log(response.data.cart);
      })
      .catch((err) => {
        console.error("Error fetching cart data:", err);
      });
  }, []);

  const filteredData = cart.filter((item) => item.cart.userId === userId);

  /////////////////////////
  const dispatch = useDispatch();
  const currentNo = useSelector((state) => state.cart.no);
  useEffect(() => {
    dispatch(updateNo(filteredData.length));
  }, [filteredData.length, dispatch]);
  // console.log(filteredData.length);
}

export default DisplayProduct;
