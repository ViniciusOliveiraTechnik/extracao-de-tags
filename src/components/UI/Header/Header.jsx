import { Menu } from "lucide-react";
import { useState } from "react";

function Header({ sections }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleIsOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="bg-white text-red-500 font-semibold text-[16px] md:text-[18px] flex items-center justify-between h-16 md:h-18 px-6 w-full fixed top-0 left-0 z-50 shadow-md">
      <img
        src="/src/assets/technik-logo.png"
        alt="Logo Technik"
        className="w-[180px]"
      />

      {/* Desktop menu */}
      <ul className="hidden md:flex justify-center items-center space-x-6">
        {sections.map((section, index) => (
          <li key={index} className="hover:text-red-700">
            <a href={section.link} className="transition-all">
              {section.title}
            </a>
          </li>
        ))}
      </ul>
  
      {/* Mobile Menu Button */}
      <button
        className="block md:hidden p-2 cursor-pointer"
        onClick={handleIsOpenMenu}
      >
        <Menu className="w-[30px] h-[30px]" />
      </button>

      {/* Mobile menu */}
      <ul
        className={`${
          isOpenMenu ? "top-16 opacity-100" : "-top-[200px] opacity-0"
        } md:hidden bg-red-800 text-white absolute left-0 w-full p-4`}
      >
        {sections.map((section, index) => (
          <li key={index} className="py-2 hover:text-gray-300">
            <a href={section.link} className="transition-all">
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
