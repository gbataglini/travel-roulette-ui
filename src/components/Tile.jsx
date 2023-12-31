const Tile = (props) => {
  const { id, name, firstAction, secondAction } = props;

  return (
    <div className="grid place-content-evenly">
      <p className="text-xl p-3">{name} </p>

      <div className="flex flex-row">
        <button
          className="bg-black text-white hover:bg-gray-700 hover:text-white rounded-lg p-2 ml-2 text-base mb-10"
          onClick={(e) => {
            firstAction.onClick(id);
          }}
        >
          {firstAction.text}
        </button>

        <button
          className="bg-black text-white hover:bg-gray-700 hover:text-white rounded-lg p-2 ml-2 text-base mb-10"
          onClick={(e) => {
            secondAction.onClick(id);
          }}
        >
          {secondAction.text}
        </button>
      </div>
    </div>
  );
};

export default Tile;
