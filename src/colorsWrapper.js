import { Component } from "react";
import classes from './colorsWrapper.module.css';

class ColorsWrapper extends Component {

    render()
    {

        const {onColorChange} = this.props;

        if (!onColorChange)
        {
            console.error("No prop");
        }

        return(
            <div>
                <div id={classes.black} className={classes.colorPicks} onClick={() => onColorChange('black') }></div>
                <div id={classes.red} className={classes.colorPicks} onClick={() => onColorChange('red') }></div>
                <div id={classes.blue} className={classes.colorPicks} onClick={() => onColorChange('blue') }></div>
                <div id={classes.purple} className={classes.colorPicks} onClick={() => onColorChange('purple') }></div>
                <div id={classes.pink} className={classes.colorPicks} onClick={() => onColorChange('pink') }></div>
            </div>
        )
    }
}

export default ColorsWrapper;