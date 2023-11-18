import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminHome from "./adminhome/adminHome";
import AdminSidebar from "./adminhome/adminSidebar";
import ManageCart from "./cart/manageCart";
import ManageProducts from "./Products/manageProducts";
import NotFound from "../NotFound";
function Admin() {
  return (
    <div className="App">
      <div className="flex h-[100vh]">
        <div className="w-1/5 mt-20 pl-5 font-['Agbalumo']">
          <AdminSidebar />
        </div>
        <div className="content">
          <div className="w-4/5 mt-20">
            <Routes>
              <Route path="/" element={<AdminHome />} />
              <Route path="/ManageCart" element={<ManageCart />} />
              <Route path="/ManageProducts" element={<ManageProducts />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
