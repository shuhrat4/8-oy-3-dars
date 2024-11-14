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
    <div className="w-[300px] p-2 rounded-md bg-slate-200">
      <img className="h-[200px]" src={item.img} alt={item.name} width="100%" height={300} />
      <h2 className="font-bold text-[22px] mb-2">{item.name}</h2>
      <p className="text-slate-500">{item.capital} - {item.population}</p>
      <button onClick={handleSave} className="mt-2 p-2 bg-blue-500 text-white rounded-md">
        Save
      </button>
    </div>
  );
};

export default CountryItem;
