import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Tile from "../components/Tile";

export default function Upcoming() {
  const [randomDestination, setRandomDestination] = useState(null);
  const [destinations, setDestinations] = useState([]);

  const fetchDestinationData = () => {
    fetch(`http://localhost:5001/api/v1/destinations`)
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

  useEffect(() => {}, [destinations])


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
  
  const handleDelete = (id) => {
    console.log(id + 'id')
    fetch(`http://localhost:5001/api/v1/destinations/${id}`, {
    method: 'DELETE'
    })
    .then(() => {
      fetchDestinationData();
    })
    .catch(error => console.error(error));
    
  }

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
                className="bg-white hover:bg-gray-700 hover:text-white rounded-lg p-4 ml-3"
                onClick={handleClick}
              >
                Pick for me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="m-10">
        <p className="text-3xl font-bold text-black py-1">All Destinations</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {destinations.map(data => (<Tile key={data.destinationID} id = {data.destinationID} name={data.destinationName} item={data} onClick = {handleDelete} />))
        }
      </div>
    </>
  );
}