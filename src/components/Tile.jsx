const Tile = (props) => {
    const { id, name, onClick } = props;


    return (
    <div key={id} className="grid place-content-evenly">
    <p className="text-xl p-3">{name} </p>

    <div className="flex flex-row">
    <button className="bg-black text-white hover:bg-gray-700 hover:text-white rounded-lg p-2 ml-2 text-base mb-10">
      Mark as Visited
    </button>

    <button className="bg-black text-white hover:bg-gray-700 hover:text-white rounded-lg p-2 ml-2 text-base mb-10"
    onClick={(e) => {
        onClick(id);

    }}
    >
      Delete
    </button>
    </div>
  </div>
  )
}

export default DestinationTile
