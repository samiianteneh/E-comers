import React from "react";
import SignupHeader from "./signupHeader";
import SignupForm from "./signupForm";

function Signup() {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="">
        <div>
          <div className=" border-[#3f7bb8]  border-[1px] ">
            <div className=" ">
              <SignupHeader />
            </div>
            <div className=" px-10 py-8">
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
