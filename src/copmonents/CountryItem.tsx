import React, { useContext } from "react";
import { CountryType } from "./CountryList";
import { Context } from "../Context/Context";

const CountryItem: React.FC<{ item: CountryType }> = ({ item }) => {
  const { savedCountries, setSavedCountries } = useContext(Context);

  function handleSave() {
    if (!savedCountries.some((saved) => saved.name === item.name)) {
      setSavedCountries([...savedCountries, item]);
    }
  }

  return (
    <div className="w-[300px] p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all ease-in-out duration-300">
      <img className="h-[200px] w-full object-cover rounded-lg" src={item.img} alt={item.name} />
      <h2 className="font-semibold text-xl mt-4 mb-2 text-gray-800">{item.name}</h2>
      <p className="text-sm text-gray-600">{item.capital} - {item.population}</p>
      <button onClick={handleSave} className="mt-3 p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300">
        Save
      </button>
    </div>
  );
};

export default CountryItem;
