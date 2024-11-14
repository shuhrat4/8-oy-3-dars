import React, { createContext, ReactNode, useState } from "react";
import { CountryType } from "../copmonents/CountryList";

interface ContextType {
  countries: CountryType[];
  setCountries: React.Dispatch<React.SetStateAction<CountryType[]>>;
  savedCountries: CountryType[];
  setSavedCountries: React.Dispatch<React.SetStateAction<CountryType[]>>;
}

export const Context = createContext<ContextType>({
  countries: [],
  setCountries: () => null,
  savedCountries: [], 
  setSavedCountries: () => null,
});

export const CountryContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [savedCountries, setSavedCountries] = useState<CountryType[]>([]);

  return (
    <Context.Provider value={{ countries, setCountries, savedCountries, setSavedCountries }}>
      {children}
    </Context.Provider>
  );
};
