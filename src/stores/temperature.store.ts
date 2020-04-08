import { action, observable } from "mobx";

class TemperatureFilterStore {
  @observable current: number;
  @observable min: number;
  @observable max: number;

  constructor() {
    this.min = 0;
    this.max = 0;

    this.current = this.min;
  }

  @action
  setFilterValue = (val: number) => {
      this.current = val;
  };

  @action
  refresh = (temps: number[]) => {
    this.min = Math.min(...temps);
    this.max = Math.max(...temps);

    if (this.current > this.max) {
      this.current = this.max;
    }

    if (this.current < this.min) {
      this.current = this.min;
    }
  };
}

export { TemperatureFilterStore };
