import React from "react";
import { CitiesListStore } from "./cities-list.store";
import { CitiesWeathersStore } from "./cities-weather.store";
import {TemperatureFilterStore} from './temperature.store';

const storesContext = React.createContext({
  citiesListStore: new CitiesListStore(),
  citiesWeathersStore: new CitiesWeathersStore(),
  temperatureFilterStore: new TemperatureFilterStore(),
});

const useStores = () => React.useContext(storesContext);

export { useStores };
