export const Injection = () => {
  const handleClick = (event) => {
    console.log("Injected: ", event.target.parentNode.parentNode);
  };

  return (
    <button
      className="flex justify-center items-center w-full h-full bg-grapefruit bg-opacity-60 text-chartreuse font-mono uppercase"
      onClick={handleClick}
    >
      Injected
    </button>
  );
};
