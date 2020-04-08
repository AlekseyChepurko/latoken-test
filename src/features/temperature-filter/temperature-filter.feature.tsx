import * as React from "react";
import { Slider, Typography, withStyles } from "@material-ui/core";
import { useCallback } from "react";

type TemperatureFilterProps = {
  min: number;
  max: number;
  onChangeCommitted: (n: number) => void;
};

const isValidNumber = (n: number) => {
  return Number.isFinite(n) && !Number.isNaN(n);
};

const CustomSlider = withStyles({
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    marginTop: -14,
    marginLeft: -14,
    boxShadow:
      "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
    },
    "&.Mui-disabled": {
      height: 25,
      width: 25,
      marginTop: -14,
      marginLeft: -14,
    },
  },
  valueLabel: {
    left: "calc(-50% + 11px)",
    top: 35,
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);

const TemperatureFilter: React.FC<TemperatureFilterProps> = (props) => {
  const formatLabel = useCallback(
    (v: number) => {
      const current =
        props.min === props.max &&
        isValidNumber(props.min) &&
        isValidNumber(props.max)
          ? 0
          : v;
      return `${current.toFixed(1)} C`;
    },
    [props.min, props.max]
  );

  const onChangeCommittedProp = props.onChangeCommitted;

  const onChangeCommitted = useCallback(
    (_: unknown, n: number | number[]) => {
      const targetValue = Array.isArray(n) ? n[0] : n;

      onChangeCommittedProp(targetValue);
    },
    [onChangeCommittedProp]
  );

  return (
    <div>
      <Typography id="disabled-slider" gutterBottom>
        Где сейчас теплее, чем
      </Typography>
      <CustomSlider
        defaultValue={props.min}
        aria-labelledby="disabled-slider"
        valueLabelDisplay="on"
        step={0.01}
        disabled={
          props.min === props.max ||
          !isValidNumber(props.max) ||
          !isValidNumber(props.min)
        }
        min={props.min}
        max={props.max}
        valueLabelFormat={formatLabel}
        onChange={onChangeCommitted}
      />
    </div>
  );
};

export { TemperatureFilter };
