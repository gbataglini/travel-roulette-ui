const WhiteButton = (props) => {
  const { text, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="bg-white hover:bg-gray-700 hover:text-white rounded-lg p-4 ml-3"
    >
      {text}
    </button>
  );
};

export default WhiteButton;
