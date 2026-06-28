const Searchbar = () => {
  return (
    <div className="h-24 border border-neutral-300 mx-16 mt-4">
      <form action="" className="pt-8 flex justify-center items-center gap-2">
        <input
          type="text"
          name=""
          id=""
          placeholder="enter city name"
          className="border w-64 h-10 rounded pl-2"
        />
        <button type="submit" className=" bg-blue-600 h-10 w-24 rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
