import React, { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { FaRandom } from 'react-icons/fa';
import { AiOutlineAlert } from 'react-icons/ai';
import { LuUsers2 } from 'react-icons/lu';
import { SlBadge } from 'react-icons/sl';

import ProfileContent from '../pages/profil/profilPage';
import TirageContent from '../pages/tirage/tiragePage';

function SideBar() {
  const [titleHidden, setTitleHidden] = useState(false);
  const [activeComponent, setActiveComponent] = useState('Profile');

  const toggleSidebar = () => {
    setTitleHidden(!titleHidden);
  };

  const renderContent = () => {
    switch (activeComponent) {
      case 'Profile':
        return <ProfileContent />;
      case 'Tirage':
        return <TirageContent />;
      default:
        return <div>There is no content</div>;
    }
  };

  const clientMenuItems = [
    { name: 'Profile', icon: <CiUser size={24} />, component: 'Profile' },
    { name: 'Tirage au sort', icon: <FaRandom size={20} />, component: 'Tirage' },
    { name: 'Réclamations', icon: <AiOutlineAlert size={24} />, component: 'Reclamations' },
  ];

  const adminMenuItems = [
    { name: 'Clients', icon: <LuUsers2 size={24} />, component: 'Clients' },
    { name: 'Roles & Privilèges', icon: <SlBadge size={24} />, component: 'RolesPrivileges' },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-2/12 bg-white rounded p-0 shadow-lg top-0 left-0 h-full border-r mt-12">
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">Client</div>
              </div>
            </li>
            {clientMenuItems.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  onClick={() => setActiveComponent(item.component)}
                  className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 pr-6 ${
                    activeComponent === item.component ? 'text-[#795abe] border-l-4 border-[#795abe] bg-gray-100' : 'border-transparent'
                  }`}
                >
                  <span className="inline-flex justify-center items-center ml-4">{item.icon}</span>
                  <span className={`ml-2 text-sm tracking-wide truncate ${titleHidden ? 'hidden sm:inline' : ''}`}>
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">Admin</div>
              </div>
            </li>
            {adminMenuItems.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  onClick={() => setActiveComponent(item.component)}
                  className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 pr-6 ${
                    activeComponent === item.component ? 'text-[#38B000] border-l-4 border-[#38B000] bg-gray-100' : 'border-transparent'
                  }`}
                >
                  <span className="inline-flex justify-center items-center ml-4">{item.icon}</span>
                  <span className={`ml-2 text-sm tracking-wide truncate ${titleHidden ? 'hidden sm:inline' : ''}`}>
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-grow w-screen mt-12">
        {renderContent()}
      </div>
    </div>
  );
}

export default SideBar;

