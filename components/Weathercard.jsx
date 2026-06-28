import { WiDaySunny } from "react-icons/wi";
const Weathercard = () => {
  return (
    <div className="flex justify-around items-center bg-sky-100 mx-16 mt-4 border border-neutral-300 h-72">
      <div>
        <p className="">Addis Abeba</p>
        <p className="">Tuesday, may 21</p>
        <WiDaySunny size={28} className="w-16 h-16" />
      </div>
      <div>
        <p className="text-7xl">24°C</p>
        <p className="">Partly claudy</p>
      </div>
    </div>
  );
};

export default Weathercard;
