import React from "react";

const Navbar = () => {
  return (
    <div className="w-full py-5 border-b border-[#535F8910] px-[50px]">
      <div className="w-full flex justify-between items-center">
        <p className="text-subtleBlue">Hello Ayomide! 👋🏼</p>
        <div className="flex items-center">
          <button className="bg-robinBlue py-1 px-[35px] rounded-[30px] font-medium text-white">
            Download Report
          </button>
          <div className="ml-3 rounded-full bg-[#ECEEF5] w-10 h-10 flex items-center justify-center text-xs text-[#00000040]">
            AO
          </div>
          <img src="/Path.svg" alt="caret" className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
