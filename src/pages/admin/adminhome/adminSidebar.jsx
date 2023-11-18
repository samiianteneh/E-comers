import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div>
      <div>
        <button className=" p-2 m-2 rounded font-bold text-xl">
          <Link to="/Admin">home</Link>
        </button>
      </div>
      <div>
        <button className=" p-2 m-2 rounded font-bold text-xl">
          <Link to="/Admin/ManageCart">Cart</Link>
        </button>
      </div>
      <div>
        <button className=" p-2 m-2 rounded font-bold text-xl">
          <Link to="/ManageProducts">product</Link>
        </button>
      </div>
      {/* <div>
        <button className=" p-2 m-2 rounded font-bold text-xl">
          <Link to="/Get">API</Link>
        </button>
      </div> */}
    </div>
  );
}

export default AdminSidebar;
