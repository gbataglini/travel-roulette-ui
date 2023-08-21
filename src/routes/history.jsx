import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Tile from "../components/Tile";

export default function History() {
  const [destinations, setDestinations] = useState([]);

  const fetchDestinationData = () => {
    fetch(
      `http://localhost:5001/api/v1/destinations?status=${encodeURIComponent(
        "visited"
      )}`
    )
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

  useEffect(() => {}, [destinations]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5001/api/v1/destinations/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchDestinationData();
      })
      .catch((error) => console.error(error));
  };

  const handleSetNotVisited = (id) => {
    fetch(`http://localhost:5001/api/v1/destinations/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",

      body: JSON.stringify({
        status: "not visited",
      }),
    })
      .then(() => {
        fetchDestinationData();
      })
      .catch((error) => console.error(error));
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
            <div className="py-8 flex justify-center"></div>
          </div>
        </div>
      </div>

      <div className="m-10">
        <p className="text-3xl font-bold text-black py-1">All Destinations</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {destinations.map((data) => (
          <Tile
            key={data.destinationID}
            id={data.destinationID}
            name={data.destinationName}
            item={data}
            firstAction={{
              text: "Mark as Not Visited",
              onClick: handleSetNotVisited,
            }}
            secondAction={{ text: "Delete", onClick: handleDelete }}
          />
        ))}
      </div>
    </>
  );
}
