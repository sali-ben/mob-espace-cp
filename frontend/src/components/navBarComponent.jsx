
// import { useState } from 'react';
// import { MdLogout } from "react-icons/md";

// function Navbar({ account, logout }) {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const goToProfile = () => {

//   };

//   return (
//     <div className="navbar h-12 bg-white fixed top-0 w-full shadow-md px-5">
//       <div className="grid grid-cols-3 h-full">
//         <div className="flex items-center">
//           <div className="navbar-leading h-full flex items-center cursor-pointer transition duration-300">
//             <img src={require('../assets/imgs/logo_cp.png')} alt="cp_logo" className="h-8 mr-4" />
//             <h4 className="text-sm font-medium sm:text-sm">Espace CP</h4>
//           </div>
//         </div>

//         <div className="navbar-menu"></div>

//         <div className="flex items-center justify-end">
//           <div className="px-3 py-1 mr-3 bg-[#38B000]/[.34] rounded-full sm:mr-0 sm:px-0 sm:py-0 ">
//             <span className="text-xs text-center text-black font-normal sm:text-sm">Admin</span>
//           </div>
//           <div className="navbar-actions-roles hidden sm:block">
//             <span className="text-xs text-black font-semibold">
//               Welcome, Saliha
//             </span>
//           </div>
//           <div className="navbar-actions-logout ml-5 cursor-pointer px-2 py-2 bg-[#38B000] sm:ml-1 py-1" onClick={logout}>
//             <MdLogout className="text-lg text-white " />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

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
        <div className="flex items-center">
          <div className="navbar-leading h-full flex items-center cursor-pointer transition duration-300">
            <img src={require('../assets/imgs/logo_cp.png')} alt="cp_logo" className="h-8 mr-4" />
            <h4 className="text-sm font-medium sm:text-sm">Espace CP</h4>
          </div>
        </div>

        <div className="navbar-menu"></div>

        <div className="flex items-center justify-end">
          <div className="navbar-actions-roles hidden sm:block mr-3">
            {/* Cache "Welcome, Saliha" sur les petits écrans */}
            <span className="text-xs text-black font-semibold">Welcome, Saliha</span>
          </div>
          <div className="px-3 py-1 mr-3 bg-[#38B000]/[.34] rounded-full sm:mr-0 sm:px-2 sm:py-1 ">
            {/* Place "Admin" à côté du bouton de déconnexion sur les petits écrans */}
            <span className="text-xs text-center text-black font-normal  sm:text-sm">Admin</span>
          </div>
          <div className="navbar-actions-logout ml-1 sm:ml-5 cursor-pointer px-2 py-2 bg-[#38B000] sm:py-1" onClick={logout}>
            {/* Bouton de déconnexion */}
            <MdLogout className="text-lg text-white " />
          </div>
          {/* <div className="navbar-actions-roles hidden lg:flex ml-3">
            <span className="text-xs text-black font-semibold">Welcome, Saliha</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;


