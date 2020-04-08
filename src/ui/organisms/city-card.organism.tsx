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
import { makeStyles } from "@material-ui/core/styles";

type CityCardProps = {
  name: string;
  cityId: number;
  temperature: number;
  wind: number;
  pressure: number;
  onDelete: (id: number) => void;
  icon: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      border: '1px solid rgba(0, 0, 0, .5)',
      padding: "0.5rem",
    },
    header: {
      textAlign: "left",
      padding: 0,
    },
    content: {
      padding: 0,
    },
    temperature: {
      display: "flex",
      alignItems: "center",
    },
    icon: {
      width: "3rem",
      height: "3rem",
    },
  })
);

const CityCard: React.FC<CityCardProps> = (props) => {
  const classes = useStyles();
  const onDelete = useCallback(() => {
    props.onDelete(props.cityId);
  }, [props]);

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
          align={"justify"}
          variant="body2"
          color="textSecondary"
          component="div"
          className={classes.temperature}
        >
          <img
            className={classes.icon}
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt=""
          />
          <div>{props.temperature > 0 ? `+${props.temperature}` : props.temperature}</div>
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
