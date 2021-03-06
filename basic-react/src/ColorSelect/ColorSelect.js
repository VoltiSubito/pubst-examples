import React, { Component } from 'react';
import pubst from 'pubst';
import {subscriber} from 'react-pubst';

import './ColorSelect.css';

class ColorSelect extends Component {

  colorSelected = (event) => {
    pubst.publish('COLOR', event.target.value);
  }

  doReset = () => {
    pubst.clear('COLOR');
  }

  render() {
    const {color} = this.props;
    return (
      <div className="ColorSelect">
        <select value={color} onChange={this.colorSelected} >
          <option value="" disabled>
            Please pick a color
          </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <br/><br/>
        <button onClick={this.doReset}>Reset</button>
      </div>
    );
  }
}

export default subscriber(ColorSelect, {
  color: {
    topic: 'COLOR',
    default: ''
  }
});
