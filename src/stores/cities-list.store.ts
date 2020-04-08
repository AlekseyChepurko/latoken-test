import { action, observable, reaction } from "mobx";
import { getCities } from "../api/cities.api";

class CitiesListStore {
  @observable isLoading = false;
  @observable
  private query = "";
  @observable cities: { name: string; id: number }[] = [];

  constructor() {
    reaction(
      () => this.query,
      (a) => {
        this.loadCities(a);
      },
      { delay: 500 }
    );
  }

  @action
  setQuery(query: string) {
    this.query = query;
  }

  @action
  setCities = (cities: { name: string; id: number }[]) => {
    this.cities = cities;
  };

  loadCities(query: string) {
    this.isLoading = true;
    getCities(query)
      .then((citiesResponse = []) => {
        return citiesResponse.map((city) => ({
          name: `${city.name}, ${city.sys.country}`,
          id: city.id,
        }));
      })
      .then(this.setCities)
      .finally(() => {
        this.isLoading = false;
      });
  }
}

export { CitiesListStore };
