import { Link, NavLink } from "react-router-dom";
import { MenuIcon } from "../../assets/icons";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <header className={`bg-[#FFF0FF] w-full h-[4%] md:h-[5%] xl:h-[6%] px-4 py-2 md:px-12 xl:px-20 flex items-center justify-between border-b border-black ${isOpen ? "border-b-0" : "border-b border-black"} z-10`}>
                <Link to="/" aria-label="" className="text-l md:text-2xl xl:text-4xl font-medium text-black">
                    Adını Belirleyemediğim Proje
                </Link>

                <nav aria-label="" className="hidden md:flex w-auto gap-4">
                    <NavLink to="/" className={({ isActive }) => `text-sm md:text-lg xl:text-2xl font-light hover:text-black ${isActive ? "text-black" : "text-gray-600"}`}>Home</NavLink>
                    {/* <NavLink to="/detail" className={({ isActive }) => `text-sm md:text-lg xl:text-2xl font-light hover:text-black ${isActive ? "text-black" : "text-gray-600"}`}>Detail</NavLink> */}
                </nav>

                <button aria-label="" className="md:hidden w-6 h-6" onClick={() => setIsOpen(!isOpen)} >
                    <img src={MenuIcon} alt="" className="" />
                </button>
            </header>

            {isOpen &&
                <nav aria-label="" className=" bg-[#FFF0FF] w-full px-4 flex flex-col gap-2 border-b border-black transition-all duration-300 md:hidden ">
                    <NavLink to="/" className={({ isActive }) => `text-sm md:text-lg xl:text-2xl  font-light hover:text-black ${isActive ? "text-black " : "text-gray-600"}`}>Home</NavLink>
                    {/* <NavLink to="/detail" className={({ isActive }) => `text-sm md:text-lg xl:text-2xl  font-light hover:text-black ${isActive ? "text-black" : "text-gray-600"}`}>Detail</NavLink> */}
                </nav>
            }
        </>
    );
};

export default Header;