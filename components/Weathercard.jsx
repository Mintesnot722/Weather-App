const Weathercard = (props) => {
  return (
    <div className="flex justify-around items-center bg-sky-100 mx-16 mt-4 border border-neutral-300 h-72">
      <div>
        <p className="">{props.city}</p>
        <p className="">{props.time}</p>
      </div>
      <div>
        <p className="text-7xl">{props.temperature}°C </p>
        <p className="">{props.condition}</p>
      </div>
    </div>
  );
};

export default Weathercard;
