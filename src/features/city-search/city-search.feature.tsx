import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useCallback, useState } from "react";
import { Button, createStyles, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

type Option = { name: string; id: number };

type CitySearchProps = {
  options: Option[];
  onInputChange?: (_: unknown, val: string) => void;
  onSelect: (id: number) => void;
  isLoading: boolean;
};

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      marginRight: "5rem",
    },
    container: {
      height: "100%",
    },
    button: {
      height: "calc(100% - 4px)",
      border: "1px solid rgba(0, 0, 0, 0.2)",
    },
  })
);

const CitySearch: React.FC<CitySearchProps> = (props) => {
  const [selectedElement, setSelectedElement] = useState<number>(-1);
  const classes = useStyles();

  const onChange = useCallback((_: unknown, value: Option | null) => {
    if (value) {
      setSelectedElement(value.id);
    }
  }, []);

  const onSelect = props.onSelect;
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (selectedElement > -1) {
        onSelect(selectedElement);
      }
    },
    [selectedElement, onSelect]
  );

  return (
    <form action="#" onSubmit={onSubmit} className={classes.form}>
      <Grid
        className={classes.container}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Autocomplete<{ name: string; id: number }>
          id="city"
          loading={props.isLoading}
          options={props.options || []}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Город" variant="outlined" />
          )}
          renderOption={(option) => {
            return option.name;
          }}
          getOptionLabel={(o) => o.name}
          onChange={onChange}
          onInputChange={props.onInputChange}
        />
        <Button className={classes.button} type="submit">
          +
        </Button>
      </Grid>
    </form>
  );
};

export { CitySearch };
