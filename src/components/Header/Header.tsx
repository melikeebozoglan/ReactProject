//Header.tsx

import { Link, NavLink } from "react-router-dom";
import { MenuIcon } from "../../assets/icons";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <header className="bg-[#FFF0FF] w-full h-13 px-6 flex items-center justify-between border-b border-black md:px-12">
                <Link to="/" aria-label="" className="text-xl md:text-2xl font-medium text-black">
                    Adını Belirleyemediğim Proje
                </Link>

                <nav aria-label="" className="hidden md:flex w-auto gap-4">
                    <NavLink to="/" className={({ isActive }) => `text-sm font-light hover:text-black ${isActive ? "text-black" : "text-gray-600"}`}>Home</NavLink>
                    <NavLink to="/detail" className={({ isActive }) => `text-sm font-light hover:text-black ${isActive ? "text-black" : "text-gray-600"}`}>Detail</NavLink>
                </nav>

                <button aria-label="" className="md:hidden w-6 h-6" onClick={() => setIsOpen(!isOpen)} >
                    <img src={MenuIcon} alt="" className="" />
                </button>
            </header>

            {isOpen &&
                <nav aria-label="" className="fixed top-13 right-0 flex flex-col gap-4 w-1/5 h-1/6 z-50 p-6 border border-black-300 rounded-tl-xl rounded-bl-xl bg-white md:hidden overflow-auto">
                    <NavLink to="/" className={({ isActive }) => `text-sm font-light hover:text-black ${isActive ? "text-black" : "text-gray-600"}`}>Home</NavLink>
                    <NavLink to="/detail" className={({ isActive }) => `text-sm font-light hover:text-black ${isActive ? "text-black" : "text-gray-600"}`}>Detail</NavLink>
                </nav>
            }
        </>
    );
};

export default Header;