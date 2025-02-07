import { Component } from "react";
import classes from './featuresWatch.module.css'
import LeftWatch from "./leftWatch";

class FeaturesWatch extends Component {
    render()
    {

        return (
            <div>
                <button id="btnTime" onClick={() => {this.props.onTimeChange(1)}} className={classes.btnFeatures}>Time</button>
                <button id="btnHeart" onClick={() => {this.props.onTimeChange(0)}} className={classes.btnFeatures}>Heart Rate</button>
            </div>
        )
    }
}

export default FeaturesWatch;