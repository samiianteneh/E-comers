import React from "react";

function InerHeader({ inerContent }) {
  return (
    <div
      className=" 
    w-9/10 mx-2 bg-gray-100 h-12 flex items-center
    dark:bg-gray-900
     pl-5 font-['Agbalumo'] text-xl"
    >
      {inerContent}
    </div>
  );
}

export default InerHeader;
