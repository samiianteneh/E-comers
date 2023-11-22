import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminHome from "./adminhome/adminHome";
import AdminSidebar from "./adminhome/adminSidebar";

function Admin() {
  return (
    <div className="App">
      <div className="flex  ">
        <div className="w-1/5  mt-20 pl-5 font-['Agbalumo'] ">
          <>
            <AdminSidebar />
          </>
        </div>
        <div className="w-4/5 mt-20">
          <>
            <AdminHome />
          </>
        </div>
      </div>
    </div>
  );
}

export default Admin;
