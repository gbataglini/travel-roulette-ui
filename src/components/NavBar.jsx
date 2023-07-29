import { SlCompass } from "react-icons/sl";

const NavBar = () => {

    let Links=[
        {name: "HOME", link:"/"},
        {name: "UPCOMING", link:"/upcoming-trips"},
        {name: "TRAVEL LOG", link:"/history"},
    ]

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md: flex items-center bg-transparent py-4 md:px-10 px-7">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-sans
            text-gray-800">
                <span className="text-2xl text-black mr-2">
                    <SlCompass name="compass-logo" size={30}/> 
                </span>
                Travelr
                <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-black opacity-100 dark:opacity-50 ml-4"></div>           
                </div>
            <ul className="md:flex md:items-center">
               {
                Links.map((link)=> (
                    <li key={link.name} className="md:ml-6 text-l">
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