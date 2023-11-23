import { Link } from "react-router-dom";
import Button from "./Button";

export default function Modal({ modal, setModal, toggleModal, page }) {
  return (
    <>
      {modal && (
        <div className=" fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div
            onClick={toggleModal}
            className=" fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80"
          ></div>
          <div className=" bg-gray-200  rounded max-w-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link
              to={"/"}
              className="
               py-2 px-4 
              rounded text-lg"
            >
              <Button page={page} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
