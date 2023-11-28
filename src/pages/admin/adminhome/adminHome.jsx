import AdminSidebar from "./adminSidebar";

function AdminHome() {
  return (
    <div className="App h-[100vh]">
      <div className="flex h-[90vh]">
        <div className="w-1/5  mt-20 pl-5 font-['Agbalumo'] ">
          <>
            <AdminSidebar />
          </>
        </div>
        <div className="w-4/5 mt-20 overflow-auto ">
          <div className=" py-5 h-full flex justify-center items-center my-3 mx-10 dark:bg-gray-800 bg-white ">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20220410/pngtree-admin-register-homepage-community-photo-image_63285.jpg"
              alt="admin image"
              className="h-full w-full"
            />
            {/* <p className=" mt-48 ">adminhome</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
