import Header from "../components/Header";
import SearchBar from "../components/Searchbar";
import Weathercard from "../components/Weathercard";
import WeatherDetails from "../components/Weatherdetails";
import Footer from "../components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Weathercard />
      <WeatherDetails />
      <Footer />
    </>
  );
}

export default App;
