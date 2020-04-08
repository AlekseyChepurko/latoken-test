import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  createStyles,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

type CityCardProps = {
  name: string;
  cityId: string;
  temperature: string;
  wind: string;
  pressure: string;
  onDelete: (id: string) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      boxShadow: "none",
      padding: "0.5rem",
    },
    header: {
      textAlign: "left",
      padding: 0,
    },
    content: {
      padding: 0,
    },
  })
);

const CityCard: React.FC<CityCardProps> = (props) => {
  const classes = useStyles();
  const onDelete = useCallback(() => {
    props.onDelete(props.cityId);
  }, [props.onDelete, props.cityId]);

  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.name}
        className={classes.header}
        action={
          <IconButton onClick={onDelete}>
            <CloseIcon />
          </IconButton>
        }
      />

      <CardContent className={classes.content}>
        <Typography
          align={"left"}
          variant="body2"
          color="textSecondary"
          component="div"
        >
          <div>{props.temperature}</div>
        </Typography>

        <Typography
          align={"left"}
          variant="body2"
          color="textSecondary"
          component="div"
        >
          <div>Ветер: {props.wind}</div>
          <div>Давление: {props.pressure}</div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export { CityCard };
