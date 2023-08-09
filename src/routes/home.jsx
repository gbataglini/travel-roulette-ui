import NavBar from "../components/NavBar";

export default function Home() {
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
              <p className="text-6xl font-bold text-black">Where to next?</p>
            </div>

            <div className="flex justify-center">
              <form>
                <input className="border-solid border-2 rounded-lg bg-transparent p-2" />

                <button className="bg-white hover:bg-black hover:text-white rounded-lg p-2 ml-3">
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
