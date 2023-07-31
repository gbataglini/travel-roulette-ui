import { SlCompass } from "react-icons/sl";
import { BiSolidUserCircle } from "react-icons/bi"

const NavBar = () => {

    let Links=[
        {name: "HOME", link:"/"},
        {name: "UPCOMING", link:"/upcoming-trips"},
        {name: "TRAVEL LOG", link:"/history"},
    ]

    return (
        <div className=" w-full fixed top-0 left-0 flex-row">
            <div className="md: flex bg-transparent py-4 md:px-10 px-7 ">
                <div className="cursor-pointer flex font-sans text-gray-800 w-5/6">
                    <span className="text-2xl text-black mr-2">
                        <SlCompass name="compass-logo" size={30} /> 
                    </span>
                        <p className="font-bold text-2xl"> Travelr </p>

                    <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-black opacity-100 dark:opacity-50 ml-4">
                    </div>           

                    <ul className="md:flex md:items-center">
                    {
                        Links.map((link)=> (
                            <li key={link.name} className="md:ml-6 text-l">
                                <a href={link.link} className='hover:text-gray-400 duration-300'>{link.name}</a>
                            </li>
                        ))
                    }
                    </ul>
            </div>
            
            <div className="flex justify-end w-1/6 ">
                <button type="button" className=" h-full px-2 text-gray-600 hover:text-gray-700 rounded-r-md hover:bg-gray-50 mr-4">
                    <BiSolidUserCircle size={35} />
                </button>
            </div>

        </div>
        </div>


    )
}


export default NavBar