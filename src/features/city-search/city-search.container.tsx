import * as React from "react";
import { useStores } from "../../stores/global.store";
import { CitySearch } from "./city-search.feature";
import { useCallback } from "react";
import { observer } from "mobx-react";

const Container: React.FC = observer(() => {
  const {
    citiesListStore,
    citiesWeathersStore,
    temperatureFilterStore,
  } = useStores();

  const onInputChange = useCallback((_: unknown, val: string) => {
    citiesListStore.setQuery(val);
  }, [citiesListStore]);

  const onSelect = useCallback((id: number) => {
    citiesWeathersStore.addCity(id, (data) => {
      temperatureFilterStore.refresh(data.map((city) => city.temp));
    });
  }, [citiesWeathersStore, temperatureFilterStore]);

  return (
    <CitySearch
      onInputChange={onInputChange}
      options={citiesListStore.cities}
      isLoading={citiesListStore.isLoading}
      onSelect={onSelect}
    />
  );
});

export { Container as CitySearch };
