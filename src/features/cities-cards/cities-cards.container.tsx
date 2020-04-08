import * as React from "react";
import { useStores } from "../../stores/global.store";
import { CitiesCards } from "./cities-cards.feature";
import { observer } from "mobx-react";
import { useCallback } from "react";

const Container: React.FC = observer(() => {
  const { citiesWeathersStore, temperatureFilterStore } = useStores();

  const citiesInfo = citiesWeathersStore.weathers
    .map((city) => ({
      name: city.name,
      cityId: city.id,
      temperature: city.temp,
      wind: city.wind,
      pressure: city.pressure,
      icon: city.icon,
    }))
    .filter((city) => city.temperature >= temperatureFilterStore.current);

  const removeCity = useCallback(
    (id: number) => {
      citiesWeathersStore.removeCity(id);
      temperatureFilterStore.refresh(
        citiesWeathersStore.weathers.map((city) => city.temp)
      );
    },
    [citiesWeathersStore, temperatureFilterStore]
  );

  return <CitiesCards removeCity={removeCity} citiesInfo={citiesInfo} />;
});

export { Container as CitiesCards };
