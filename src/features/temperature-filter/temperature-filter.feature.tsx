import * as React from 'react';
import {Slider, Typography} from '@material-ui/core';

type TemperatureFilterProps = {
    min: number;
    max: number;
};

const TemperatureFilter: React.FC<TemperatureFilterProps> = (props) => {
    return (
        <div>
            <Typography id="disabled-slider" gutterBottom>
                Где сейчас теплее, чем
            </Typography>
            <Slider
                defaultValue={props.min}
                aria-labelledby="disabled-slider"
                valueLabelDisplay="on"
                step={1}
                min={props.min}
                max={props.max}
                valueLabelFormat={(s) => `${s} C`}

            />
        </div>
    );
};

export {
    TemperatureFilter,
}
