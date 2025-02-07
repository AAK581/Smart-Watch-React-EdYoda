import { Component } from "react";
import classes from './leftWatch.module.css'

class LeftWatch extends Component {


    render()
    {
        let watches = {
            black: 'https://i.imgur.com/iOeUBV7.png',
            red: 'https://i.imgur.com/PTgQlim.png',
            blue: 'https://i.imgur.com/Mplj1YR.png',
            purple: 'https://i.imgur.com/xSIK4M8.png',
            pink: 'https://i.imgur.com/Zygu7I3.png'
        }

        return(
            <div className={classes.leftWatch}>
                <img src={watches[this.props.chosenColor]} alt="Watch"></img>
                <p id={classes.timeWatch} className={this.props.timeWatch? classes.show : classes.hide}>{new Date().toTimeString().split(' ')[0]}</p>
                <img id={classes.heartPic} className={this.props.timeWatch? classes.hide : classes.show} src="https://uxwing.com/wp-content/themes/uxwing/download/medical-science-lab/heart-rate-icon.png" alt="heartBeat" />
                <div id={classes.heartDiv} className={this.props.timeWatch? classes.hide : classes.show}>
                    <p id={classes.heartP} className={this.props.timeWatch? classes.hide : classes.show}>78</p>
                </div>
            </div>
            
        )
    }

}

export default LeftWatch;