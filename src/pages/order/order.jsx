import axios from "axios";
import React, { useEffect, useState } from "react";
import { URLST } from "../../constants/urls";

function Order() {
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const userId = localStorage.getItem("userID");

  useEffect(() => {
    axios
      .get(`${URLST}/order`)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((err) => {
        console.error("Error fetching order data:", err);
      });

    axios
      .get(`${URLST}/product`)
      .then((response) => {
        setProducts(response.data.product);
      })
      .catch((err) => {
        console.error("Error fetching product data:", err);
      });
  }, []);

  const filteredData = order.filter((item) => item.order.userId === userId);

  const renderProductInfo = (productId, property) => {
    const product = products.find((item) => item.id === productId);
    return product ? product[property] : "";
  };

  return (
    <div className="App">
      <div className="flex h-[100vh]">
        <div className="flex justify-center overflow-auto">
          <div className="m-4 mt-24 mx-36  mb-10">
            <table className="table-fixed w-full">
              <thead className="bg-gray-500 text-white dark:text-black">
                <tr>
                  <th className="overflow-hidden border p-2 w-1/14">No</th>
                  <th className="overflow-hidden border p-2 w-2/7">
                    Product Name
                  </th>
                  <th className="overflow-hidden border p-2 w-1/7">Quantity</th>
                  <th className="overflow-hidden border p-2 w-1/7">
                    Single Price
                  </th>
                  <th className="overflow-hidden border p-2 w-1/7">
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-300 dark:bg-gray-600 ">
                {filteredData.reverse().map((orderItem, index) => (
                  <tr key={index} className="">
                    <td className="p-2 overflow-hidden">{index + 1}</td>
                    <td className="p-2 overflow-hidden">
                      {renderProductInfo(orderItem.productId, "productName")}
                    </td>
                    <td className="p-2 overflow-hidden">
                      {orderItem.quantity}
                    </td>
                    <td className="p-2 overflow-hidden">
                      {parseInt(
                        renderProductInfo(orderItem.productId, "price")
                      )}
                    </td>
                    <td className="p-2 overflow-hidden">
                      {parseInt(
                        renderProductInfo(orderItem.productId, "price")
                      ) * parseInt(orderItem.quantity)}
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

export default Order;
