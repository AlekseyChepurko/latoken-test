import React from "react";
import "./App.css";
import { CitySearch } from "./features/city-search";
import { TemperatureFilter } from "./features/temperature-filter";
import { CitiesCards } from "./features/cities-cards";

const mock = [
  {
    name: "string",
    cityId: "string1",
    temperature: "string",
    wind: "string",
    pressure: "string",
  },
  {
    name: "string",
    cityId: "string2",
    temperature: "string",
    wind: "string",
    pressure: "string",
  },
  {
    name: "string",
    cityId: "string3",
    temperature: "string",
    wind: "string",
    pressure: "string",
  },
  {
    name: "string",
    cityId: "string4",
    temperature: "string",
    wind: "string",
    pressure: "string",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">LaToken Test</header>

      <CitySearch />

      <TemperatureFilter min={0} max={100} />

      <CitiesCards citiesInfo={mock} />
    </div>
  );
}

export default App;
