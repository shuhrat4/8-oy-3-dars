import axios from "axios";
import { useContext, useEffect } from "react";
import CountryItem from "./CountryItem";
import { Context } from "../Context/Context";

export interface CountryType {
  name: string;
  capital: string | null; 
  img: string;
  flagIcon: string;
  population: number;
}

const CountryList = () => {
  const { countries, setCountries } = useContext(Context);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(
        res.data.slice(0, 20).map((item: any) => {
          const data: CountryType = {
            name: item.name.common,
            capital: item.capital ? item.capital[0] : "N/A",
            population: item.population,
            img: item.flags.png,
            flagIcon: item.flag,
          };
          return data;
        })
      );
    });
  }, []);

  return (
    <div className="p-5 flex justify-between flex-wrap gap-5">
      {countries.map((item: CountryType) => (
        <CountryItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default CountryList;
