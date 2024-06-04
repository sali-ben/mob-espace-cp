import { useState } from 'react';
import { MdLogout } from "react-icons/md";

function Navbar({ account, logout }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const goToProfile = () => {

  };

  return (
    <div className="navbar h-12 bg-white fixed top-0 w-full shadow-md px-5">
      <div className="grid grid-cols-3 h-full">
        <div className="flex">
          {/* <div className="navbar-leading h-full flex items-center cursor-pointer transition duration-300">
            <i className="va-icon add text-lg text-gray-800"></i>
          </div> */}
          <div className="navbar-leading h-full flex items-center cursor-pointer transition duration-300">
            <img src={require('../assets/imgs/logo_cp.png')} alt="cp_logo" className="h-8 mr-4" />
            <h3 className="text-inherit font-medium">Espace CP</h3>
          </div>
        </div>

        <div className="navbar-menu"></div>

        <div className="flex items-center justify-end">
          <div className="px-3 py-1 mr-3 bg-[#38B000]/[.34] rounded-full">
            {/* {account?.role[0].charAt(0).toUpperCase() + account?.role[0].slice(1)} */}
            <span className="text-xs text-center text-black font-normal">Admin</span>
          </div>
          <div className="navbar-actions-roles">
            {/* {account?.role[0].charAt(0).toUpperCase() + account?.role[0].slice(1)} */}
            <span className="text-xs text-black font-semibold">
              Welcome, Saliha
            </span>
          </div>
                   <div
            className="navbar-actions-logout ml-5 cursor-pointer px-2 py-2  bg-[#38B000]"
            onClick={logout}
          >
            {/* <i className="va-icon logout text-lg text-gray-800  bg-[#38B000]"></i> */}
            <MdLogout className="text-lg text-white " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
