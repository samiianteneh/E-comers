import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import InerHeader from "../../../../components/layout/inerHeader";
import { URLST } from "../../../../constants/urls";
import EditCatagoryForm from "./editCatagoryForm";
import AdminSidebar from "../../adminhome/adminSidebar";

function EditCatagory() {
  const { id } = useParams();

  const [catagortyData, setCatagortyData] = useState([]);
  useEffect(() => {
    axios
      .get(`${URLST}/category`)
      .then((response) => {
        setCatagortyData(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.error("Error fetching category data:", err);
      });
  }, []);
  const filteredData = catagortyData.find((item) => item.id === id);
  return (
    <div className="App h-[100vh] ">
      <div className="flex h-[90vh] ">
        <div className="w-1/5  mt-20 pl-5 font-['Agbalumo'] ">
          <>
            <AdminSidebar />
          </>
        </div>
        <div className="w-4/5 mt-20 overflow-auto">
          <div className="   mx-10 mt-5 pt-5 dark:bg-gray-800 bg-white h-full ">
            <InerHeader inerContent={"Edit Cart"} />
            <div className="bg-gray-100  dark:bg-gray-800 m-4 ">
              <EditCatagoryForm
                categoryName={filteredData?.categoryName}
                description={filteredData?.description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCatagory;
