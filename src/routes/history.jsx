import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import Tile from "../components/Tile";
import { upcomingActions } from "../api/upcoming/upcomingActions";

export default function History() {
  const { fetchDestinationData, handleDelete, handleUpdateStatus } =
    upcomingActions();

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    let fn = async () => {
      setDestinations(await fetchDestinationData("visited"));
    };

    fn().then(() => {});
  }, []);

  useEffect(() => {}, [destinations]);

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
              onClick: async () => {
                let success = await handleUpdateStatus(
                  data.destinationID,
                  "not visited"
                );
                if (!success) {
                  return;
                }
                setDestinations(await fetchDestinationData("visited"));
              },
            }}
            secondAction={{
              text: "Delete",
              onClick: async () => {
                let success = await handleDelete(data.destinationID);
                if (!success) {
                  return;
                }
                setDestinations(await fetchDestinationData("visited"));
              },
            }}
          />
        ))}
      </div>
    </>
  );
}
