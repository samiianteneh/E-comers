import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import InerHeader from "../../../../components/layout/inerHeader";
import { URLST } from "../../../../constants/urls";
import AdminSidebar from "../../adminhome/adminSidebar";

function ManageCatagory() {
  const [categoryData, setCategoryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (categoryId) => {
    axios
      .delete(`${URLST}/category/${categoryId}`)
      .then((response) => {
        console.log("Deleted post with ID ", response);
        window.location.replace("ManageCatagory");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${URLST}/category`)
      .then((response) => {
        setCategoryData(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.error("Error fetching category data:", err);
      });
  }, []);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(categoryData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = categoryData.slice(startIndex, endIndex);

  return (
    <div className="App h-[90vh]">
      <div className="flex h-full ">
        <div className="w-1/5  mt-20 pl-5 font-['Agbalumo'] ">
          <>
            <AdminSidebar />
          </>
        </div>
        <div className="w-4/5 mt-20 overflow-auto ">
          <div className="  mx-10 mt-5 pt-5 dark:bg-gray-800 bg-white h-full ">
            <div>
              <InerHeader inerContent={"Category"} />
            </div>

            <div className="m-4">
              <table className="table-fixed w-full">
                <thead className="bg-gray-500 text-white dark:text-black">
                  <tr>
                    <th className="border p-2">No</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Description</th>
                    <th className="border p-2">Manage</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-300 dark:bg-gray-600">
                  {slicedData.map((category) => (
                    <tr
                      key={category.id}
                      className="bg-white dark:bg-gray-800 m-2 rounded-lg"
                    >
                      <td className="border p-2">{category.id}</td>
                      <td className="border p-2">{category.categoryName}</td>
                      <td className="border p-2">{category.description}</td>
                      <td className="border p-2 ">
                        <div className=" flex justify-center items-center gap-3">
                          <Link
                            to={`/EditCatagory/${category.id}`}
                            className="text-green-500 hover:text-3xl text-xl font-bold py-2 px-4 rounded"
                          >
                            <FaEdit />
                          </Link>
                          <button
                            className="text-red-500 hover:text-3xl text-xl font-bold py-2 px-4 rounded"
                            onClick={() => handleDelete(category.id)}
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
            <div className="pagination flex justify-end px-5 mx-4  bg-gray-500  ">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
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
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCatagory;
