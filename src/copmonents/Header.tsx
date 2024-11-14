import { useContext } from "react";
import { CountryType } from "./CountryList";
import { Context } from "../Context/Context";

interface HeaderType {
  title: string;
  extraStyle: string;
}

const Header = ({ title, extraStyle }: HeaderType) => {
  const { countries, setCountries, savedCountries } = useContext(Context);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase();
    const data = countries.filter((item: CountryType) =>
      item.name.toLowerCase().includes(value)
    );
    setCountries(data);
  }

  return (
    <header className={`${extraStyle} p-5 flex items-center justify-between`}>
      <h1 className="font-bold text-[25px]">{title}</h1>
      <input
        onChange={handleChange}
        className="p-2 rounded-md outline-none w-[250px]"
        placeholder="Search countries"
      />
      <div className="text-sm text-gray-700 font-bold text-[20px]">
        Saved Countries: {savedCountries ? savedCountries.length : 0}
      </div>
    </header>
  );
};

export default Header;
