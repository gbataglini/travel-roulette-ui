import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

export default function Upcoming() {
  const [randomDestination, setRandomDestination] = useState(null);
  const [destinations, setDestinations] = useState([]);

  const fetchDestinationData = () => {
    fetch(`http://localhost:5001//api/v1/destinations`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDestinations(data);
      });
  };

  useEffect(() => {
    fetchDestinationData();
  }, []);

  const handleClick = async () => {
    try {
      const resDestination = await (
        await fetch(`http://localhost:5001/api/v1/destinations/random`)
      ).json();

      setRandomDestination(resDestination);

      alert(randomDestination.destinationName);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div
        className=" bg-cover bg-norepeat bg-center overflow-hidden relative h-[50vh] 
       bg-[url('src/assets/upcomingBanner.jpeg')]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-20">
          <div className="flex flex-col">
            <div className="pb-40">
              <NavBar />
            </div>

            <div className="py-8 flex justify-center">
              <p className="text-6xl font-bold italic text-white">
                TOO MANY OPTIONS?
              </p>
            </div>
            <div className="py-2 flex justify-center">
              <button
                className="bg-white hover:bg-black hover:text-white rounded-lg p-4 ml-3"
                onClick={handleClick}
              >
                Pick for me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-3xl font-bold text-black py-4">All Destinations</p>
      </div>

      <div>
        {destinations.length > 0 && (
          <ul>
            {destinations.map((destination) => (
              <li key={destination.destinationID}>
                {destination.destinationName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
