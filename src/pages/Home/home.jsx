import React, { useEffect, useState } from "react";
import EachProduct from "./EachProduct";
import axios from "axios";
import { URLST } from "../../constants/urls";
import HomeSideBar from "./HomeSideBar";
import Search from "../../components/layout/Search";
import DisplayProduct from "./displayProducts";

function Home() {
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [originalProductData, setOriginalProductData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${URLST}/product`)
      .then((response) => {
        setOriginalProductData(response.data.product);
        setProductData(response.data.product);
      })
      .catch((err) => {
        console.error("Error fetching product data:", err);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filteredProducts = originalProductData.filter(
        (product) => product.categoryId === selectedCategory
      );
      setProductData(filteredProducts);
    } else {
      setProductData(originalProductData);
    }
  }, [selectedCategory, originalProductData]);

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
    <div className="App">
      <div className="flex justify-center overflow-auto h-[100vh]">
        <div className="w-full">
          <div>
            <DisplayProduct />
          </div>
          <div className="flex">
            <div className="w-1/5 mt-20 mb-10 pl-5 font-['Kdam Thmor Pro']">
              <HomeSideBar onCategoryClick={setSelectedCategory} />
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
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                  {currentItems.map((product, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 m-2 rounded-lg"
                    >
                      <EachProduct
                        title={product.productName}
                        image={product.image}
                        price={parseInt(product.price)}
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
      </div>
    </div>
  );
}

export default Home;
