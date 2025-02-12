import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { usersConfig, adminsConfig } from "./../config/Config.json";
import MyIcons from "./MyIcons";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const { user } = useUserContext();

  const role = user.role === "DEVELOPER" ? usersConfig : adminsConfig;

  const navigate = useNavigate(); 

  const handleNavigation = (navigateTo: string) => {
    navigate(navigateTo); 
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-48 h-screen bg-gray-800 text-white p-6 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:relative lg:translate-x-0 h-full`}
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-center">Planovate</h1>

        <button onClick={toggleSidebar} className="lg:hidden text-2xl">
          <AiOutlineClose />
        </button>
      </div>
      <ul>
        {role.sidebar.map((items, index) => {
          return (
            <li key={index} className="mb-6 flex items-center gap-4">
              <div className="flex justify-between m-4">
                <MyIcons type={items.icon} />
                <button
                  onClick={() => handleNavigation(items.navigateTo)} 
                  className="hover:text-blue-400 ml-3 items-start"
                >
                  {items.name}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
