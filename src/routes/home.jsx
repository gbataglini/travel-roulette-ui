import NavBar from "../components/NavBar";
import { useState } from "react";
import { upcomingActions } from "../api/upcoming/upcomingActions";

export default function Home() {
  const { createDestination } = upcomingActions();

  const [destination, setDestination] = useState("");

  let handleSubmit = async (e) => {
    //prevents form submit from refreshing page
    e.preventDefault();
    let success = await createDestination(destination);
    console.log(success);
    if (success) {
      setDestination("");
      alert("Destination added successfully!");
    } else {
      alert("Error! Could not add destination.");
    }
  };

  return (
    <>
      <div
        className=" bg-cover bg-no-repeat overflow-hidden relative h-[100vh] 
       bg-[url('/Users/giovannabataglini/Documents/Development/travel-roulette-ui/src/assets/homeBanner.jpeg')]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-20">
          <div className="flex flex-col">
            <div className="pb-40">
              <NavBar />
            </div>

            <div className="py-8 flex justify-center">
              <p className="text-7xl font-bold italic text-white">WHERE TO?</p>
            </div>

            <div className="flex justify-center">
              <form onSubmit={handleSubmit}>
                <input
                  className="border-solid border-2 rounded-lg bg-transparent p-2"
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />

                <button
                  className="bg-white hover:bg-black hover:text-white rounded-lg p-2 ml-3"
                  type="submit"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
