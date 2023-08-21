import BlackButton from "./BlackButton";

const Tile = (props) => {
  const { id, name, firstAction, secondAction } = props;

  return (
    <div key={id} className="grid place-content-evenly">
      <p className="text-xl p-3">{name} </p>

      <div className="flex flex-row">
        <BlackButton
          text={firstAction.text}
          onClick={(e) => {
            firstAction.onClick(id);
          }}
        />

        <BlackButton
          text={secondAction.text}
          onClick={(e) => {
            secondAction.onClick(id);
          }}
        />
      </div>
    </div>
  );
};

export default Tile;
