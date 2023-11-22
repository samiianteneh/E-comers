import React from "react";
import AddProductForm from "./addProductForm";
import InerHeader from "../../../../components/layout/inerHeader";
import AdminSidebar from "../../adminhome/adminSidebar";

function AddProduct() {
  return (
    <div className="App h-[90vh]">
      <div className="flex h-full ">
        <div className="w-1/5  mt-20 pl-5 font-['Agbalumo'] ">
          <>
            <AdminSidebar />
          </>
        </div>
        <div className="w-4/5 mt-20 overflow-auto ">
          <div className="   mx-10 mt-5 pt-5 dark:bg-gray-800 bg-white ">
            <InerHeader inerContent={"Add Products"} />
            <div className="bg-gray-100 dark:bg-gray-800 m-4">
              <AddProductForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
