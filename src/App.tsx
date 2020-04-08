import React from "react";
import "./App.css";
import { CitySearch } from "./features/city-search";
import { TemperatureFilter } from "./features/temperature-filter";
import { CitiesCards } from "./features/cities-cards";
import { createStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    body: {
      padding: "5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "baseline",
      justifyContent: "center",
    },

    filters: {
      display: "flex",
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">LaToken Test</header>

      <div className={classes.body}>
        <div className={classes.filters}>
          <CitySearch />

          <TemperatureFilter />
        </div>

        <CitiesCards />
      </div>
    </div>
  );
}

export default App;
