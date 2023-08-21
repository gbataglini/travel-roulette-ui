const BlackButton = (props) => {
  const { text, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="bg-black text-white hover:bg-gray-700 hover:text-white rounded-lg p-2 ml-2 text-base mb-10"
    >
      {text}
    </button>
  );
};

export default BlackButton;
