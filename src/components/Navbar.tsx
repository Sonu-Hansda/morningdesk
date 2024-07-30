import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <nav className="flex flex-wrap justify-between items-center px-4 md:px-24 py-4 md:py-0">
            <div className="w-full md:w-auto flex justify-between items-center">
                <img className="h-20 w-20 z-50" src={logo} alt="site logo"/>
                {!showMenu ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="cursor-pointer md:hidden w-6 h-6 text-white"
                        onClick={() => setShowMenu(true)}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="cursor-pointer md:hidden w-6 h-6 text-white"
                        onClick={() => setShowMenu(false)}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                )}
            </div>
            <ul className={`${showMenu ? "flex" : "hidden"
                } bg-white font-semibold md:flex md:relative md:bg-transparent text-black rounded-sm md:text-white justify-center md:justify-between w-full md:w-auto h-auto md:h-auto md:items-center gap-x-4 transition-opacity ease-linear mt-2`}>
                <div className="flex flex-row items-center gap-4 md:gap-6">
                    <li className="cursor-pointer hover:underline">Home</li>
                    <li className="cursor-pointer hover:underline">services</li>
                    <li className="cursor-pointer hover:underline">blog</li>
                    <li className="cursor-pointer hover:underline">About us</li>
                </div>
                </ul>
        </nav>
    );
};

export default Navbar;
