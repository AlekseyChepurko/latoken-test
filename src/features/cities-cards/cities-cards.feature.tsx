import * as React from "react";
import { CityCard } from "../../ui/organisms";
import { createStyles, GridList, GridListTile, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

type CitiesCardsProps = {
  citiesInfo: {
    name: string;
    cityId: string;
    temperature: string;
    wind: string;
    pressure: string;
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

  return (
    <GridList cellHeight={200} className={classes.gridList} cols={3}>
      {props.citiesInfo.map((tile) => (
        <GridListTile key={tile.cityId}>
          <CityCard
            name={"string;"}
            cityId="string"
            temperature={"string;"}
            wind={"string;"}
            pressure={"string;"}
            onDelete={(id: string) => null}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export { CitiesCards };
