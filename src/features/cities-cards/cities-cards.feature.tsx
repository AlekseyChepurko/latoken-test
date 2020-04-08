import * as React from "react";
import { CityCard } from "../../ui/organisms";
import { createStyles, GridList, GridListTile, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useCallback } from "react";

type CitiesCardsProps = {
  removeCity?: (id: number) => void;
  citiesInfo: {
    name: string;
    cityId: number;
    temperature: number;
    wind: number;
    pressure: number;
    icon: string;
  }[];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  })
);

const CitiesCards = (props: CitiesCardsProps) => {
  const classes = useStyles();

  const removeCityProp = props.removeCity;

  const removeCity = useCallback(
    (id: number) => {
      removeCityProp && removeCityProp(id);
    },
    [removeCityProp]
  );

  return (
    <GridList cellHeight={200} className={classes.gridList} cols={3}>
      {props.citiesInfo.map((tile) => (
        <GridListTile key={tile.cityId}>
          <CityCard
            name={tile.name}
            cityId={tile.cityId}
            temperature={tile.temperature}
            wind={tile.wind}
            icon={tile.icon}
            pressure={tile.pressure}
            onDelete={removeCity}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export { CitiesCards };
