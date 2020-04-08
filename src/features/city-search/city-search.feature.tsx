import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useCallback, useState } from "react";
import { Button, Grid } from "@material-ui/core";

type CitySearchProps = {
  options?: string[];
  onInputChange?: () => void;
  onSelect?: () => void;
};

const CitySearch: React.FC<CitySearchProps> = (props) => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const onInputChange = useCallback((e, value) => {
    setSelectedElement(value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (selectedElement) {
      }
      console.log(selectedElement);
    },
    [selectedElement]
  );

  return (
    <form action="#" onSubmit={onSubmit}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Autocomplete<string>
          id="city"
          options={["one", "two"]}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Город" variant="outlined" />
          )}
          onChange={onInputChange}
        />
        <Button type="submit">+</Button>
      </Grid>
    </form>
  );
};

export { CitySearch };
