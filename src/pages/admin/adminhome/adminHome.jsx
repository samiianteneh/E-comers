import AdminSidebar from "./adminSidebar";

function AdminHome() {
  return (
    <div className="App h-[90vh]">
      <div className="flex h-full ">
        <div className="w-1/5  mt-20 pl-5 font-['Agbalumo'] ">
          <>
            <AdminSidebar />
          </>
        </div>
        <div className="w-4/5 mt-20">
          <div className=" h-full flex justify-center items-center mx-10 mt-5 dark:bg-gray-800 bg-white ">
            <p className=" mt-48 ">adminhome</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
