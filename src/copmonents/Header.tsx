import React, { useContext } from "react";
import { Context } from "../Context/Context";

interface HeaderType {
  title: string;
  extraStyle: string;
}

const Header = ({ title, extraStyle }: HeaderType) => {
  const { countries, setCountries, savedCountries } = useContext(Context);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase();
    const data = countries.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setCountries(data);
  }

  return (
    <header className={`${extraStyle} p-8 bg-gradient-to-r from-teal-400 to-emerald-500 text-white rounded-3xl shadow-2xl flex items-center justify-between`}>
      <h1 className="font-extrabold text-5xl">{title}</h1>
      <input
        onChange={handleChange}
        className="p-3 rounded-full outline-none w-[250px] bg-white text-gray-800 placeholder-gray-500 shadow-lg transition-all focus:ring-2 focus:ring-teal-300 focus:ring-opacity-60"
        placeholder="Search countries"
      />
      <div className="text-lg font-semibold">
        Saved Countries: {savedCountries ? savedCountries.length : 0}
      </div>
    </header>
  );
};

export default Header;
