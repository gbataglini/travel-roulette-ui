import NavBar from "../components/NavBar";
import { useState } from "react";

export default function Home() {
  const [destination, setDestination] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5001/api/v1/destinations", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          destinationName: destination,
        }),
      });

      if (res.status === 200) {
        setDestination("");
        console.log("Destination added successfully");
      } else {
        alert("Error! Could not add destination. ");
      }
    } catch (err) {
      console.log(err);
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
              <p className="text-7xl font-bold italic text-black">WHERE TO?</p>
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
