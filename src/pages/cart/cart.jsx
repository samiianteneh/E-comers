import axios from "axios";
import React, { useEffect, useState } from "react";
import { URLST } from "../../constants/urls";
import { FaTrashAlt } from "react-icons/fa";

function Cart() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const userId = localStorage.getItem("userID");

  useEffect(() => {
    axios
      .get(`${URLST}/carts`)
      .then((response) => {
        console.log(response.data.cart);
        setCart(response.data.cart);
      })
      .catch((err) => {
        console.error("Error fetching cart data:", err);
      });
  }, []);
  const filteredData = cart.filter((item) => item.cart.userId === userId);

  const handleDelete = (cartId) => {
    axios
      .delete(`${URLST}/carts/${cartId}`)
      .then((response) => {
        console.log("Deleted post with ID ", response);
        window.location.replace("Cart");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    axios
      .get(`${URLST}/product`)
      .then((response) => {
        console.log(response.data.product);
        setProducts(response.data.product);
      })
      .catch((err) => {
        console.error("Error fetching cart data:", err);
      });
  }, []);
  // Add an empty dependency array to run the effect only once

  return (
    <div className="App h-[100vh] ">
      <div className="flex  ">
        <div className=" flex items-center justify-center overflow-auto">
          <div className="m-4 mt-24">
            <table className="table-fixed w-full">
              <thead className="bg-gray-500 text-white dark:text-black">
                <tr>
                  <th className="border p-2">No</th>
                  <th className="border p-2">Product Name</th>
                  <th className="border p-2">Product image</th>
                  <th className="border p-2">Quantity</th>
                  <th className="border p-2">price</th>
                  <th className="border p-2">Manage</th>
                </tr>
              </thead>
              <tbody className="bg-gray-300 dark:bg-gray-600">
                {filteredData.map((cartItem, index) => (
                  <tr
                    key={index}
                    className="bg-white dark:bg-gray-800 m-2 rounded-lg mt-20 overflow-hide"
                  >
                    <td className="border p-2">{cartItem.cartId}</td>
                    {products
                      .filter((item) => item.id === cartItem.productId)
                      .map((productItem, i) => (
                        <div key={i}>
                          <td className="border p-2">
                            {productItem.productName}
                          </td>
                          <td className="border p-2">{productItem.image}</td>
                        </div>
                      ))}

                    {/* <td className="border p-2">{cartItem.productId}</td>
                    <td className="border p-2">image</td> */}
                    <td className="border p-2">{cartItem.quantity}</td>
                    <td className="border p-2">{cartItem.cart.userId}</td>
                    <td className="border p-2">
                      <button
                        className="text-red-500 hover:text-3xl text-xl font-bold py-2 px-4 rounded"
                        onClick={() => handleDelete(cartItem.cartId)}
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
