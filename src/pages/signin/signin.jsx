import React from "react";
import SigninHeader from "./signinHeader";
import SigninForm from "./signinForm";

function Signin() {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="">
        <div>
          <div className=" border-[#3f7bb8]  border-[1px] ">
            <div className=" ">
              <SigninHeader />
            </div>
            <div className=" px-10 py-8">
              <SigninForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
