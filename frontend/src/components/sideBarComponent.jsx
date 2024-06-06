// import { CiUser } from "react-icons/ci";
// import { FaRandom } from "react-icons/fa";
// import { AiOutlineAlert } from "react-icons/ai";
// import { LuUsers2 } from "react-icons/lu";
// import { SlBadge } from "react-icons/sl";

// function SideBar() {
//   return (
//     <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
//   <div class="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r mt-12">
//     <div class="overflow-y-auto overflow-x-hidden flex-grow">
//       <ul class="flex flex-col py-4 space-y-1">
//         <li class="px-5">
//           <div class="flex flex-row items-center h-8">
//             <div class="text-sm font-light tracking-wide text-gray-500">
//               Menu Client
//             </div>
//           </div>
//         </li>
//             <li>
//               <a
//                 href="/"
//                 class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
//               >
//                 <span class="inline-flex justify-center items-center ml-4">
//                 <CiUser  size={24}/>
//                 </span>
//                 <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/"
//                 class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
//               >
//                 <span class="inline-flex justify-center items-center ml-4">
//                 <FaRandom size={20} />
//                 </span>
//                 <span class="ml-2 text-sm tracking-wide truncate">Tirage au sort </span>
//                 {/* <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
//                   New
//                 </span> */}
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/"
//                 class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
//               >
//                 <span class="inline-flex justify-center items-center ml-4">
//                 <AiOutlineAlert size={24} />
//                 </span>
//                 <span class="ml-2 text-sm tracking-wide truncate">
//                   Réclamations
//                 </span>
//               </a>
//             </li>
//             <li class="px-5">
//               <div class="flex flex-row items-center h-8">
//                 <div class="text-sm font-light tracking-wide text-gray-500">
//                     Menu admin
//                 </div>
//               </div>
//             </li>
//             <li>
//               <a
//                 href="/"
//                 class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
//               >
//                 <span class="inline-flex justify-center items-center ml-4">
//                 <LuUsers2 size={24} />
//                 </span>
//                 <span class="ml-2 text-sm tracking-wide truncate">Clients</span>
//                 {/* <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
//                   15
//                 </span> */}
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/"
//                 class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
//               >
//                 <span class="inline-flex justify-center items-center ml-4">
//                 <SlBadge size={24} />
//                 </span>
//                 <span class="ml-2 text-sm tracking-wide truncate">
//                     Roles & Privilèges
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/"
//                 class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
//               >
//                 <span class="inline-flex justify-center items-center ml-4">
//                 <FaRandom size={20} />
//                 </span>
//                 <span class="ml-2 text-sm tracking-wide truncate">Tirage au sort</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/"
//                 class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
//               >
//                 <span class="inline-flex justify-center items-center ml-4">
//                 <AiOutlineAlert size={24} />
//                 </span>
//                 <span class="ml-2 text-sm tracking-wide truncate">
//                   Réclamations
//                 </span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SideBar;


import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaRandom } from "react-icons/fa";
import { AiOutlineAlert } from "react-icons/ai";
import { LuUsers2 } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";

function SideBar() {
  const [titleHidden, setTitleHidden] = useState(false);
  const toggleSidebar = () => {
    setTitleHidden(!titleHidden);
  };

  return (
    <>
    <div className={`flex flex-wrap bg-gray-100 w-full h-screen antialiased bg-gray-50 text-gray-800`} >
          <div className={`w-2/12 bg-white rounded p-0 shadow-lg top-0 left-0 bg-white h-full border-r mt-12`}>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                Client
                </div>
              </div>
            </li>
            <li>
              <a
                href="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600  hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <CiUser size={24}  />
                </span>
                <span className={`ml-2 text-sm tracking-wide truncate ${titleHidden ? 'hidden sm:inline' : ''}`}>
                  Profile
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaRandom size={20}  />
                </span>
                <span className={`ml-2 text-sm tracking-wide truncate ${titleHidden ? 'hidden sm:inline' : ''}`}>
                  Tirage au sort
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <AiOutlineAlert size={24} />
                </span>
                <span className={`ml-2 text-sm tracking-wide truncate ${titleHidden ? 'hidden sm:inline' : ''}`}>
                  Réclamations
                </span>
              </a>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                   admin
                </div>
              </div>
            </li>
            <li>
              <a
                href="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <LuUsers2 size={24} />
                </span>
                <span className={`ml-2 text-sm tracking-wide truncate ${titleHidden ? 'hidden sm:inline' : ''}`}>
                  Clients
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <SlBadge size={24} />
                </span>
                <span className={`ml-2 text-sm tracking-wide truncate ${titleHidden ? 'hidden sm:inline' : ''}`}>
                  Roles & Privilèges
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <FaRandom size={20} />
                </span>
                <span className={`ml-2 text-sm tracking-wide truncate ${titleHidden ? 'hidden sm:inline' : ''}`}>
                  Tirage au sort
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#38B000] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <AiOutlineAlert size={24} />
                </span>
                <span className={`ml-2 text-sm tracking-wide truncate ${titleHidden ? 'hidden sm:inline' : ''}`}>
                  Réclamations
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default SideBar;


