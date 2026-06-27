import { WiDayCloudy } from "react-icons/wi";

const Header = () => {
  return (
    <header className="relative bg-blue-600 h-16 text-white flex items-center">
      <p className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold">
        Weather App
      </p>

      <WiDayCloudy
        size={28}
        color="white"
        className="absolute top-1 right-3 w-16 h-16"
      />
    </header>
  );
};

export default Header;
