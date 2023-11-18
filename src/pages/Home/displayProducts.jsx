import React, { useEffect, useState } from "react";
import EachProduct from "./eachProduct";
import axios from "axios";
import { URLST } from "../../constants/urls";

function DisplayProducts() {
  const [productData, setProductData] = useState([]);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${URLST}/product`)
      .then((response) => {
        // console.log(response.data.product);
        setProductData(response.data.product);
      })
      .catch((err) => {
        console.error("Error fetching product data:", err);
      });
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = productData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(productData.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1   ">
        {slicedData.map((product, index) => (
          <div
            key={index}
            className=" bg-white dark:bg-gray-800 m-2 rounded-lg"
          >
            <EachProduct
              title={product.productName}
              image={product.image}
              price={product.price}
              id={product.id}
            />
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="mx-16 flex justify-end">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={
              currentPage === pageNumber ? "active" : " text-blue-500 px-3"
            }
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </>
  );
}

export default DisplayProducts;
