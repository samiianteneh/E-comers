import axios from "axios";
import { useEffect, useState } from "react";
import { URLST } from "../../constants/urls";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CartAdd from "./cartAdd";
import NumberOfCart from "./numberOfCart";

function Cart() {
  const navigate = useNavigate();
  const num = 3;
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const userId = localStorage.getItem("userID");

  useEffect(() => {
    axios
      .get(`${URLST}/carts`)
      .then((response) => {
        setCart(response.data.cart);
        // console.log(response.data.cart);
        // response.data.cart.forEach((cartItem) => {
        //   console.log(cartItem.cartId);
        // });
      })
      .catch((err) => {
        console.error("Error fetching cart data:", err);
      });
  }, []);

  const filteredData = cart.filter((item) => item.cart.userId === userId);

  const handleDelete = (cartId) => {
    axios
      .delete(`${URLST}/carts/${cartId}`)
      .then(() => {
        const newCart = cart.filter((item) => item.cartId != cartId);
        setCart(newCart);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${URLST}/product`)
      .then((response) => {
        setProducts(response.data.product);
      })
      .catch((err) => {
        console.error("Error fetching cart data:", err);
      });
  }, []);

  let totalPrice = 0;

  filteredData.forEach((cartItem, index) => {
    const prices = products
      .filter((item) => item.id === cartItem.productId)
      .map((productItem) => productItem.price);

    const productTotalPrice = parseInt(
      prices.reduce((acc, price) => acc + price, 0) * cartItem.quantity
    );
    totalPrice += productTotalPrice;
  });

  const cartData = [];
  filteredData?.map((item) => {
    cartData.push({ quantity: item?.quantity, productId: item?.productId });
  });
  // console.log(cart, "cartcart");
  return (
    <div className="App ">
      <div className="flex  h-[100vh] ">
        <div className=" flex  justify-center overflow-auto">
          <div className="m-4 mt-24 mx-36">
            <>
              <div>
                <table className="table-fixed w-full">
                  <thead className="bg-gray-500 text-white dark:text-black">
                    <tr>
                      <th className="overflow-hidden border p-2 w-1/14">No</th>
                      <th className="overflow-hidden border p-2 w-2/7">
                        Product Name
                      </th>
                      <th className="overflow-hidden border p-2 w-2/7">
                        Product image
                      </th>
                      <th className="overflow-hidden border p-2 w-1/7">
                        Quantity
                      </th>
                      <th className="overflow-hidden border p-2 w-1/7">
                        Single Price
                      </th>
                      <th className="overflow-hidden border p-2 w-1/7">
                        Total Price
                      </th>
                      <th className="overflow-hidden border p-2 w-1/14">
                        Manage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-300 dark:bg-gray-600">
                    {filteredData.map((cartItem, index) => (
                      <tr
                        key={index}
                        className="bg-white dark:bg-gray-800 m-2 rounded-lg mt-20 overflow-hide border-b"
                      >
                        <td className=" p-2 overflow-hidden w-1/7">
                          {index + 1}
                        </td>
                        <td className=" p-2 overflow-hidden">
                          {products
                            .filter((item) => item.id === cartItem.productId)
                            .map((productItem, i) => (
                              <div key={i}>{productItem.productName}</div>
                            ))}
                        </td>
                        <td className=" p-2 overflow-hidden flex items-center justify-center">
                          {products
                            .filter((item) => item.id === cartItem.productId)
                            .map((productItem, i) => (
                              <div key={i}>
                                <img
                                  className="w-32 h-32 "
                                  src={`${URLST}/${productItem.image}`}
                                  alt={`Product ${index} image`}
                                ></img>
                              </div>
                            ))}{" "}
                        </td>
                        <td className=" p-2 overflow-hidden">
                          {" "}
                          {cartItem.quantity}
                        </td>
                        <td className=" p-2 overflow-hidden">
                          {products
                            .filter((item) => item.id === cartItem.productId)
                            .map((productItem, i) => (
                              <div key={i}>{parseInt(productItem.price)}</div>
                            ))}
                        </td>
                        <td className=" p-2 overflow-hidden">
                          {products
                            .filter((item) => item.id === cartItem.productId)
                            .map((productItem, i) => (
                              <div key={i}>
                                {cartItem.quantity *
                                  parseInt(productItem.price)}
                              </div>
                            ))}
                        </td>
                        <td className=" p-2 overflow-hidden ">
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
                <div className=" h-14 p-4 flex items-end justify-end bg-gray-500 text-white dark:text-black ">
                  <div>Total Amount: {totalPrice} Birr</div>
                  <div>
                    <NumberOfCart number={filteredData.length} />
                  </div>
                  {/* <div> {filteredData.length}</div> */}
                  <div>{/* <NumberOfCart /> */}</div>
                </div>{" "}
              </div>
              <div className="">
                <CartAdd
                  userId={userId}
                  totalAmount={totalPrice}
                  product={cartData}
                />
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
