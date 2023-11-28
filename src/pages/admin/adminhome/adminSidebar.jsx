import React from "react";

import {
  HomeOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { LuPackageOpen } from "react-icons/lu";
import { TbCategory } from "react-icons/tb";

import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Home", "AdminHome", <HomeOutlined />),

  getItem("category", "sub1", <TbCategory />, [
    getItem("View category", "ManageCatagory", <UnorderedListOutlined />),
    getItem("Add category", "AddCatagory", <PlusCircleOutlined />),
  ]),
  getItem("Product", "sub2", <LuPackageOpen />, [
    getItem("View Product", "ManageProducts", <UnorderedListOutlined />),
    getItem("Add Product", "addProduct", <PlusCircleOutlined />),
  ]),
];
const AdminSidebar = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    // console.log("click ", e);
    // console.log(e.key);
    navigate(`/${e.key}`);
  };
  return (
    <Menu
      onClick={onClick}
      className="dark:bg-gray-800 bg-white text-black dark:text-white text-lg pt-2 my-3 h-full overflow-auto"
      defaultSelectedKeys={["AddCatagory"]}
      // defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
export default AdminSidebar;
