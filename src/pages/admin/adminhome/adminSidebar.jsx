import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { LuPackageOpen } from "react-icons/lu";
import { MdAddCircleOutline } from "react-icons/md";

function AdminSidebar() {
  return (
    <div className="dark:bg-gray-800 bg-white pt-2 my-5 h-full overflow-auto">
      <div>
        <NavLink
          className="py-2  sm:px-3 my-5 px-10 mx-3  rounded gap-3 flex items-center"
          to="/"
        >
          <IoHomeOutline /> Home
        </NavLink>
      </div>
      <div>
        <NavLink
          className="py-2  my-5 px-10 mx-3 sm:px-3 rounded gap-3 flex items-center"
          to="/ManageCatagory"
        >
          <CiShoppingCart /> View Catagory
        </NavLink>
      </div>
      <div>
        <NavLink
          className="py-2  my-5 px-10 mx-3 sm:px-3 rounded gap-3 flex items-center "
          to="/AddCatagory"
        >
          <CiShoppingCart /> Add Catagory
        </NavLink>
      </div>

      <div>
        <NavLink
          className="py-2  my-5 px-10 mx-3 sm:px-3 rounded gap-3 flex items-center"
          to="/ManageProducts"
        >
          <LuPackageOpen /> View Product
        </NavLink>
      </div>
      <div>
        <NavLink
          className="py-2  my-5 px-10 mx-3 sm:px-3 rounded gap-3 flex items-center"
          to="/addProduct"
        >
          <MdAddCircleOutline /> Add Product
        </NavLink>
      </div>
    </div>
  );
}

export default AdminSidebar;
