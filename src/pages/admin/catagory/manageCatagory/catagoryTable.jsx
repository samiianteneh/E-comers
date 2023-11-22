import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function CatagoryTable({ id, categoryName, description }) {
  return (
    <div className="m-4 my-5">
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
          <tr>
            <td className="border p-2">{id}</td>
            <td className="border p-2">{categoryName}</td>
            <td className="border p-2">{description}</td>
            <td className="border p-2 ">
              <div className=" flex justify-center items-center gap-3">
                <Link
                  to={`/EditCart/${id}`}
                  className="text-green-500 hover:text-3xl text-xl font-bold py-2 px-4 rounded"
                >
                  <FaEdit />
                </Link>
                <button className="text-red-500 hover:text-3xl text-xl font-bold py-2 px-4 rounded">
                  <FaTrashAlt />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CatagoryTable;
