import {
  WiRaindrop,
  WiThermometer,
  WiStrongWind,
  WiBarometer,
} from "react-icons/wi";

const WeatherDetails = (props) => {
  return (
    <section className="grid grid-cols-4 text-black mx-16 border mt-4 h-36 bg-white rounded-xl shadow p-6">
      <div className="flex flex-col items-center justify-center border-r border-gray-300">
        <WiRaindrop
          size={40}
          color="blue
        "
        />
        <p className="">Humidity</p>
        <p className="">{props.humidity}%</p>
      </div>
      <div className="flex flex-col items-center justify-center border-r border-gray-300">
        <WiStrongWind
          size={40}
          color="blue
        "
        />
        <p className="">Wind</p>
        <p className="">{props.wind}km/h</p>
      </div>
      <div className="flex flex-col items-center justify-center border-r border-gray-300">
        <WiBarometer
          size={40}
          color="blue
        "
        />
        <p className="">Pressure</p>
        <p className="">{props.pressure}hPa</p>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <WiThermometer
          size={40}
          color="blue
        "
        />
        <p className="">Feels Like</p>
        <p className="">{props.feelsLike}°C</p>
      </div>
    </section>
  );
};

export default WeatherDetails;
