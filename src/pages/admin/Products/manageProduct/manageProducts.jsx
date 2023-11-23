import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import InerHeader from "../../../../components/layout/inerHeader";
import { URLST } from "../../../../constants/urls";
import AdminSidebar from "../../adminhome/adminSidebar";

function ManageProducts() {
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URLST}/product`)
      .then((response) => {
        setProductData(response.data.product);
      })
      .catch((err) => {
        console.error("Error fetching product data:", err);
      });
  }, []);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(productData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = (productId) => {
    axios
      .delete(`${URLST}/product/${productId}`)
      .then((response) => {
        console.log("Deleted post with ID ", response);
        window.location.replace("ManageProducts");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = productData.slice(startIndex, endIndex);

  return (
    <div className="App h-[100vh]">
      <div className="flex h-[90vh] ">
        <div className="w-1/5  mt-20 pl-5 font-['Agbalumo'] ">
          <>
            <AdminSidebar />
          </>
        </div>
        <div className="w-4/5 mt-20 overflow-auto ">
          <div className="   mx-10 mt-5 pt-5 dark:bg-gray-800 bg-white ">
            <div>
              <InerHeader inerContent={"Products"} />
            </div>
            <div>
              <div className="m-4 mt-3 h-full ">
                <table className="table-fixed w-full">
                  <thead className="bg-gray-500 text-white dark:text-black">
                    <tr>
                      <th className="border p-2 overflow-hidden">No</th>
                      <th className="border p-2 overflow-hidden">Name</th>
                      <th className="border p-2 overflow-hidden">price</th>
                      <th className="border p-2 overflow-hidden">image</th>
                      <th className="border p-2 overflow-hidden">
                        Description
                      </th>
                      <th className="border p-2 overflow-hidden">Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slicedData.map((product) => (
                      <tr
                        key={product.id}
                        className="bg-white dark:bg-gray-800 m-2 rounded-lg"
                      >
                        <td className="border p-2 overflow-hidden">
                          {product.id}
                        </td>
                        <td className="border p-2 overflow-hidden">
                          {product.productName}
                        </td>
                        <td className="border p-2 overflow-hidden">
                          {product.price}
                        </td>
                        <td className="border p-2 ">
                          <img
                            src={`${URLST}/${product.image}`}
                            alt={`Product ${product.id}`}
                          />
                        </td>
                        <td className="border p-2 overflow-hidden">
                          {product.description}
                        </td>
                        <td className="border p-2 ">
                          <div className="flex justify-center items-center px-2 overflow-hidden">
                            <Link
                              to={`/EditProduct/${product.id}`}
                              className="text-green-500 hover:text-3xl text-xl font-bold py-2 px-4 rounded"
                            >
                              <FaEdit />
                            </Link>
                            <button
                              className="text-red-500 hover:text-3xl text-xl font-bold py-2 px-4 rounded"
                              onClick={() => handleDelete(product.id)}
                            >
                              <FaTrashAlt />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="pagination flex justify-end  bg-gray-500 mx-5 ">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`pagination__item ${
                      currentPage === pageNumber
                        ? "active"
                        : " text-blue-500 px-3"
                    }`}
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
  );
}

export default ManageProducts;
