import './App.css';
import { Component } from 'react';
import LeftWatch from './leftWatch';
import ColorsWrapper from './colorsWrapper';
import FeaturesWatch from './featuresWatch';

class App extends Component {

  state = {
    timeWatch: 0,
    chosenColor: 'black'
  }

  handleColorChange = (color) => {
    this.setState({chosenColor: color})
  }

  render()
  {

    return (
      <div>
        <nav>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrASx5YZo5r2HrdZxCXEagZYDP6HMog9Y1A&usqp=CAU" style={{height : '50px'}}></img>
        </nav>
        <div className='mainDiv'>
          <div id='leftWatch'>
            <LeftWatch chosenColor={this.state.chosenColor} timeWatch={this.state.timeWatch}/>
          </div>
          <div id='rightDetails'>
            <h1>FitBit 19 - The Smartest Watch</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa illum aliquid quo distinctio quos!</p>
            <h3>Select Color</h3>
            <div id='colorsWrapper'>
                <ColorsWrapper onColorChange={this.handleColorChange}/>
            </div>
            <h3 id="featuresH3">Features</h3>
            <div id='featuresWatch'>
                <FeaturesWatch onTimeChange={(value) => this.setState({timeWatch: value})}/>
            </div>
            <button id="buyNow">BUY NOW</button>
          </div>
        </div>
      </div>
  
    )
  }
}

export default App;
