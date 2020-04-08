import { action, observable } from "mobx";
import { getCityWeather } from "../api/city-weather.api";

type CityWeather = {
  id: number;
  name: string;
  wind: number;
  temp: number;
  pressure: number;
  icon: string;
};

class CitiesWeathersStore {
  @observable weathers: CityWeather[] = [];

  addCity = (id: number, cb?: (data: CityWeather[]) => void) => {
    if (this.weathers.findIndex((city) => city.id === id) === -1) {
      getCityWeather(id)
        .then((r) => ({
          id: id,
          name: r.name,
          temp: parseInt(`${r.main.temp - 273}`),
          pressure: parseInt(`${r.main.pressure / 1.33}`, 10),
          wind: r.wind.speed,
          icon: r.weather[0].icon
        }))
        .then((r) => {
          if (r) {
            this.weathers.push(r);
            cb && cb(this.weathers);
          }
        })
        .catch(() => null);
    }
  };

  @action
  removeCity = (id: number) => {
    this.weathers = this.weathers.filter((city) => city.id !== id);
  };
}

export { CitiesWeathersStore };
