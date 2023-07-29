import { SlCompass } from "react-icons/sl";

const NavBar = () => {

    let Links=[
        {name: "HOME", link:"/"},
        {name: "UPCOMING TRIPS", link:"/upcoming-trips"},
        {name: "TRAVEL HISTORY", link:"/history"},
    ]

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md: flex items-center justify-between bg-transparent py-4 md:px-10 px-7">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-sans
            text-gray-800">
                <span className="text-2xl text-black mr-1 pt-2">
                    <SlCompass name="compass-logo" size={24}/> 
                </span>
                Travelr
            </div>
            <ul className="md:flex md:items-center">
               {
                Links.map((link)=> (
                    <li key={link.name} className="md:ml-8 text-l">
                        <a href={link.link}>{link.name}</a>
                    </li>
                ))
               }
            </ul>
            </div>
        </div>
    )
}

export default NavBar