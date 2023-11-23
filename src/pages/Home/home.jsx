import React, { useEffect, useState } from "react";
import EachProduct from "./eachProduct";
import axios from "axios";
import { URLST } from "../../constants/urls";
import HomeSideBar from "./homeSideBar";
import Search from "../../components/layout/search";
// import DisplayProducts from "./displayProducts";

function Home() {
  const [searchQuery, setSearchQuery] = useState(""); // Search query
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
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(productData.length / itemsPerPage);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(1);
  };

  const filteredItems = productData.filter((item) =>
    item.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentItems = filteredItems.slice(startIndex, endIndex);
  return (
    <div className="App  ">
      <div className="flex ">
        <div className="w-1/5  mt-20 mb-10 pl-5 font-['Kdam Thmor Pro'] ">
          <>
            <HomeSideBar />
          </>
        </div>
        <div className="w-4/5 mt-20">
          <div>
            <Search
              searchQuery={searchQuery}
              handleSearchSubmit={handleSearchSubmit}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1   ">
              {currentItems.map((product, index) => (
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
                    currentPage === pageNumber
                      ? "active"
                      : " text-blue-500 px-3"
                  }
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
