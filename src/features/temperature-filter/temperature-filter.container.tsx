import * as React from "react";
import { useStores } from "../../stores/global.store";
import { TemperatureFilter } from "./temperature-filter.feature";
import { observer } from "mobx-react";

const Container: React.FC = observer(() => {
  const { temperatureFilterStore } = useStores();

  return (
    <TemperatureFilter
      max={temperatureFilterStore.max}
      min={temperatureFilterStore.min}
      onChangeCommitted={temperatureFilterStore.setFilterValue}
    />
  );
});

export { Container as TemperatureFilter };
