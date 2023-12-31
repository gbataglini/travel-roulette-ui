import { SlCompass } from "react-icons/sl";
import { BiSolidUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <div className=" w-full fixed top-0 left-0 flex-row">
      <div className="md: flex bg-transparent py-4 md:px-10 px-7 ">
        <div className="cursor-pointer flex font-sans text-white w-5/6">
          <span className="text-2xl text-white mr-2">
            <SlCompass name="compass-logo" size={30} />
          </span>
          <p className="font-bold text-2xl"> Travelr </p>

          <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-white opacity-100 dark:opacity-50 ml-4"></div>

          <ul className="md:flex md:items-center">
            <li className="md:ml-6 text-l animated-link">
              <Link to={`/home`} className="hover:text-black duration-300">
                HOME
              </Link>
            </li>
            <li className="md:ml-6 text-l animated-link">
              <Link to={`/upcoming`} className="hover:text-black duration-300">
                UPCOMING
              </Link>
            </li>
            <li className="md:ml-6 text-l animated-link">
              <Link to={`/history`} className="hover:text-black duration-300">
                HISTORY
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-end w-1/6 ">
          <button
            className=" h-full px-2 text-white hover:text-grey rounded-full hover:bg-gray mr-1"
            type="button"
          >
            <BiSolidUserCircle size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
